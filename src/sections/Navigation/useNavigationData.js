import { graphql, useStaticQuery } from 'gatsby';
import { usePageContext } from 'gatsby-theme-thepuzzlers-core';

export const useNavigationData = () => {
  const { locale } = usePageContext();

  const data = useStaticQuery(graphql`
    query {
      en: navigationDataJson {
        menuBtn
        pageLinks {
          text
          to
        }
        language {
          german
          english
        }
      }
      de: deNavigationDataJson {
        menuBtn
        pageLinks {
          text
          to
        }
        language {
          german
          english
        }
      }
    }
  `);

  return data[locale];
};
