import { useRevertPathToDefaultLocale } from 'gatsby-theme-thepuzzlers-intl';
import { removeSlash } from './removeSlash';
import { useLocation } from '@reach/router';

export const usePathMatch = (targetLink) => {
  const { pathname } = useLocation();
  const pageName = removeSlash(useRevertPathToDefaultLocale(pathname));
  const targetPageName = removeSlash(targetLink);

  return {
    isPathMatch: pageName === targetPageName,
    pathname,
    pageName
  };
};
