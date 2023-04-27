import { graphql, useStaticQuery } from 'gatsby';

export const useLandingPageData = () => {
  const data = useStaticQuery(graphql`
    query {
      landingPageDataJson {
        seo {
          title
          description
          shortTitle
          shortDescription
          url
        }
      }
    }
  `);

  return data.landingPageDataJson;
};
