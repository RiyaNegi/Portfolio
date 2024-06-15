import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg="aliceblue"
        p={3}
        mb={6}
        mt={12}
        textAlign="center"
      >
        Hello, I'm a frontend developer based in India
      </Box>
      <Box display={{ base: 'block', md: 'flex' }}>
        {' '}
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Riya Negi
          </Heading>
          <span>Keen engineer making inutitive websites </span>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
