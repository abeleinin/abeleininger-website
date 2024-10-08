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
  IconButton,
  Text,
  Flex,
  Divider,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ResumeCard, ProjectCard } from '../components/cards'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { FaXTwitter } from 'react-icons/fa6'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box p={6} borderWidth={1} borderRadius={10} borderColor="whiteAlpha.300">
          <Flex
            direction={{ base: 'column', md: 'row-reverse' }}
            alignItems={{ base: 'center', md: 'none' }}
          >
            <Box
              flexShrink={0}
              mb={{ base: 4, md: 0 }}
              mr={{ md: 6 }}
              align="center"
            >
              <Image
                borderColor="whiteAlpha.300"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="100px"
                display="inline-block"
                borderRadius="full"
                src="/images/pfp.jpeg"
                alt="Profile Image"
              />
            </Box>
            <Box flexGrow={1} textAlign={{ base: 'center', md: 'left' }}>
              <Heading as="h2" variant="page-title">
                Abe Leininger
              </Heading>
              <Text py={5}>interested in ml, cog sci, and robotics</Text>
              <Flex
                justifyContent={{ base: 'center', md: 'flex-start' }}
                gap={2}
              >
                <Link href="https://github.com/abeleinin" target="_blank">
                  <IconButton
                    color="white"
                    _hover={{ bgColor: 'whiteAlpha.300' }}
                    fontSize={20}
                    variant="ghost"
                    icon={<Icon as={IoLogoGithub} />}
                  />
                </Link>
                <Link href="https://twitter.com/abeleinin" target="_blank">
                  <IconButton
                    color="white"
                    _hover={{ bgColor: 'whiteAlpha.300' }}
                    fontSize={20}
                    variant="ghost"
                    icon={<Icon as={FaXTwitter} />}
                  />
                </Link>
                <Link href="https://linkedin.com/in/abeleinin" target="_blank">
                  <IconButton
                    color="white"
                    _hover={{ bgColor: 'whiteAlpha.300' }}
                    fontSize={20}
                    variant="ghost"
                    icon={<Icon as={IoLogoLinkedin} />}
                  />
                </Link>
                <Link href="/resume.pdf">
                  <Button
                    color="white"
                    _hover={{ bgColor: 'whiteAlpha.300' }}
                    variant="ghost"
                    textDecoration="underline"
                  >
                    resume
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            # resume
            <Divider py={2} />
          </Heading>
          <ResumeCard
            title={
              <span>
                Software Engineer @{' '}
                <Link variant="job" href="https://www.genesys.com/">
                  Genesys
                </Link>
              </span>
            }
            startDate={'05/24'}
            endDate={'current'}
            languages={['c++', 'javascript']}
          />
          <ResumeCard
            title={
              <span>
                Software Engineer, Intern @{' '}
                <Link variant="job" href="https://www.genesys.com/">
                  Genesys
                </Link>
              </span>
            }
            startDate={'05/23'}
            endDate={'05/24'}
            languages={['c++', 'javascript']}
          />
          <ResumeCard
            title={
              <span>
                Simulation Lead @{' '}
                <Link
                  variant="job"
                  href="https://www.indyautonomouschallenge.com/"
                >
                  IU Autonomous Racing Team
                </Link>
              </span>
            }
            startDate={'10/23'}
            endDate={'05/24'}
            languages={['c++', 'python', 'ros2', 'unreal engine']}
          />
          <ResumeCard
            title={
              <span>
                Research Assistant @{' '}
                <Link variant="job" href="https://vail.sice.indiana.edu/">
                  VAIL
                </Link>
              </span>
            }
            startDate={'01/22'}
            endDate={'05/24'}
            languages={['c++', 'python', 'ros', 'motion planning']}
          />
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            # projects
            <Divider py={2} />
          </Heading>
          <SimpleGrid columns={[1, null, 1]} spacing="10px">
            <ProjectCard
              title={'Metal-Puzzles'}
              description={'Port of srush/GPU-Puzzles from CUDA to Metal'}
              tags={['python', 'machine learning', 'gpu programming']}
              link="https://github.com/abeleinin/Metal-Puzzles"
            />
            <ProjectCard
              title={'goki'}
              description={
                'an intelligent Anki-inspired flashcard management tool for the terminal!'
              }
              tags={['go', 'charm.sh', 'charmbracelet/bubbletea']}
              link="https://github.com/abeleinin/goki"
            />
            <ProjectCard
              title={'ICRA 2024 code'}
              description={
                'Gaussian Process-based Traversability Analysis for Terrain Mapless Navigation'
              }
              tags={['python', 'robotics', 'uneven terrain nav', 'gaussian process']}
              link="https://github.com/abeleinin/gp-navigation"
            />
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            # socials
            <Divider py={2} />
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/abeleinin" target="_blank">
                <Button
                  color="white"
                  _hover={{ bgColor: 'whiteAlpha.300' }}
                  variant="ghost"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @abeleinin
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/abeleinin" target="_blank">
                <Button
                  color="white"
                  _hover={{ bgColor: 'whiteAlpha.300' }}
                  variant="ghost"
                  leftIcon={<Icon as={FaXTwitter} />}
                >
                  @abeleinin
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://linkedin.com/in/abeleinin" target="_blank">
                <Button
                  color="white"
                  _hover={{ bgColor: 'whiteAlpha.300' }}
                  variant="ghost"
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
