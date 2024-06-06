import { Box, Link, Heading, Divider, Container } from '@chakra-ui/react'
import Section from '../components/section'

const NotFound = () => {
  return (
    <Container maxWidth={{ base: '80vw', md: '40vw' }} textAlign="center">
      <Section>
        <Heading size="md">page not found</Heading>
        <Box my={6} align="center">
          <Link href="/">home</Link>
        </Box>
        <Divider my={6} />
      </Section>
    </Container>
  )
}

export default NotFound
