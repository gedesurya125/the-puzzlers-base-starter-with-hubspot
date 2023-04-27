import React from 'react';

// External Components
import { Section, Heading } from '@thepuzzlers/pieces';

export const Header = ({ data: { headline } }) => {
  return (
    // Markup
    <ContentWrapper>
      <Headline data={headline} />
    </ContentWrapper>
  );
};

// Elements

const ContentWrapper = ({ children }) => (
  <Section
    id="landing-page__header"
    as="header"
    sx={{
      mt: '10rem',
      height: '200vh' // simulate scroll
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
