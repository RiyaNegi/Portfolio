import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import webpack from '../public/images/Posts/webpack.png'
import tsReact from '../public/images/Posts/tsReact.png'
import scalable from '../public/images/Posts/scalable.png'
import metaTags from '../public/images/Posts/metaTags.png'

const Posts = () => {
  return (
    <Layout title="Posts">
      <Container mt={50}>
        <Heading as="h4" fontSize={20} mb={4}>
          Posts
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={8}>
          <Section>
            <GridItem
              title="Setting up Webpack 5 with React and Babel from scratch"
              href={
                'https://dev.to/riyanegi/setting-up-webpack-5-with-react-and-babel-from-scratch-2021-271l'
              }
              thumbnail={webpack}
            ></GridItem>
          </Section>
          <Section>
            <GridItem
              title="Getting started with Typescript with React Hooks"
              href={
                'https://dev.to/riyanegi/getting-started-with-typescript-with-react-hooks-2021-5cfd'
              }
              thumbnail={tsReact}
            ></GridItem>
          </Section>
          <Section>
            <GridItem
              title="Dummy guide to building scalable react web architecture"
              href={
                'https://dev.to/riyanegi/dummy-guide-to-building-scalable-react-web-architecture-53dc'
              }
              thumbnail={scalable}
            ></GridItem>
          </Section>
          <Section>
            <GridItem
              title="Solving Issues with og: Meta Tags: A Comprehensive Guide"
              href={
                'https://dev.to/riyanegi/solving-issues-with-og-meta-tags-a-comprehensive-guide-22c2'
              }
              thumbnail={metaTags}
            ></GridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Posts
