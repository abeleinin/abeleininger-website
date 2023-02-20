import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Papyrus">
      <Container>
        <Title>
          Papyrus <Badge>2023</Badge>
        </Title>
        <P>
          Papyrus is a Markdown to PDF conversion plugin that allows users to
          convert a markdown file into a Latex styled PDF document. By utilizing
          the Pandoc universal document converter we can write both Markdown and
          Latex syntax in the same file and convert it into a PDF.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/abeleinin/papyrus">
              github.com/abeleinin/papyrus
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Vim Script, Pandoc, Markdown, Latex</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Project
