import { styled } from ".";

export const LineUpContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',

  '.voltar':{
    display: 'flex',
    alignItems: 'center',
    gap: '0.2rem',

    marginBottom: '2rem',

    textDecoration: 'none',
    color: '$corSecundaria',

    fontSize: '1.5rem'
  }, 

  '@media screen and (max-width: 768px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem'
  }
})

export const PreletoresContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '100vh',

  '@media screen and (max-width: 768px)': {
    margin: '1rem'
  }
})

export const Preletor = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$corSecundaria',
  color: '$corFonte',
  padding: '1rem',

  h2: {
    fontSize: '2rem'
  },

  img: {
    layout: "responsive"
  },

  borderBottom: '1.5rem solid $corPrincipal',

  '@media screen and (max-width: 768px)': {
    maxWidth: '100vh',
    img: {
      height: '20rem',
      width: '20rem',
    }
  }
})