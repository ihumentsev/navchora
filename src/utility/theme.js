export const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',

    green: '#24CCA7',
    pink: '#FF6596',
    blue: '#4A56E2',
    gray: '#BDBDBD',
    grayIcon: '#E0E0E0',
    error: '#ff0000',

    button: {
      edit: '#FFC727',
      delete: '#4A56E2',
      plus: '#24CCA7',
      active: '#24CCA7',
    },

    background: {
      white: '#ffffff',
      blurSelect: 'rgba(255, 255, 255, 0.7)',
      blurTablet: '#E7EAF2',
      currency: '#4A56E2',
    },
  },
  space: [0, 10, 20, 30, 40, 50, 110],
  fonts: {
    main: 'sans-serif, sans-serif',
    secondary: 'Montserrat Alternates, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    s: '16px',
    m: '18px',
    l: '24px',
    xl: '30px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    main: 1.5,
  },
  borders: {
    none: 'none',
    normal: '1px solid #4A56E2',
    green: '1px solid #24CCA7',
  },
  radii: {
    none: '0',
    sm: '10px',
    md: '20px',
    lg: '30px',
    round: '50%',
  },
  breakpoints: {
    mob: '',
    tab: '@media screen and (min-width: 768px)',
    desc: '@media screen and (min-width: 1280px)',
  },
};
