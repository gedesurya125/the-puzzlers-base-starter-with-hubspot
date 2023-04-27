import React from 'react';

// External Components
import {
  Section,
  Heading,
  Box,
  Input,
  Label,
  Button
} from '@thepuzzlers/pieces';

import { Formik, Form, useField } from 'formik';

export const Header = ({ data: { headline } }) => {
  return (
    // Markup
    <ContentWrapper>
      <Headline data={headline} />
      <HubSpotForm />
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

const HubSpotForm = () => {
  const submitFormToHubSpot = (data) => {
    // Create the new request
    var xhr = new XMLHttpRequest();
    var url =
      'https://api.hsforms.com/submissions/v3/integration/submit/39610935/d987854c-ee23-42a2-8930-99e642789653';

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
        gridColumn: ['1/13']
      }}>
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
          <TextInput label="Email" name="email" id="email-input" />
          <TextInput label="First Name" name="firstname" id="email-input" />
          <TextInput label="Last Name" name="lastname" id="email-input" />
          <TextInput label="Message" name="message" id="email-input" />
          <SubmitButton />
        </Form>
      </Formik>
    </Box>
  );
};

const TextInput = ({ id, label, name }) => {
  const [field, meta, helper] = useField(name);

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
      <Input
        id={id}
        type="text"
        sx={{
          fontFamily: 'body.normal',
          fontSize: ['1.5rem'],
          borderRadius: '3px',
          lineHeight: 2,
          mt: ['1rem']
        }}
        {...field}
      />
    </Box>
  );
};

const SubmitButton = () => {
  return (
    <Button
      type="submit"
      sx={{
        p: '1rem 2rem',
        mt: '2rem'
      }}>
      Submit
    </Button>
  );
};

/**
 *  region: 'na1',
 *  portalId: '39610935',
 *  formId: 'd987854c-ee23-42a2-8930-99e642789653'
 */
