import { useStaticQuery, graphql } from 'gatsby';
import { useKisSectionData } from './helper';

export const useKisLandingPageData = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: allKisLandingPagePage {
        nodes {
          entry {
            header {
              headline
            }
          }
        }
      }
    }
  `);

  return useKisSectionData(data);
};
