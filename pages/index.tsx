import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link,
  ListItem,
  List,
  Text
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
      <Layout>
        <Box
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="end"
          sx={{
            '@media screen and (max-width: 999px)': {
              flexDirection: 'column',
              marginTop: '120px',
              marginBottom: '120px'
            },
            '@media screen and (min-width: 1000px)': {
              flexDirection: 'row',
              width: '1020px',
              marginTop: '150px',
              marginBottom: '200px'
            }
          }}
        >
          <Box
            borderRadius="400px"
            overflow="hidden"
            sx={{
              '@media screen and (max-width: 999px)': {
                width: '400px',
                height: '400px'
              },
              '@media screen and (max-width: 530px)': {
                width: '300px',
                height: '300px'
              },
              '@media screen and (min-width: 1000px)': {
                width: '500px',
                height: '500px'
              }
            }}
          >
            <Image
              src="/images/Riya.jpeg"
              alt="Profile image"
              objectFit="cover"
              sx={{
                '@media screen and (min-width: 1000px)': {
                  width: '100%',
                  height: '100%'
                }
              }}
            />
          </Box>
          <Box
            flexGrow={1}
            textAlign={['center', 'left']}
            sx={{
              '@media screen and (max-width: 999px)': {
                position: 'relative',
                top: '30px',
                left: '0px'
              },
              '@media screen and (min-width: 1000px)': {
                position: 'absolute',
                top: '160px',
                left: '60px'
              }
            }}
          >
            <Heading as="h1" fontSize={[70, 80]} variant="page-title">
              Riya Negi
            </Heading>
            <Text fontSize={20}>Keen engineer making intuitive websites</Text>
          </Box>
        </Box>
        <Container maxW="620px">
          <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6}
            mt={12}
            textAlign="center"
          >
            Hello, I'm a frontend engineer based in India
          </Box>
          <Section delay={0.1}>
            {' '}
            <Heading as="h3" variant="section-title">
              About
            </Heading>
            <Paragraph>
              <NextLink href="/works/projects" color="teal.500">
                I have an avid interest in web technologies and thus believe
                that even if art is subjective, good user interfaces shouldn’t
                be. For users, it must be as simple as a click to reach from
                point A to point B, but behind the backdrop, there lies complex
                but fascinating mechanisms of asynchronous code all working
                together to produce the intended result. And I strive to play a
                role in these impactful endeavours.
                <br />
                While taking a course for DBMS during my undergrad days, we had
                to build an application supporting our understanding of the
                course. I started with building a basic webpage and instantly
                realised how inadequate my knowledge was of how web technology
                works or interacts with the user. I learnt that modern webpages
                focus on how to make every user interaction count and how to
                reach the goal with the least number of clicks without
                compromising the intuitiveness of the webpage/platform. I was
                instantly captivated by the endless possibilities of what the
                culmination of code and design can do and how powerful it can
                be. Thus began my pursuits of understanding web technologies.
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
                <Box>
                  <BioYear>1999</BioYear>I was born!
                </Box>
                <Box>
                  <BioYear>2020</BioYear>Personal venture at WiredClan
                </Box>
                <Box>
                  <BioYear>2021</BioYear>Completed graduation in BE Computer
                  Engineering
                </Box>
                <Box>
                  <BioYear>2021</BioYear>Lead frontend dev, building MVP at
                  Cosmofeed
                </Box>
                <Box>
                  <BioYear>2021 to present</BioYear>Frontend dev at Geosnapshot
                </Box>
              </BioSection>
            </Box>
          </Section>
          <List>
            <Heading as="h3" variant="section-title">
              On the web
            </Heading>
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
