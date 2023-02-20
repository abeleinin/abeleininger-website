import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  UnorderedList
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Meta } from '../components/projects'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear, JobTitle } from '../components/bio'

const Thoughts = () => (
  <Layout title="Resume">
    <Container>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4} mt={30}>
        🎓 Education
      </Heading>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('#FCF5E5', '#545454')}
        p={3}
        mt={30}
        mb={6}
      >
        <BioSection>
          <Heading as="h2" size="md">
            Indiana University Bloomington
          </Heading>
        </BioSection>
        <UnorderedList>
          <ListItem>
            <b>Graduation:</b> May 2024
          </ListItem>
          <ListItem>
            <b>Cumulative GPA:</b> 3.8/4.0
          </ListItem>
          <ListItem>
            <b>Major:</b> Computer Science
          </ListItem>
          <ListItem>
            <b>Minor:</b> Statistics
          </ListItem>
        </UnorderedList>
      </Box>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4} mt={30}>
        📝 Work Experience
      </Heading>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('#FCF5E5', '#545454')}
        p={3}
        mt={30}
        mb={6}
      >
        <BioSection>
          <Heading as="h2" size="md">
            Vehicle Autonomy and Intelligence Lab (VAIL)
          </Heading>
          <Heading as="h3" size="sm" py="2">
            Research Assistant &#x2022; January 2023 - Present
          </Heading>
        </BioSection>
        <UnorderedList>
          <ListItem>
            Implemented algorithms for planning used by autonomous robots using
            ROS, Python, and C++.
          </ListItem>
          <ListItem>
            Utilized the Gazebo simulator to test algorithms and controllers on
            Jackal and Turtlebot3 robots.
          </ListItem>
          <ListItem>
            Coordinated and met weekly with a Ph.D. mentor to learn and build
            projects in the robotics field.
          </ListItem>
        </UnorderedList>
      </Box>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('#FCF5E5', '#545454')}
        p={3}
        mt={30}
        mb={6}
      >
        <BioSection>
          <Heading as="h2" size="md">
            Indiana University
          </Heading>
          <Heading as="h3" size="sm" py="2">
            UI for Intro to CS &#x2022; August 2022 - December 2022
          </Heading>
        </BioSection>
        <UnorderedList>
          <ListItem>
            Led weekly lab sections of 30 students and taught foundational
            computer science concepts in the Racket programming language, like
            recursion, functional programming, and abstraction.
          </ListItem>
          <ListItem>
            Hosted one-on-one office hours to assist student in learning
            concepts in computer science.
          </ListItem>
        </UnorderedList>
      </Box>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('#FCF5E5', '#545454')}
        p={3}
        mt={30}
        mb={6}
      >
        <BioSection>
          <Heading as="h2" size="md">
            French Lick Resort
          </Heading>
          <Heading as="h3" size="sm" py="2">
            Digital Marketing Intern &#x2022; May 2021 - August 2022
          </Heading>
        </BioSection>
        <UnorderedList>
          <ListItem>
            Organized the creation and deployment of monthly promotional
            Eblasts/newsletters using HTML and CSS in collaboration with graphic
            designers and members of the marketing team.
          </ListItem>
          <ListItem>
            Managed routine updates to the activities and events pages on
            frenchlick.com using HTML and CSS in coordination with the hotel and
            golf course event managers.
          </ListItem>
        </UnorderedList>
      </Box>
      <Box align="center" my={4} pb={4}>
        <NextLink href="/resume.pdf" target="_blank">
          <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
            View PDF Resume
          </Button>
        </NextLink>
      </Box>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4} mt={30}>
        📘 Projects
      </Heading>
      <Paragraph>Check out my projects tab!</Paragraph>
      <Box align="center" my={4} pb={4}>
        <NextLink href="/projects" target="_blank">
          <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
            My projects
          </Button>
        </NextLink>
      </Box>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4} mt={30}>
        ⌨️ Technical Skills
      </Heading>
      <List ml={4} my={4} pb={4}>
        <ListItem>
          <Meta>Languages</Meta>
          <span>Python, JavaScript, C/C++, Java, Racket, R.</span>
        </ListItem>
        <ListItem>
          <Meta>Software</Meta>
          <span>Git, ROS, Linux, Vim, IntelliJ, VSCode.</span>
        </ListItem>
        <ListItem>
          <Meta>Activities/ Interests</Meta>
          <span>Chess Club, Guitar, Piano, Skiing.</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Thoughts
