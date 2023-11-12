import { styled } from ".";

export const PaymentFormContainer = styled('div', {
  display: 'flex',
  margin: '0 auto',

  height: '100vh',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '2.5rem',
  // justifyContent: 'center',

  backgroundColor: '$corSecundaria',

  '.voltar': {
    display: 'flex',
    alignItems: 'center',

    marginTop: '2rem',

    textDecoration: 'none',
    color: '$colorFonte'
  },

  '.methodPayments': {

  },

  button: {
    border: 'none',
    borderRadius: '100px', 

    cursor: 'pointer',
    textTransform: 'uppercase',

    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'transform 0.2s ease-in-out'
    },
  } 
})