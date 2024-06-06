import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer.js'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Abe's homepage" />
        <meta name="author" content="Abe Leininger" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <title>Abe Leininger - Homepage</title>
      </Head>

      <Container minH="100%" maxW="container.lg.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
