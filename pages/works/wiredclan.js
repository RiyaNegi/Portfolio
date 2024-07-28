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
import demoPic1 from '../../public/images/work/wc2.png'
import demoPic2 from '../../public/images/work/wc3.png'

const Work = () => (
  <Layout title="Social-Monitoring">
    <Container mt={50}>
      <Title>WiredClan</Title>
      <Heading as="h3" fontSize={20} mb={4} textDecoration={'underline'}>
        <ArrowForwardIcon mr={2} /> How I got the Idea
      </Heading>
      <P>
        During covid colleges went online, but since it was all very new, there
        wasn't a lot of activity. Students weren't able to host any hackathons
        nor teachers were able to assess tech assignments properly. I came up
        with the idea to host a tech blogging website that would solve both
        these cases.
        <br />
        <br />
        Wiredclan was building an online tech community in colleges and this
        fire spread fast. I was able to host 5 hackathons across India on my
        platform with the help of my team. This was me first ever personal
        venture and I was able to learn so much through the experience.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Language</Meta>
          <span>Javascript</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Postgress, Express, React, Reducers</span>
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
        We received feedback from multiple users that they didn't like that they
        couldn't view certain pages or do certain actions until they were logged
        in. This prompted a critical realization: We had built the website like
        an engineer, and not a user.
        <br />
        <br />
        Thus, after making substantial changes in both the backend and frontend
        architecture, we released a version of the website where users could
        view and even use a large part of the website without ever logging in.
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
        Some use cases can demand a structural change of the entire project, so
        we should always architecture by keeping components as loosely coupled
        as possible, so that they can be replaced, re-ordered or removed if need
        be.
        <br />
        <br />
        After a while when the venture became more than a personal project, we
        realized that we had a lot of things to handle, so we decided to make
        the project open for public contribution. We had to review the PR but
        that showed me the power of open-source community and encouraged me to
        contribute back into the community as well!
      </P>
    </Container>
  </Layout>
)

export default Work
