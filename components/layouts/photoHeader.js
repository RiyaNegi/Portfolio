import Head from 'next/Head'
import Navbar from '../navbar'
import { Box, Container, Heading, Image } from '@chakra-ui/react'

const PhotoHeader = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width:device-width, initial-scale=1" />
        <title> Riya Negi's HomePage</title>
      </Head>
      <Box display={{ base: 'block', md: 'flex' }} w="100%" mt={20}>
        {' '}
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Riya Negi
          </Heading>
          <span>Keen engineer making inutitive websites </span>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="400px"
            h="400px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/Riya.jpeg"
              alt="Profile image"
              width="400"
              height="400"
            />
          </Box>
        </Box>
      </Box>
      <Container maxW="container.md" pt={15}>
        {children}
      </Container>
    </Box>
  )
}

export default PhotoHeader
