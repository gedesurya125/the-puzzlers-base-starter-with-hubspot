import React from 'react';

// External Components
import { Box } from '@thepuzzlers/pieces';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const ImageContainer = ({
  designatedRef,
  className,
  src,
  alt,
  sx,
  imageSx,
  imgProps,
  imgStyle,
  ...props
}) => (
  <Box
    ref={designatedRef}
    className={`image-container ${className}`}
    sx={{
      borderRadius: 'card',
      overflow: 'hidden',
      position: 'relative',
      ...sx
    }}
    {...props}>
    <GatsbyImage
      className="gatsby-image"
      {...imgProps}
      image={getImage(src)}
      alt={alt}
      style={{ height: '100%', width: '100%', ...imageSx }}
      imgStyle={imgStyle}
    />
  </Box>
);
