import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width:device-width, initial-scale=1" />
        <meta name="description" content="Riya's homepage" />
        <meta name="author" content="Riya Negi" />
        <title> Riya Negi's HomePage</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Maven+Pro:wght@400..900&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Riya Negi" />
        <meta name="og:title" content="Riya Negi" />
        <meta property="og:type" content="website" />
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
