import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import React from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
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
            w="200px"
            h="200px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/Riya.jpeg"
              alt="Profile image"
              width="200"
              height="200"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        {' '}
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Paragraph{' '}
          <NextLink href="/works/projects" color="teal.500">
            Here are my Projects
          </NextLink>
        </Paragraph>
        <Box>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="red">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.1}>
        {' '}
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Box display="flex">
          <BioSection>
            {' '}
            <BioYear>1999</BioYear>I was born!
          </BioSection>
        </Box>
      </Section>
    </Container>
  )
}

export default Page
