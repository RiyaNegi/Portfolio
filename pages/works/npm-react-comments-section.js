import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Image
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import demoPic1 from '../../public/images/work/rcs2.png'
import demoPic2 from '../../public/images/work/rcs3.png'

const Work = () => (
  <Layout title="NPM react-comments-section">
    <Container mt={50}>
      <Title>NPM react-comments-section</Title>
      <Heading as="h3" fontSize={20} mb={4} textDecoration={'underline'}>
        <ArrowForwardIcon mr={2} />
        How I got the Idea
      </Heading>
      <P>
        I was working on WiredClan, building a comment section and realised
        there are multiple ways to build a comment section. It could be
        multi-threaded or single-threaded or one-level-threaded. Plus I also had
        to figure out how to maintain that data and connect with the backend.
        Did some research on how I wanted it for my website and what's most
        optimum in my particular use-case.
        <br />
        <br /> I realised however, for absolute beginners, working on starter
        projects like a personal blog, or a gallery website, working to learn
        basics of webpage development, the whole process of building a comment
        section could be a little overwhelming. I couldn't find a simple npm
        package for it, so I thought I would make one for others to use in their
        projects.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Language</Meta>
          <span>Typescript</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, react context</span>
        </ListItem>
      </List>
      <Image
        borderRadius="md"
        w="full"
        src={demoPic1.src}
        alt={'demo-pic'}
        mb={10}
        mt={5}
      />

      <Heading as="h3" fontSize={20} mb={4} textDecoration={'underline'}>
        <ArrowForwardIcon mr={2} />
        Problems and thought process
      </Heading>
      <P>
        This was my first ever npm-package so a lot of it was new to me. The
        idea of making things customizable meant that I had to keep everything
        fluid without making a mess out of it. The users are supposed to give
        inputs and it's supposed to work throughout consistently. So if a user
        is logged in or not would also make a differnece on how the UI would
        look, what features it would have access to and what not to.
        <br />
        <br /> At first I thought of introducing reducers, however that amount
        of boilerplate code and complexity was not required for a small npm
        package, so I turned to react context and found that it fit perfectly
        according to my requirements and helped in maintaining the global state
        of the project. Avoided prop-drilling hell by using the GlobalProvider
        store and having access to user given props across the app also reduced
        re-renders.
      </P>
      <Image
        borderRadius="md"
        w="full"
        src={demoPic2.src}
        alt={'demo-pic'}
        mb={10}
        mt={5}
      />
      <Heading as="h3" fontSize={20} mb={4} textDecoration={'underline'}>
        <ArrowForwardIcon mr={2} /> Lessons learned
      </Heading>
      <P>
        Readable code is very important in places where there are going to be
        multiple props and states because it could easily create a clutter and
        confusion.
        <br />
        <br />
        Don't try to overengineer stuff, and adapt yourself according to the
        application's requirements.
      </P>
    </Container>
  </Layout>
)

export default Work
