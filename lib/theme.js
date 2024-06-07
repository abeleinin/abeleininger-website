import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    body: {
      bg: '#110e0f',
      color: 'white'
    }
  }
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: '20px',
        textDecorationColor: '#525252',
        mt: 3,
        mb: 4
      }
    }
  },
  Link: {
    variants: {
      job: {
        color: '#3d7aed',
        textUnderlineOffset: 3
      }
    },
    baseStyle: {
      color: 'white'
    }
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  brand: {
    100: '#3d7aed',
    200: '#525252',
    300: '#110e0f'
  }
}

const theme = extendTheme({
  styles,
  components,
  fonts,
  colors
})

export default theme
