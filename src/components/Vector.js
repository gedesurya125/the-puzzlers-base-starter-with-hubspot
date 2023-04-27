import React from 'react';

// External Components
import { FlexWrapper, Image } from '@thepuzzlers/pieces';

export const Vector = ({ vectorRef, src, alt = '', sx, ...props }) => {
  return (
    <FlexWrapper ref={vectorRef} sx={sx} {...props}>
      <Image src={src} alt={alt} sx={{ width: '100%', height: '100%' }} />
    </FlexWrapper>
  );
};
