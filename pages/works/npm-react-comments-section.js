import {
  Container,
  List,
  ListItem,
  Heading,
  Image,
  Link
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
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
        While I was working on <Link href="/works/wiredclan">WiredClan</Link>,
        we had a scope for building a comments section. While working on it I
        realized there are multiple ways to build a comment section. It could
        either be multi-threaded or single-threaded or one-level-threaded.
        Additionally, I also had to figure out how to maintain that data and
        connect with the backend. I Did some research on how I wanted it for my
        website and what's most optimum in my particular use-case.
        <br />
        <br /> While working on this, I noticed that beginners learning web
        development, especially those creating personal blogs or gallery
        websites, might find building a comment section overwhelming. Since I
        couldn’t find an easy npm package for it, I decided to create one to
        help others with their projects.
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
        <ListItem>
          <Meta>Source</Meta>
          <Link
            href="https://github.com/RiyaNegi/react-comments-section"
            textDecoration={'underline'}
            target="_blank"
          >
            Repo link
          </Link>
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
        This was my first ever npm package, so a lot of things were new for me.
        The idea of making things customizable meant that I had to keep
        everything fluid without making a mess out of it. The users are supposed
        to give inputs, and it's supposed to work throughout consistently. So if
        a user is logged in or not would also make a difference on how the UI
        would look, what features it would have access to, and what not to.
        <br />
        <br /> At first, I thought of introducing reducers; however, that amount
        of boilerplate code and complexity was not required for a small npm
        package. So I turned to react context and found that it fit perfectly
        according to my requirements and helped in maintaining the global state
        of the project.  I avoided prop-drilling hell by using the
        GlobalProvider store and having access to user-given props across the
        app also reduced re-renders.
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
        multiple props and states because it could easily create clutter and
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
