import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import random from '../public/images/bee.png'

const Posts = () => {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h4" fontSize={20} mb={4}>
          Popular POsts
        </Heading>
        <SimpleGrid columns={[1, 1, 2]}>
          <Section>
            <GridItem
              title="NPM react-comments-section"
              href={'/posts'}
              thumbnail={random}
            >
              <Box>hello</Box>
            </GridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Posts
