import React from 'react';

// External Components
import {
  Section,
  Heading,
  Box,
  Input,
  Label,
  Button,
  TextArea
} from '@thepuzzlers/pieces';

import { Formik, Form, useField } from 'formik';
import { useHubSpotForms } from 'graphqlHooks';

export const Header = ({ data: { headline } }) => {
  const hubSpotForms = useHubSpotForms();

  const contactUsFormData = hubSpotForms?.nodes?.find(
    ({ id }) => id === 'd987854c-ee23-42a2-8930-99e642789653'
  );

  console.log('this is the hubspot forms', contactUsFormData);

  return (
    // Markup
    <ContentWrapper>
      <Headline data={headline} />
      <HubSpotForm data={contactUsFormData} />
      <EmbeddedHubSpotForm
        formId="d987854c-ee23-42a2-8930-99e642789653"
        portalId="39610935"
      />
    </ContentWrapper>
  );
};

// Elements

const ContentWrapper = ({ children }) => (
  <Section
    id="landing-page__header"
    as="header"
    sx={{
      mt: '10rem'
    }}>
    {children}
  </Section>
);

const Headline = ({ data }) => (
  <Heading
    as="h1"
    dangerouslySetInnerHTML={{
      __html: data
    }}
    sx={{
      gridColumn: '1/13',
      fontFamily: 'primary.normal',
      fontSize: ['3rem', '3rem', '3rem', '3rem', '3rem', '3rem']
    }}
  />
);

const HubSpotForm = ({
  data: { formFieldGroups, id, name, portalId, submitText }
}) => {
  const submitFormToHubSpot = (data) => {
    // Create the new request
    var xhr = new XMLHttpRequest();
    var url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${id}`;

    var final_data = JSON.stringify(data);

    xhr.open('POST', url);
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        alert(xhr.responseText); // Returns a 200 response if the submission is successful.
      } else if (xhr.readyState == 4 && xhr.status == 400) {
        alert(xhr.responseText); // Returns a 400 error the submission is rejected.
      } else if (xhr.readyState == 4 && xhr.status == 403) {
        alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
      } else if (xhr.readyState == 4 && xhr.status == 404) {
        alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found
      }
    };

    // Sends the request

    xhr.send(final_data);
  };

  const convertValuesToArray = (values) => {
    return Object.keys(values).map((key) => ({
      name: key,
      value: values[key]
    }));
  };

  const prepareDataForSubmission = (values) => {
    const formData = convertValuesToArray(values);
    const submittedAt = new Date().getTime(); // date in millisecond
    return {
      submittedAt,
      fields: formData,
      context: {
        pageUri: 'www.example.com/page',
        pageName: 'Example page'
      }
    };
  };

  return (
    <Box
      sx={{
        gridColumn: ['1/13'],
        mt: ['3rem']
      }}>
      <Heading
        sx={{
          fontFamily: 'primary.normal',
          fontSize: ['4rem']
        }}>
        {name}
      </Heading>
      <Formik
        enableReinitialize
        initialValues={{
          email: '',
          firstname: '',
          lastname: '',
          message: ''
        }}
        onSubmit={async (values) => {
          const preparedValues = prepareDataForSubmission(values);
          console.log('this is prepared values', preparedValues);
          submitFormToHubSpot(preparedValues);
        }}>
        <Form>
          {formFieldGroups.map((fieldGroup, index) => {
            const fieldProps = fieldGroup.fields[0];
            return (
              <FormField
                key={index}
                id={fieldProps.name}
                label={fieldProps.label}
                name={fieldProps.name}
                type={fieldProps.fieldType}
              />
            );
          })}
          <SubmitButton text={submitText} />
        </Form>
      </Formik>
    </Box>
  );
};

const FormField = ({ id, label, name, type = 'text' }) => {
  const [field, meta, helper] = useField(name);

  switch (type) {
    case 'text':
      return (
        <TextInput id={id} name={name} type={type} {...field} label={label} />
      );
    case 'textarea':
      return (
        <TextAreaInput
          id={id}
          name={name}
          type={type}
          {...field}
          label={label}
        />
      );
    default:
      return (
        <TextInput id={id} name={name} type={type} {...field} label={label} />
      );
  }
};

const TextInput = ({ label, ...props }) => {
  return (
    <FormWrapper id={props.id} label={label}>
      <Input
        sx={{
          fontFamily: 'body.normal',
          fontSize: ['1.5rem'],
          borderRadius: '3px',
          lineHeight: 2,
          mt: ['1rem']
        }}
        {...props}
      />
    </FormWrapper>
  );
};

const TextAreaInput = ({ label, ...props }) => {
  return (
    <FormWrapper id={props.id} label={label}>
      <TextArea
        {...props}
        sx={{
          fontFamily: 'body.normal',
          fontSize: ['1.5rem'],
          borderRadius: '3px',
          lineHeight: 2,
          mt: ['1rem']
        }}
      />
    </FormWrapper>
  );
};

const FormWrapper = ({ label, id, children }) => {
  return (
    <Box
      sx={{
        mt: ['2rem']
      }}>
      <Label
        htmlFor={id}
        sx={{
          fontFamily: 'body.normal',
          fontSize: ['1.5rem']
        }}>
        {label}
      </Label>
      {children}
    </Box>
  );
};

const SubmitButton = ({ text }) => {
  return (
    <Button
      type="submit"
      sx={{
        p: '1rem 2rem',
        mt: '2rem'
      }}>
      {text}
    </Button>
  );
};

/**
 *  region: 'na1',
 *  portalId: '39610935',
 *  formId: 'd987854c-ee23-42a2-8930-99e642789653'
 */

const EmbeddedHubSpotForm = ({ portalId, formId }) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window?.hbspt) {
        window?.hbspt.forms.create({
          portalId,
          formId,
          target: `#${formId}`
        });
      }
    });
  }, []);

  return (
    <Box
      className="hubspot-form-container"
      sx={{
        gridColumn: ['1/13'],
        mt: ['4rem'],
        '& label > span': {
          fontFamily: 'primary.normal'
        }
      }}>
      <Box id={formId} />
    </Box>
  );
};
