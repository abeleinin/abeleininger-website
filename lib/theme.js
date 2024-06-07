import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: props => ({
    body: {
      bg: '#110e0f'
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: 20,
        textDecorationColor: '#525252',
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: () => ({
      color: '#3d7aed',
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const theme = extendTheme({
  styles,
  components,
  fonts
})

export default theme
