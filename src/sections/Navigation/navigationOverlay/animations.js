const transitionDefaults = {
  type: 'tween',
  duration: 0.4,
  ease: 'easeInOut'
};

const slideInitial = {
  opacity: 0,
  y: 40
};

const slideAnimate = {
  opacity: 1,
  y: 0
};

// Transition out of view
const transitionOut = {
  transition: {
    ease: 'easeIn',
    type: 'tween',
    duration: 0.2
  }
};

// Transition into view
const transitionIn = {
  transition: {
    ease: 'easeOut',
    type: 'tween',
    duration: 0.2
  }
};

export const slideBackground = {
  initial: {
    height: 0,
    transition: transitionDefaults
  },
  animate: {
    height: '100%',
    transition: transitionDefaults
  },
  exit: {
    height: 0,
    transition: {
      ...transitionDefaults,
      delay: 0.3
    }
  }
};

export const staggerElements = {
  initial: {
    transition: {
      staggerChildren: 0.1
    }
  },
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1 // reverse the animation
    }
  }
};

export const linksReveal = {
  initial: slideInitial,
  animate: {
    ...slideAnimate,
    ...transitionIn
  },
  exit: {
    ...slideInitial,
    ...transitionOut
  }
};

export const elementReveal = {
  initial: slideInitial,
  animate: (custom) => ({
    ...slideAnimate,
    transition: {
      delay: custom,
      ease: 'easeOut',
      type: 'tween',
      duration: 0.2
    }
  }),
  exit: {
    ...slideInitial,
    ...transitionOut
  }
};
