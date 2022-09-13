import { Container, Heading, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Thoughts = () => (
  <Layout title="Resume">
    <Container height="100vh">
      <Heading as="h3" variant="section-title" fontSize={20} mb={4} mt={30}>
        📄 Resume
      </Heading>
      <Box height="100vh" pb={4}>
        <iframe
          src="/resume.pdf#toolbar=0&navpanes=0"
          width="100%"
          height="85%"
          loading="lazy"
        />
      </Box>
    </Container>
  </Layout>
)

export default Thoughts
