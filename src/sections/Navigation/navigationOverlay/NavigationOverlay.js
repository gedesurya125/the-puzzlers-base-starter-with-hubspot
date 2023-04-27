import React from 'react';

// External Components
import {
  Overlay,
  Box,
  GridWrapper,
  FlexWrapper,
  Link
} from '@thepuzzlers/pieces';
import { NavigationLink } from 'gatsby-theme-thepuzzlers-intl';

// Local Components
import { GridSpacer } from 'components';

// Self Components
import { NavigationBar, LangSwitchLink } from '../components';

// Animations
import {
  slideBackground,
  staggerElements,
  linksReveal,
  elementReveal
} from './animations';

// helper
import { usePathMatch } from '../helper';

export const NavigationOverlay = ({
  handleClose,
  pageLinks,
  contactLinks,
  language
}) => {
  return (
    <Overlay
      handleClose={handleClose}
      shouldCloseOnBackdropClick
      shouldCloseOnEscapePress
      containerSx={{
        overflow: 'hidden'
      }}>
      <Content
        handleClose={handleClose}
        pageLinks={pageLinks}
        contactLinks={contactLinks}
        language={language}
      />
    </Overlay>
  );
};

const Content = ({ handleClose, pageLinks, contactLinks, language }) => {
  return (
    <Box
      // Animation values
      initial="initial"
      animate="animate"
      exit="exit"
      sx={{ height: '100%', overflowY: 'auto' }}>
      <NavigationBar handleMenuButtonClick={handleClose} isOnOverlay />
      <OverlayBody
        pageLinks={pageLinks}
        contactLinks={contactLinks}
        language={language}
        handleClose={handleClose}
      />
      <Background />
    </Box>
  );
};

const OverlayBody = ({ pageLinks, contactLinks, language, handleClose }) => {
  return (
    <GridWrapper sx={{ position: 'relative', zIndex: 1 }}>
      <LinksWrapper pageLinks={pageLinks} handleClose={handleClose} />
      <LanguageSwitch data={language} handleClose={handleClose} />
      <Contacts contactLinks={contactLinks} />
      <Decoration />
      <BottomSpacer />
    </GridWrapper>
  );
};

const LinksWrapper = ({ pageLinks, handleClose }) => {
  return (
    <FlexWrapper
      // Animation value
      variants={staggerElements}
      sx={{
        gridColumn: ['1/13', '1/13', '1/25', '3 / span 20'],
        mt: ['15.1rem', '22.4rem', '27.2rem', '12.1rem'],
        flexDirection: ['column', 'column', 'column', 'row'],
        flexWrap: [null, null, null, 'wrap'],
        alignItems: 'center',
        justifyContent: 'center',
        gap: ['4rem', '4.8rem', '5.6rem', '4rem']
      }}>
      {pageLinks.map((link, index) => (
        <LinkItem key={index} data={link} handleClose={handleClose} />
      ))}
    </FlexWrapper>
  );
};

const LinkItem = ({ data: { text, to }, handleClose }) => {
  const { isPathMatch, pathname } = usePathMatch(to);

  // set the path ref
  const pathRef = React.useRef(null);

  // This Effect make the overlay closed only when the page is succesfully changed
  React.useEffect(() => {
    // set the initial path
    if (!pathRef.current) {
      pathRef.current = pathname;
    }
    // change path if current path is not same with path provided by roter
    if (pathRef.current !== pathname) {
      pathRef.current = pathname;
      handleClose();
    }
  }, [pathname]);
  return (
    // Extra box for animation purposes
    <Box
      // Animation value
      variants={linksReveal}>
      <NavigationLink
        to={to}
        sx={{
          fontFamily: isPathMatch ? 'primary.italic' : 'primary.normal',
          lineHeight: 1,
          fontSize: ['2.6rem', '2.8rem', '3.4rem', '2.2rem', null, null],
          textTransform: 'uppercase',
          bg: isPathMatch ? 'secondary' : 'transparent'
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
    </Box>
  );
};

const LanguageSwitch = ({ data: { german, english }, handleClose }) => (
  <FlexWrapper
    className="navigation__language-switch"
    // Animation values
    custom={0.6}
    variants={elementReveal}
    sx={{
      alignSelf: 'center',
      gridColumn: ['1/13', '1/13', '1/25', '18/span 3', null, null],
      justifySelf: 'center',
      display: ['flex', 'flex', 'flex', 'none'],
      mt: ['11.8rem', '14.8rem', '22.7rem', 0]
    }}>
    <OverlayLangSwitch language={german} handleClose={handleClose} />
    <OverlayLangSwitch language={english} handleClose={handleClose} />
  </FlexWrapper>
);

const OverlayLangSwitch = ({ language, handleClose }) => {
  return (
    <LangSwitchLink
      onClick={handleClose}
      language={language.toLowerCase()}
      text={language}
      sx={{
        fontSIze: ['1.8rem', '2.2rem', '2.4rem', '1.4rem']
      }}
    />
  );
};

const Contacts = ({ contactLinks }) => {
  return (
    <FlexWrapper
      // Animation values
      custom={0.8}
      variants={elementReveal}
      sx={{
        gridColumn: ['1/13', '1/13', '1/25', '1/25'],
        flexDirection: 'column',
        alignItems: 'center',
        mt: ['6.1rem', '6.9rem', '6.7rem', '4.8rem'],
        gap: ['0.8rem', '0.8rem', '0.8rem', '0.5rem']
      }}>
      {contactLinks.map((link, index) => (
        <ContactLinkItem key={index} data={link} />
      ))}
    </FlexWrapper>
  );
};

const ContactLinkItem = ({ data: { text, to } }) => {
  return (
    <Link
      href={to}
      sx={{
        fontFamily: 'primary.normal',
        lineHeight: 1.5,
        fontSize: ['1.7rem', '2rem', '2.2rem', '1.4rem']
      }}>
      {text}
    </Link>
  );
};

const Decoration = () => {
  return (
    <>{/* Decoration goes here, decoration must be positioned as absolute */}</>
  );
};

const Background = () => (
  <Box
    variants={slideBackground}
    sx={{
      bg: 'background',
      height: '100%',
      overflowY: 'auto',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    }}
  />
);

export const BottomSpacer = () => (
  <GridSpacer height={['4.5rem', '9rem', '6.2rem', '2.5rem']} />
);
