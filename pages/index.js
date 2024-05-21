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
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { FaXTwitter } from 'react-icons/fa6'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }} py={6}>
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
              maxWidth="120px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            👋🏻 Hi
          </Heading>
          <Paragraph>
            I&apos;m a software engineer who recently graduated from Indiana
            University with a degree in Computer Science. In collaboration with
            Ph.D. candidates at{' '}
            <Link href="https://vail.sice.indiana.edu/">VAIL</Link>, our work
            recently got accepted into{' '}
            <Link href="https://2024.ieee-icra.org/">ICRA 2024</Link>! Feel free
            to check out our paper on{' '}
            <Link href="https://arxiv.org/pdf/2403.19010.pdf">arXiv</Link> and
            the{' '}
            <Link href="https://github.com/abeleinin/gp-navigation/">
              source code{' '}
            </Link>
            on GitHub.
          </Paragraph>
          <Paragraph>
            Over the summer, I&apos;m working to finalize a spatial memory
            research project with{' '}
            <Link href="https://pcl.sitehost.iu.edu/rgoldsto/rob.html">
              Prof. Robert Goldstone
            </Link>{' '}
            and hope to share more about it soon!
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            📄 Resume
          </Heading>
          <BioSection>
            <BioYear>May 2024 - Present</BioYear>
            <br />
            Associate Software Engineer @{' '}
            <Link href="https://www.genesys.com/">Genesys</Link>
          </BioSection>
          <BioSection>
            <BioYear>May 2023 - May 2024</BioYear>
            <br />
            Software Engineer, Intern @{' '}
            <Link href="https://www.genesys.com/">Genesys</Link>
          </BioSection>
          <BioSection>
            <BioYear>October 2023 - May 2024</BioYear>
            <br />
            Simulation Lead @{' '}
            <Link href="https://www.indyautonomouschallenge.com/">
              IU Indy Autonomous Challenge Team
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>January 2022 - May 2024</BioYear>
            <br />
            Research Assistant @{' '}
            <Link href="https://vail.sice.indiana.edu/">VAIL</Link>
          </BioSection>
          <Box align="center" my={4} pb={4}>
            <NextLink href="/resume.pdf" target="_blank">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                Resume PDF
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            📘 Projects
          </Heading>
          <Paragraph>
            I recently{' '}
            <Link href="https://github.com/ml-explore/mlx/commits?author=abeleinin">
              contributed
            </Link>{' '}
            to <Link href="https://www.apple.com/">Apple's</Link> Machine
            Learning framework{' '}
            <Link href="https://github.com/ml-explore/mlx">mlx</Link>. I've also
            been working on an Anki-inspired flashcard management tool for the
            terminal called{' '}
            <Link href="https://github.com/abeleinin/goki/">goki</Link>. Feel
            free to check out some of my other projects!
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                Projects
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
            , Slacklining, Guitar, Piano, and Skiing!
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
              <Link href="https://twitter.com/abeleinin" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<Icon as={FaXTwitter} />}
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
