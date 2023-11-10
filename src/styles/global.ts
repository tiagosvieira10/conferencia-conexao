import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  '.conf24': {
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'center',
    alignItems: 'center',
  },

  body: {
    backgroundColor: '$corPrincipal',
    color: '$corFonte',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Space Grotesk',
  },
})