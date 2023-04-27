import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors } from 'gatsby-plugin-theme-ui/colors';

const defaultExitMenuLineAnimation = {
  transformOrigin: 'right center',
  rotate: '0deg'
};

export const topMenuLineAnimation = {
  initial: {
    transformOrigin: 'right center'
  },
  animate: {
    transformOrigin: 'right center',
    rotate: '-31deg'
  },
  exit: {
    ...defaultExitMenuLineAnimation,
    transition: {
      delay: 0.2
    }
  }
};

export const bottomMenuLineAnimation = {
  initial: {
    transformOrigin: 'right center'
  },
  animate: {
    transformOrigin: 'right center',
    rotate: '31deg'
  },
  exit: {
    ...defaultExitMenuLineAnimation,
    transition: {
      delay: 0.2
    }
  }
};

export const textMenuAnimation = {
  intital: {
    opacity: 1
  },
  animate: {
    opacity: 0
  },
  exit: {
    opacity: 1,
    transition: {
      delay: 0.2
    }
  }
};

export const onScrollNavigationBarAnimation = () => {
  /**
   * The hide on scroll animation and color change animation
   * separate into different animation because it has different scroll point to animated
   * TODO: we can update the color change animation to be use gsap to make it more cleaner
   */

  // Hide scroll animation
  const showAnimation = gsap
    .from('.navigation-bar-wrapper', {
      yPercent: -100,
      paused: true,
      duration: 0.2
    })
    .progress(1);
  ScrollTrigger.create({
    start: '120px top',
    onUpdate: (self) => {
      self.direction === -1 ? showAnimation.play() : showAnimation.reverse();
    }
  });

  // color change animation
  const onScrollAnimation = () => {
    const navigationBar = document.querySelector('.navigation-bar-wrapper');
    const companyLogo = document.querySelector('.company-logo');
    const navigationMenuButton = document.querySelector(
      '.navigation__menu-button'
    );
    const navigationMenuLines = [
      ...document.querySelectorAll('.navigation__menu-line')
    ];

    // The language switch link cannot accept className, it will replace the active className so we need to target the parent
    const langSwitchLinks = [
      ...document.querySelector('.navigation__language-switch').children
    ];

    // Navigation links also cannot accept className
    const navigationLinks = [
      ...document.querySelector('.navigation__nav-links').children
    ];

    // the delay 0.2s is related to time required by hide on scroll animation to finish
    const defaultTransition = 'all 0.5s ease 0.2s';
    navigationBar.style.transition = 'background-color 0.5s ease 0.2s';
    companyLogo.style.transition = defaultTransition;
    navigationMenuButton.style.transition = defaultTransition;
    navigationMenuLines.forEach((line) => {
      line.style.transition = defaultTransition;
    });
    langSwitchLinks.forEach((link) => {
      link.style.transition = defaultTransition;
    });
    navigationLinks.forEach((navlink) => {
      navlink.style.transition = defaultTransition;
    });

    if (
      document.body.scrollTop > 250 ||
      document.documentElement.scrollTop > 250
    ) {
      // Change the elements color when scrolled
      navigationBar.style.backgroundColor = colors.secondary;
      companyLogo.style.color = colors.black;
      navigationMenuButton.style.color = colors.black;
      navigationMenuLines.forEach((line) => {
        line.style.backgroundColor = colors.black;
      });
      langSwitchLinks.forEach((link) => {
        link.style.color = colors.black;
      });
      navigationLinks.forEach((navlink) => {
        navlink.style.color = colors.black;
      });
    } else {
      navigationBar.style.backgroundColor = null;
      companyLogo.style.color = null;
      navigationMenuButton.style.color = null;
      navigationMenuLines.forEach((line) => {
        line.style.backgroundColor = null;
      });
      langSwitchLinks.forEach((link) => {
        link.style.color = null;
      });
      navigationLinks.forEach((navlink) => {
        navlink.style.color = null;
      });
    }
  };
  if (window) {
    window.addEventListener('scroll', onScrollAnimation);
    return () => {
      window.removeEventListener('scroll', onScrollAnimation);
    };
  }
};
