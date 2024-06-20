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
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
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
              Here are my Projects Contrary to popular belief, Lorem Ipsum is
              not simply random text. It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
              from a line in section 1.10.32. The standard chunk of Lorem Ipsum
              used since the 1500s is reproduced below for those interested.
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
              by Cicero are also reproduced in their exact original form,
              accompanied by English versions from the 1914 translation by H.
              Rackham.
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
    </Layout>
  )
}

export default Page
