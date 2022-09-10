import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Abe Leininger. All Rights Reserved.{' '}
      <br />
      Design inspiration&nbsp;
      <Link href="https://www.craftz.dog/" target="_blank">
        Takuya Matsuyama.
      </Link>
    </Box>
  )
}

export default Footer
