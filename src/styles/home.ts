import { styled } from ".";

export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  '.conf24': {

  },

  '.theMission': {

  },

  '@media screen and (max-width: 768px)': {


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
})