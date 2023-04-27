import { usePageContext } from 'gatsby-theme-thepuzzlers-core';

export const useKisSectionData = (data, defaultLocale = 'en') => {
  const { locale } = usePageContext();
  const sectionData = data.nodes[0];
  if (locale === defaultLocale) return sectionData.entry;
  return sectionData.translations[locale];
};
