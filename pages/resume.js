import { Container, Heading, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { Document, Page } from 'react-pdf'
import pdf from '../public/resume.pdf'

const Thoughts = () => (
  <Layout title="Resume">
    <Container>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4} mt={30}>
        📄 Resume
      </Heading>
      <Box pb={4}>
        <iframe
          src="/resume.pdf#toolbar=0&navpanes=0"
          width="100%"
          height="739px"
          loading="lazy"
        />
      </Box>
    </Container>
  </Layout>
)

export default Thoughts
