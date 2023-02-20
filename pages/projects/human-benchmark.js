import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="PRM">
      <Container>
        <Title>
          Human Benchmark <Badge>2023</Badge>
        </Title>
        <P>
          Clone of the website{' '}
          <Link href="https://humanbenchmark.com/">Human Benchmark</Link>.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/abeleinin/humanbenchmark">
              github.com/abeleinin/humanbenchmark
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Typescript/JavaScript, Chakra UI</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Project
