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
import demoPic1 from '../../public/images/work/social2.png'
import demoPic2 from '../../public/images/work/social1.png'

const Work = () => (
  <Layout title="Social-Monitoring">
    <Container mt={50}>
      <Title>Social-Monitoring</Title>
      <Heading as="h3" fontSize={20} mb={4} textDecoration={'underline'}>
        <ArrowForwardIcon mr={2} />
        How I got the Idea
      </Heading>
      <P>
        In the 4th year of college, Me and my teammate were looking for ideas
        for the final year project. I wanted something that covers the spectrum
        of both our skills. Since I was handling frontend engineering I wanted
        something elaborate with graphs and visualization so after brainstorming
        we settled on building a social-monitoring dashboard for
        products/companies.
        <br />
        <br />
        It would scrape, clean and parse all data and then display it in the
        form of various charts or graphs on a single page dashboard with user
        authentication
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Language</Meta>
          <span>Javascript</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Flask, React, Reducers, Websockets, JWT</span>
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
        <ArrowForwardIcon mr={2} /> Problems and thought process
      </Heading>
      <P>
        Since this project involved a constant connection with the backend for
        getting new parsed data from the internet there was a requirement of
        handling the usecase where the backend needs to inform client that new
        data is available.
        <br />
        <br />
        This was new to me since I always made the connection from client to
        backend on the basis of user actions. After some research, I learned
        about websockets and applied it here so that we could make an API call
        whenever new data was available.
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
        <ArrowForwardIcon mr={2} />
        Lessons learned
      </Heading>
      <P>
        Adapted myself to flask-react stack for frontend which was experimental
        but fun!
        <br />
        <br />
        Categorizing chunks of code in huge codebases can save you from a lot of
        confusion and clutter. Learn when to use what tool correctly for
        mastering the art of frontend
      </P>
    </Container>
  </Layout>
)

export default Work
