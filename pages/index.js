import NextLink from 'next/link'
import {
  Link,
  Container,
  Button,
  Box,
  Heading,
  Image,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear, JobTitle } from '../components/bio'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('#FCF5E5', '#545454')}
          p={3}
          mt={30}
          mb={6}
          align="center"
        >
          Hello! I&apos;m a junior studying Computer Science at Indiana
          University Bloomington!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Abe Leininger
            </Heading>
            <p>Aspiring Software Engineer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile.jpeg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            👋🏻 About
          </Heading>
          <Paragraph>
            Hello! My name is Abe Leininger, and I&apos;m from French Lick,
            Indiana. Currently, I&apos;m taking Programming Languages, Intro to
            AI, Linear Algebra, and Data Modeling and Inference. Some of my
            technical interests include autonomous vehicles, robotics, and
            embedded systems!
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            📄 Resume
          </Heading>
          <BioSection>
            <BioYear>August 2022 - Present</BioYear>
            <br />
            UI for Introduction to Computer Science (CSCI-C211)
          </BioSection>
          <BioSection>
            <BioYear>May 2022 - Present</BioYear>
            <br />
            Joined the Vehicle Autonomy and Intelligence (VAIL) lab.
          </BioSection>
          <Box align="center" my={4}>
            <NextLink href="/resume">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                My Resume
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            📘 Projects
          </Heading>
          <Paragraph>
            I&apos;m currently working on building a clone of the website human
            benchmark. Check out some of my other personal projects!
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                My Projects
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            ♟ Hobbies
          </Heading>
          <Paragraph>
            {' '}
            <Link href="https://www.chess.com/stats/overview/the-art-of-learning">
              Chess
            </Link>
            , Guitar, Piano, Skiing.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            📌 Socials
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/abeleinin" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @abeleinin
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://linkedin.com/in/abeleinin" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @abeleinin
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
