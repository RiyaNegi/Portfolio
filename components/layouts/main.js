import Head from 'next/Head'
import Navbar from '../navbar'
import { Box, Container, Heading, Image } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width:device-width, initial-scale=1" />
        <title> Riya Negi's HomePage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container
        maxW="container.md"
        pt={15}
        css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {children}
      </Container>
    </Box>
  )
}

export default Main
