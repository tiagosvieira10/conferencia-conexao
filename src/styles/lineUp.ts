import { styled } from ".";

export const LineUpContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '5rem',

  '.voltar':{
    display: 'flex',
    alignItems: 'center',
    gap: '0.2rem',

    marginBottom: '2rem',

    textDecoration: 'none',
    color: '$corSecundaria',

    fontSize: '1.5rem'
  }
})

export const PreletoresContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '50%',

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
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    textAlign: 'center',
    fontSize: '2rem'
  },

  borderBottom: '1.5rem solid $corPrincipal',

})