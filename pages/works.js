import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem, GridItem } from '../components/grid-item'
import kanban from '../public/images/work/kanban.png'
import comments from '../public/images/work/comments.png'
import student from '../public/images/work/student.png'
import wiredClan from '../public/images/work/wiredClan.png'
import social from '../public/images/work/social.png'
import teerex from '../public/images/work/teerex.png'

const Works = () => {
  return (
    <Container mt={50}>
      <Heading as="h3" fontSize={30} mt={3} mb={10}>
        What I have been working on
      </Heading>
      <SimpleGrid columns={[1, 1, 1]} gap={20}>
        <Section>
          <WorkGridItem
            id="npm-react-comments-section"
            title="NPM react-comments-section"
            thumbnail={comments}
            delay={0.2}
          >
            npm package for integrating a fully functional comments section in
            react web apps along with custom input fields.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="social-monitoring"
            title="Social-Monitoring"
            thumbnail={social}
          >
            An application where we are able to utilize data for data
            interpretations and visualizations such as Outreach prediction, word
            cloud, sentiment analysis and brand mentions.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="wiredclan" title="WiredClan" thumbnail={wiredClan}>
            A social website built exclusively for college students to showcase
            their projects, host hackathons. Built on the PERN stack.
          </WorkGridItem>
        </Section>
        <Section>
          <GridItem
            id="kanban"
            title="Kanban Board"
            thumbnail={kanban}
            href={'https://github.com/RiyaNegi/Kanban-Board'}
          >
            Kanban board along with a simple todo list view for better task
            management. The Board view and List view are interconnected and any
            changes made on either of the views will be persist.
          </GridItem>
        </Section>
        <Section>
          <GridItem
            id="teerex"
            title="Teerex-store"
            thumbnail={teerex}
            href={'https://github.com/RiyaNegi/Teerex-store'}
          >
            A mock e-commerce clothing website with the abilities to filter and
            search through the prodcuts
          </GridItem>
        </Section>
        <Section>
          <GridItem
            id="student"
            title="Student-Data"
            thumbnail={student}
            href={'https://github.com/RiyaNegi/Student-Data'}
          >
            A single page react application where one side of the page has a
            student details form to submit and the other side has a table that
            displays all the registered students along with their details.
          </GridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
