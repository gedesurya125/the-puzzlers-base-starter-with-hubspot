import { graphql, useStaticQuery } from 'gatsby';

export const useFooterData = () => {
  const data = useStaticQuery(graphql`
    query {
      footerDataJson {
        headline
      }
    }
  `);

  return data.footerDataJson;
};
