import { useStaticQuery, graphql } from 'gatsby';

export const useHubSpotForms = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: allHubspotForm {
        nodes {
          id
          portalId
          name
          submitText
          redirect
          formFieldGroups {
            fields {
              label
              name
              required
              fieldType
            }
          }
        }
      }
    }
  `);
  return data;
};
