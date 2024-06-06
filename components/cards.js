import { Box, LinkBox, LinkOverlay, Flex, Text, Code } from '@chakra-ui/react'

export const ResumeCard = ({ title, startDate, endDate, languages }) => (
  <Box borderLeft="1px solid" borderColor="gray" pl="1em" mb="1em">
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'none', md: 'space-between' }}
      alignItems={{ base: 'left', md: 'center' }}
    >
      <Text fontWeight="bold" mr={{ md: '1em' }}>
        {title}
      </Text>
      <Text fontWeight={300} color="gray">
        {startDate} — {endDate}
      </Text>
    </Flex>
    <Flex display={{ md: 'flex' }} py={1} gap={2}>
      {languages.map((element, i) => (
        <Code key={i} mx={{ base: '1', md: '0' }}>
          {element}
        </Code>
      ))}
    </Flex>
  </Box>
)

export const ProjectCard = ({ title, description, tags, link }) => (
  <LinkBox
    as="article"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p={5}
    _hover={{ bg: 'gray.700' }}
  >
    <LinkOverlay href={link} isExternal>
      <Text fontWeight="bold" fontSize="" mb={2}>
        {title}
      </Text>
      <Text mb={4}>{description}</Text>
    </LinkOverlay>
    <Flex display={{ md: 'flex' }} gap={2}>
      {tags.map(tag => (
        <Code key={tag} mx={{ base: '1', md: '0' }}>
          {tag}
        </Code>
      ))}
    </Flex>
  </LinkBox>
)
