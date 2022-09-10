import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import thumbnailPRM from '../public/images/thumbnailPRM.png'
import Layout from '../components/layouts/article'

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" variant="section-title" fontSize={20} mt={30} mb={4}>
          📘 Projects
        </Heading>
        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem
              id="prm"
              title="PRM Algorithm"
              thumbnail={thumbnailPRM}
            >
              Implementing PRM Algorithm
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
