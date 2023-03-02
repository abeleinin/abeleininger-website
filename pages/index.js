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
            I&apos;m currently taking Algorithms Design and Analysis,
            Exploratory Data Analysis, and Computer Structures. I&apos;m
            interested in robotics, AI, and embedded systems!
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            📄 Resume
          </Heading>
          <BioSection>
            <BioYear>Summer 2023</BioYear>
            <br />
            Incoming Software Engineer Intern @{' '}
            <Link href="https://www.genesys.com/">Genesys</Link>
          </BioSection>
          <BioSection>
            <BioYear>January 2022 - Present</BioYear>
            <br />
            Research Assistant @{' '}
            <Link href="https://vail.sice.indiana.edu/">VAIL</Link>
          </BioSection>
          <BioSection>
            <BioYear>August 2022 - December 2022</BioYear>
            <br />
            Undergraduate Instructor for Intro. to Computer Science (CSCI-C211)
          </BioSection>
          <BioSection>
            <BioYear>May 2022</BioYear>
            <br />
            Joined <Link href="https://vail.sice.indiana.edu/">VAIL</Link> lab
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
            I&apos;m currently building a vim plugin that converts markdown
            notes into other document formats called{' '}
            <Link href="https://github.com/abeleinin/papyrus">Papyrus</Link>.
            Check out some of my other projects!
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
