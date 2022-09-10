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
          PRM <Badge>2022</Badge>
        </Title>
        <P>
          Implemented the probabilistic roadmapping algorithm in ROS, Python,
          C++.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/abeleinin/probabilistic-roadmap-planning">
              Github.com/abeleinin/prm <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ROS, Python, C++, Turtlebot3, Gazebo, Rviz, Linux</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Project
