import React from 'react';

// External components
import { GridWrapper, Button, Box, FlexWrapper } from '@thepuzzlers/pieces';
import {
  NavigationLink,
  LanguageSwitchLink
} from 'gatsby-theme-thepuzzlers-intl';

// Local Components
import { ThePuzzlersLogo } from 'components';

// Data
import { useNavigationData } from '../useNavigationData';

// Animation
import {
  topMenuLineAnimation,
  bottomMenuLineAnimation,
  textMenuAnimation,
  onScrollNavigationBarAnimation
} from '../animation';

// Helper function
import { usePathMatch } from '../helper';

export const NavigationBar = ({ handleMenuButtonClick, isOnOverlay, sx }) => {
  const { menuBtn, pageLinks, language } = useNavigationData();

  // use hide animation for navigation bar except in it is used in overlay
  React.useEffect(() => {
    !isOnOverlay && onScrollNavigationBarAnimation();
  }, [isOnOverlay]);

  return (
    // Markup
    <ContentWrapper sx={sx}>
      <Logo />
      <Navlinks data={pageLinks} />
      <LanguageSwitch data={language} isOnOverlay={isOnOverlay} />
      <MenuButton
        data={menuBtn}
        onClick={handleMenuButtonClick}
        isOnOverlay={isOnOverlay}
      />
    </ContentWrapper>
  );
};

// Elements

const ContentWrapper = ({ children, sx }) => (
  <GridWrapper
    as="nav"
    className="navigation-bar-wrapper"
    sx={{
      position: 'fixed',
      py: ['1.2rem', '2.8rem', '3rem', '1.8rem', '3rem', '2.5rem'],
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 10,
      ...sx
    }}>
    {children}
  </GridWrapper>
);

const Logo = () => (
  <NavigationLink
    to="/"
    sx={{
      alignSelf: 'center',
      gridColumnStart: 1,
      width: ['18.4rem', '19.7rem', '21.1rem', '18.4rem', '20.2rem', '20.9rem']
    }}>
    <ThePuzzlersLogo
      className="company-logo"
      sx={{ color: 'text', width: '100%' }}
    />
  </NavigationLink>
);

const MenuButton = ({ data, onClick, isOnOverlay }) => (
  <Button
    className="navigation__menu-button"
    variant="clear"
    onClick={onClick}
    sx={{
      alignSelf: 'center',
      color: 'text',
      display: ['block', 'block', 'block', 'block', 'none', 'none'],
      gridColumnEnd: [13, 13, 25, 25, null, null],
      justifySelf: 'end',
      fontFamily: 'body.normal',
      fontSize: ['1.4rem', '1.6rem', '1.8rem', '1.4rem', null, null], // null because it's not visible in last two breakpoints
      letterSpacing: '0.1rem',
      lineHeight: 1,
      textTransform: 'uppercase'
    }}>
    <MenuLine
      // Animation value
      variants={isOnOverlay && topMenuLineAnimation}
    />
    <Box
      as="span"
      sx={{
        display: 'block',
        // need to be same for all breakpoints to make animation correct
        p: '0.8rem 0.7rem'
      }}
      // Animation value
      variants={isOnOverlay && textMenuAnimation}>
      {data}
    </Box>
    <MenuLine
      // Animation value
      variants={isOnOverlay && bottomMenuLineAnimation}
    />
  </Button>
);

const LanguageSwitch = ({ data: { german, english }, isOnOverlay }) => (
  <FlexWrapper
    className="navigation__language-switch"
    sx={{
      alignSelf: 'center',
      display: isOnOverlay
        ? ['none', 'none', 'none', 'flex', null, null]
        : ['none', 'flex', 'flex', 'flex', 'flex', 'flex'],
      gridColumn: [
        null,
        '8/span 3',
        '17/span 4',
        '17/span 4',
        '22/25',
        '23/25'
      ],
      justifySelf: [null, 'center', 'end', 'end', 'end', 'end']
    }}>
    <LangSwitchLink language={german.toLowerCase()} text={german} />
    <LangSwitchLink language={english.toLowerCase()} text={english} />
  </FlexWrapper>
);

const Navlinks = ({ data }) => (
  <FlexWrapper
    className="navigation__nav-links"
    sx={{
      alignSelf: 'center',
      display: ['none', 'none', 'none', 'none', 'flex', 'flex'],
      gap: '3.2rem',
      gridColumn: [null, null, null, null, '9/span 12', '7/span 10'],
      justifySelf: [null, null, null, null, 'end', 'start']
    }}>
    {data.map((link, index) => (
      <NavigationLinkItem key={index} link={link} />
    ))}
  </FlexWrapper>
);

const NavigationLinkItem = ({
  link: { to, text }
  // this options bellow supposed to be used in navigation header which has header section with different background
}) => {
  const { isPathMatch } = usePathMatch(to);

  return (
    <NavigationLink
      key={to}
      to={to}
      sx={{
        position: 'relative',
        bg: isPathMatch ? 'secondary' : 'transparent',
        ':hover a': {
          bg: 'secondary'
        },
        display: 'block',
        fontFamily: 'primary.normal',
        fontSize: [null, null, null, null, '1.5rem', '1.5rem'], // null because it's not visible in first four breakpoints
        lineHeight: 1,
        whiteSpace: 'nowrap'
      }}>
      <Box
        as="span"
        sx={{
          position: 'relative',
          zIndex: 1
        }}>
        {text}
      </Box>
    </NavigationLink>
  );
};

// Reusable Components

const MenuLine = ({ ...props }) => (
  <Box
    className="navigation__menu-line"
    as="span"
    sx={{
      backgroundColor: 'text',
      display: 'block',
      height: '0.3rem',
      width: '100%'
    }}
    {...props}
  />
);

export const LangSwitchLink = ({ text, language, sx, onClick }) => (
  <LanguageSwitchLink
    variant="buttons.clear"
    sx={{
      fontFamily: 'primary.normal',
      fontSize: ['1.6rem', '1.6rem', '1.8rem', '1.4rem', '1.5rem', '1.5rem'],
      lineHeight: 1,
      textTransform: 'uppercase',
      p: [
        '1.4rem 1rem',
        '1.4rem 1rem',
        '1.5rem 1rem',
        '1.1rem 1rem',
        '1.6rem 1.2rem',
        '1.6rem 1.2rem'
      ],
      position: 'relative',
      zIndex: 1,
      '&:hover, &.active ': {
        bg: 'secondary'
      },
      ...sx
    }}
    language={language}
    onClick={onClick}>
    {text}
  </LanguageSwitchLink>
);
