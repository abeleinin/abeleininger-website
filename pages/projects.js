import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import thumbnailPRM from '../public/images/thumbnailPRM.png'
import thumbnailPapyrus from '../public/images/thumbnailPapyrus.png'
import thumbnailHB from '../public/images/thumbnailHB.png'
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
              id="papyrus"
              title="Papyrus Vim Plugin"
              thumbnail={thumbnailPapyrus}
            >
              Pandoc integration for automatic file conversion in Vim
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="humanbenchmark"
              title="Human Benchmark Clone"
              thumbnail={thumbnailHB}
            >
              Project inspired by the brain game website Human Benchmark
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="prm"
              title="PRM Algorithm"
              thumbnail={thumbnailPRM}
            >
              Implementation of the PRM Algorithm
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
