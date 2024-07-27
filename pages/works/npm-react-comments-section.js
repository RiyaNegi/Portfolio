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
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows 2000/XP</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Delphi</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="http://odoruinu.net.s3.amazonaws.com/software/amembo/amembo0515123.zip">
            v0.5.15.123
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2008/03/23</span>
        </ListItem>
        <ListItem>
          <Meta>Manual</Meta>
          <Link href="https://w.atwiki.jp/amembo/">使い方wiki</Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
