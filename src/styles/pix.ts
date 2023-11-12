import { styled } from ".";

export const PixContainer = styled('div', {
  display: 'flex',
  margin: '0 auto',

  height: '100vh',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '2.5rem',
  // justifyContent: 'center',

  backgroundColor: '$corFonte',

  h3: {
    textAlign: 'center',
    color: '$corSecundaria'
  },

  p: {
    color: 'Black'
  }
})