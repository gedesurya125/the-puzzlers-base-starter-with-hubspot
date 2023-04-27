import React from 'react';

import { SEO } from 'gatsby-theme-thepuzzlers-intl';
import { injectIntl } from 'gatsby-theme-thepuzzlers-intl';
import { Helmet } from 'react-helmet';

// External Components
import { Box } from '@thepuzzlers/pieces';

// Local Components
import { useLandingPageData, Header } from 'sections/landingPage';
import { Spacer } from 'components';

// Assets
import thumbnail from 'assets/seo/thumbnail.png';
import { useKisLandingPageData } from 'graphqlHooks';

const Home = () => {
  const { seo } = useLandingPageData();
  const { header } = useKisLandingPageData();

  return (
    <>
      <SEO {...seo} />
      <Helmet>
        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.url} />
        <meta property="og:image" content={thumbnail} />

        {/* Twitter */}
        <meta property="twitter:url" content={seo.url} />
        <meta property="twitter:image" content={thumbnail} />
      </Helmet>
      <Header data={header} />
      <Spacer height={['4rem', '4rem', '4rem', '4rem', '4rem', '4rem']} />
      <Box as="main">{/* other sections go here */}</Box>
    </>
  );
};

export default injectIntl(Home);
