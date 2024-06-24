import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link,
  ListItem,
  List
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import React from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import {
  IoNewspaperOutline,
  IoLogoLinkedin,
  IoLogoGithub
} from 'react-icons/io5'

const Page = () => {
  return (
    <>
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="end"
        w={{ base: '300px', sm: '500px', md: '850px' }}
        mt={20}
      >
        <Box flexGrow={1} position="absolute" top="160px" left="0">
          <Heading as="h1" fontSize={70} variant="page-title">
            Riya Negi
          </Heading>
          <span>Keen engineer making intuitive websites</span>
        </Box>
        <Box
          top={0}
          left={0}
          w={{ base: '90%', md: '500px' }}
          h="500px"
          borderTopLeftRadius="400px"
          borderTopRightRadius="400px"
          overflow="hidden"
        >
          <Image
            src="/images/Riya.jpeg"
            alt="Profile image"
            objectFit="cover"
            width="100%"
            height="500"
          />
        </Box>
        {/* <Box flexGrow={1} position="absolute" top="20px" right="-70px">
          <Image
            src="/images/sticker.png"
            alt="sticker image"
            objectFit="cover"
            width="200"
            height="200"
          />
        </Box> */}
      </Box>
      <Layout>
        <Container maxW="620px">
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
          <Section delay={0.1}>
            {' '}
            <Heading as="h3" variant="section-title">
              Work
            </Heading>
            <Paragraph>
              <NextLink href="/works/projects" color="teal.500">
                I am a dedicated frontend developer with three years of
                experience in crafting intuitive and accessible websites.
                Passionate about creating user-friendly digital experiences, I
                combine creativity with technical expertise to ensure that every
                project not only meets but exceeds user expectations.
                <br />
                Outside of coding, I practice mindful living and find balance
                through yoga and meditation. With a commitment to enhancing the
                online world and a holistic approach to life, I am always
                seeking innovative ways to improve both professionally and
                personally.
              </NextLink>
            </Paragraph>
            <Box mt={4}>
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
          <List>
            <ListItem>
              <Link href="https://github.com/RiyaNegi" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  Riya's Github
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://dev.to/riyanegi" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoNewspaperOutline />}
                >
                  Blogs on Dev.to
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/riya-negi-8879631a9/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  Linkedin
                </Button>
              </Link>
            </ListItem>
          </List>
        </Container>
      </Layout>
    </>
  )
}

export default Page
