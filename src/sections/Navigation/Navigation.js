import React from 'react';

import { AnimatePresence } from 'framer-motion';

// Local Components
import { useNavigationOverlay, NavigationOverlay } from './navigationOverlay';
import { NavigationBar } from './components';

// Data

export const Navigation = () => {
  const [navigationOverlayProps, navigationOverlayControls] =
    useNavigationOverlay();

  return (
    // Markup
    <>
      <NavigationBar
        handleMenuButtonClick={navigationOverlayControls.handleOpen}
      />
      <AnimatePresence>
        {navigationOverlayProps.isOpen && (
          <NavigationOverlay {...navigationOverlayProps} />
        )}
      </AnimatePresence>
    </>
  );
};
