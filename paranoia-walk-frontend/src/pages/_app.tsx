import { ThemeProvider, CSSReset, ColorModeProvider, DarkMode } from '@chakra-ui/core'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <DarkMode>
          <Component {...pageProps} />
        </DarkMode>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default MyApp
