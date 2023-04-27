import React from 'react';

// External Components
import { Box } from '@thepuzzlers/pieces';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Helper Function
export const getAspectRatio = (aspectRatio) =>
  aspectRatio ? `${(1 / aspectRatio) * 100}%` : null;
export const getPaddingPercentageForAspectRatio = (aspectRatios) => {
  if (Array.isArray(aspectRatios))
    return aspectRatios.map((aspectRatio) => getAspectRatio(aspectRatio));
  return getAspectRatio(aspectRatios);
};

export const AspectRatioImageContainer = ({
  designatedRef,
  className,
  src,
  alt,
  sx,
  imageSx,
  imgProps,
  imgStyle,
  aspectRatios, // accepts an array of aspect ratios (must be a number) or a single value for instance 16/9
  children,
  ...props
}) => {
  return (
    <Box
      ref={designatedRef}
      className={`image-container ${className}`}
      sx={{
        position: 'relative',
        // padding can not be set on the parent element, because otherwise the padding would refer to the parents width.
        // https://css-tricks.com/oh-hey-padding-percentage-is-based-on-the-parent-elements-width/
        // pt: getPaddingPercentageForAspectRatio(aspectRatios),
        overflow: 'visible',
        ...sx
      }}
      {...props}>
      <Box
        className="space-maker visibility-hidden-element"
        sx={{
          pt: getPaddingPercentageForAspectRatio(aspectRatios),
          visibility: 'hidden'
        }}
      />
      <GatsbyImage
        className="gatsby-image"
        {...imgProps}
        image={getImage(src)}
        alt={alt ? alt : ''}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          ...imageSx
        }}
        imgStyle={imgStyle}
      />
      {/* Children meant to be use for adding any absolute style decoration */}
      {children}
    </Box>
  );
};
