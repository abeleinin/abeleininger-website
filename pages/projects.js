import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import thumbnailPRM from '../public/images/thumbnailPRM.png'
import thumbnailPapyrus from '../public/images/thumbnailPapyrus.png'
import thumbnailHB from '../public/images/thumbnailHB.png'
import thumbnailGoki from '../public/images/thumbnailGoki.png'
import thumbnailICRA from '../public/images/thumbnailICRA.png'
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
            <ProjectGridItem id="goki" title="Goki" thumbnail={thumbnailGoki}>
              An intelligent flashcard management tool for the terminal!
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="gp-navigation"
              title="ICRA 2024 GitHub"
              thumbnail={thumbnailICRA}
            >
              Gaussian Process-based Traversability Analysis for Terrain Mapless
              Navigation
            </ProjectGridItem>
          </Section>
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
