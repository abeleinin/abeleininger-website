import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Button,
  Badge,
  Link,
  List,
  ListItem
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
      <BioSection>
        <BioYear>Indiana University Bloomington</BioYear>
        <br />
        Graduation: May 2024
        <br />
        Cumulative GPA: 3.9/4.0
        <br />
        Major: Computer Science
        <br />
        Minor: Mathematics and Statistics
      </BioSection>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4} mt={30}>
        📝 Work Experience
      </Heading>
      <BioSection>
        <BioYear>Vehicle Autonomy and Intelligence Lab (VAIL)</BioYear>
        <JobTitle>Undergraduate Research</JobTitle>
        <br />
        <JobTitle>May 2022 - Present</JobTitle>
        <br />
        &emsp;Implemented algorithms for planning and controlling autonomous
        robots using ROS in the Gazebo simulator. <br />
        &emsp;Weekly collaborative meetings with PhD mentor to continue to
        develop skills in the field of robotics.
      </BioSection>
      <BioSection>
        <BioYear>Indiana University</BioYear>
        <JobTitle>
          Undergraduate Instructor for Intro to CS (CSCI-C211)
        </JobTitle>
        <br />
        <JobTitle>August 2022 - Present</JobTitle>
        <br />
        &emsp;Led weekly lab sections of 30 students and taught foundational
        computer science concepts in the Racket programming language like
        recursion, binary search, and sorting. <br />
        &emsp;Hosted one-on-one office hours to assist student in learning
        concepts in computer science.
      </BioSection>
      <BioSection>
        <BioYear>French Lick Resort</BioYear>
        <JobTitle>Digital Marketing Intern</JobTitle>
        <br />
        <JobTitle>May 2021 - August 2021</JobTitle>
        <br />
        &emsp;Organized the creation and deployment of monthly promotional
        Eblasts/newsletters using HTML and CSS in collaboration with graphic
        designers and members of the marketing team. <br /> &emsp;Managed
        routine updates to the activities and events pages on frenchlick.com
        using HTML and CSS in coordination with the hotel and golf course event
        managers.
      </BioSection>
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
          <span>Python, JavaScript, C/C++, Java, Racket, R</span>
        </ListItem>
        <ListItem>
          <Meta>Software</Meta>
          <span>Git, ROS, Linux, Vim, IntelliJ, VSCode</span>
        </ListItem>
        <ListItem>
          <Meta>Activities/ Interests</Meta>
          <span>Chess Club, Guitar, Piano, Skiing</span>
        </ListItem>
      </List>
      <Box align="center" my={4} pb={4}>
        <NextLink href="/resume.pdf" target="_blank">
          <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
            View PDF Resume
          </Button>
        </NextLink>
      </Box>
    </Container>
  </Layout>
)

export default Thoughts
