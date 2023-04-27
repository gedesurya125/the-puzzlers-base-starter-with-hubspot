const linkDefault = {
  cursor: 'pointer'
};

const buttonDefault = {
  cursor: 'pointer'
};

const hyperlinkDefault = {
  ...linkDefault
};

const links = {
  hyperlink: {
    // small
    ...hyperlinkDefault
  },
  footer: {
    ...linkDefault
  },
  legal: {
    ...linkDefault
  },
  contact: {
    ...linkDefault
  }
};

const buttons = {
  primary: {
    ...buttonDefault
  },
  clear: {
    ...buttonDefault,
    p: 0,
    bg: 'transparent'
  }
};

const cards = {};

export { links, buttons, cards };
