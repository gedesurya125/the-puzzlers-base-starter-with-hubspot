import React from 'react';

// External Components
import { GridItem, Box } from '@thepuzzlers/pieces';

// Grid Spacer - Usage: Inside sections/GridWrappers
export const GridSpacer = ({ bg, height, sx }) => {
  return <GridItem className="grid-spacer" sx={{ bg, height, ...sx }} />;
};

// Regular Spacer - Usage: In between sections
export const Spacer = ({ bg, height, sx }) => {
  return <Box className="spacer" sx={{ bg, height, ...sx }} />;
};
