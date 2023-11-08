import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      corPrincipal: '#000000',
      corSecundaria: '#F8631A',
      corFonte: '#FFFFFF',
    },
  }
})