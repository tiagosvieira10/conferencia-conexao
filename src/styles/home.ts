import { styled } from ".";

export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  marginTop: '5rem',
  flexDirection: 'column',

  '.conf24': {

  },

  '.theMission': {
    marginTop: '-2rem'
  },

  '@media screen and (max-width: 768px)': {

    marginTop: '3rem',
  
    '.conf24': {
      height: 150,
      width: 150, 
    },
  
    '.theMission': {
      height: 250,
      width: 250, 
    },
  }
})

export const HomeMenu = styled('div', {
  display: 'flex',
  gap: '2rem',
  
  button: {
    height: '5rem',
    width: '15rem',
    padding: '0.5rem',

    border: 'none',
    borderRadius: '50px', 

    backgroundColor: '$corSecundaria',
    color: '$corFonte',
    fontSize: '1rem',
    fontWeight: 'normal',

    cursor: 'pointer',
    textTransform: 'uppercase',

    '&:hover': {
      transform: 'scale(1.02)',
    },

    strong: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      gap: '0.2rem'
    }

    
  },


  '@media screen and (max-width: 768px)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column', 
    
  }

})