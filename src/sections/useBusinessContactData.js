import { graphql, useStaticQuery } from 'gatsby';

export const useBusinessContactData = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: businessContactDataJson {
        socialLinks {
          text
          to
        }
        contactLinks {
          text
          to
        }
        address
      }
    }
  `);

  return data;
};
