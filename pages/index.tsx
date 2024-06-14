import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="aliceblue" p={3} mb={6} align="center">
        Hello, I'm a frontend developer based in India
      </Box>
      <Box md="flex">
        {' '}
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Riya Negi
          </Heading>
          <p>Keen engineer making inutitive websites </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
