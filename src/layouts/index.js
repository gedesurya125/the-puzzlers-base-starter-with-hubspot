import React from 'react';
import PropTypes from 'prop-types';
import { CoreLayout } from 'gatsby-theme-thepuzzlers-core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './fontSize.css';

// Sections
import { Footer, Navigation } from 'sections';

import 'gatsby-plugin-theme-ui/fonts/fontImports';

gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children, pageContext }) => {
  let lastHeight = 0;
  let lastWidth = 0;

  const setDocHeight = () => {
    if (
      Math.abs(lastWidth - window.visualViewport.width) > 100 ||
      Math.abs(lastHeight - window.visualViewport.height) > 100
    ) {
      lastHeight = window.visualViewport.height;
      lastWidth = window.visualViewport.width;

      document.documentElement.style.setProperty(
        '--vh',
        `${window.visualViewport.height / 100}px`
      );
    }
  };

  React.useEffect(() => {
    setDocHeight();
    window.addEventListener('resize', setDocHeight);
    window.addEventListener('orientationchange', setDocHeight);
  }, []);

  return (
    // CoreLayout includes PageContextProvider & Global component
    <CoreLayout pageContext={pageContext}>
      <Navigation />
      {children}
      <Footer />
    </CoreLayout>
  );
};

Layout.propTypes = {
  pageContext: PropTypes.object.isRequired
};

export default Layout;
