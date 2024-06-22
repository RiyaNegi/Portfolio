import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import random from '../public/images/bee.png'

const Works = () => {
  return (
    <Container mt={50}>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="npm-react-comments-section"
            title="NPM react-comments-section"
            thumbnail={random}
          >
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={random}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
