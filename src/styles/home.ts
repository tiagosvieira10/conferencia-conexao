import { styled } from ".";

export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  img: {
    height: '100vh',
    width: '100%', 
    opacity: 0.4,
  },

  '@media screen and (max-width: 768px)': {
    img: {
      height: '100vh',
      width: '100%', 
    },
  }
})