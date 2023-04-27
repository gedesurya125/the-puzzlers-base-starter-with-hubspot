import React from 'react';

// Hooks
import { useNavigationData } from '../useNavigationData';
import { useBusinessContactData } from 'sections/useBusinessContactData';

export const useNavigationOverlay = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pageLinks, language } = useNavigationData();
  const { contactLinks } = useBusinessContactData();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return [
    // So we dont need to pas the overlay again
    {
      isOpen,
      pageLinks,
      language,
      contactLinks,
      handleClose
    },
    // Navigation Controls
    {
      handleOpen,
      handleClose
    }
  ];
};
