import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="NPM react-comments-section">
    <Container mt={50}>
      <Title>
        NPM react-comments-section <Badge>2020</Badge>
      </Title>
      <P>Lorem ipsum lorem ipsum lorem ipsum</P>
    </Container>
  </Layout>
)

export default Work
