import React from 'react';
import { GridItem, Section, Heading, Paragraph } from '@thepuzzlers/pieces';

import { SEO } from 'gatsby-theme-thepuzzlers-core';
import { injectIntl } from 'gatsby-theme-thepuzzlers-intl';

const NotFoundPage = ({ intl }) => (
  <>
    <SEO title="404: Not found" />
    <Section>
      <GridItem
        sx={{
          display: 'flex',
          height: ['200vw', '50vw', '120vw'],
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center'
        }}>
        <Heading as="h1" type="h3">
          {intl.formatMessage({
            id: 'notfound.header',
            defaultMessage: 'Not found.'
          })}
        </Heading>
        <Paragraph sx={{ mt: '15px' }}>
          {intl.formatMessage({
            id: 'notfound.description',
            defaultMessage: 'You just hit a route that doesn&#39;t exist.'
          })}
        </Paragraph>
      </GridItem>
    </Section>
  </>
);

export default injectIntl(NotFoundPage);
