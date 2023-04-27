// No nesting! - colors declarations can only be one level deep
// No variables - you can't reference the colors by var name (e.g. 'primary') within this file

const base = {
  primary: '#0B2632', // dark blue
  secondary: '#FF9E1F', // yellow
  background: '#CFCCC5'
};

const textColors = {
  text: base.primary,
  heading: base.primary,
  background: base.background
};

export const colors = {
  // defaults
  ...base,
  ...textColors
};
