import React from 'react';

// External components
import { GridWrapper } from '@thepuzzlers/pieces';

// Data
import { useFooterData } from './useFooterData';

export const Footer = () => {
  const {} = useFooterData();

  return (
    // Markup
    <ContentWrapper>Footer</ContentWrapper>
  );
};

// Elements

const ContentWrapper = ({ children }) => (
  <GridWrapper as="footer">{children}</GridWrapper>
);
