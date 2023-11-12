import { styled } from ".";

export const PaymentFormContainer = styled('div', {
  display: 'flex',
  margin: '0 auto',

  height: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
  // justifyContent: 'center',

  backgroundColor: '$corSecundaria',

  '.voltar': {
    display: 'flex',
    alignItems: 'center',

    marginTop: '2rem',

    textDecoration: 'none',
    color: '$colorFonte'
  }
})