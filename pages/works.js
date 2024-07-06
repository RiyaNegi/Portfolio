import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import kanban from '../public/images/work/kanban.png'
import comments from '../public/images/work/comments.png'
import student from '../public/images/work/student.png'
import wiredClan from '../public/images/work/wiredClan.png'
import social from '../public/images/work/social.png'
import teerex from '../public/images/work/teerex.png'

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
            thumbnail={comments}
          >
            npm package for integrating a fully functional comments section in
            react web apps along with custom input fields.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="social"
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
          <WorkGridItem id="kanban" title="Kanban Board" thumbnail={kanban}>
            Kanban board along with a simple todo list view for better task
            management. The Board view and List view are interconnected and any
            changes made on either of the views will be persist.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="teerex" title="Teerex-store" thumbnail={teerex}>
            A mock e-commerce clothing website with the abilities to filter and
            search through the prodcuts
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="student" title="Student-Data" thumbnail={student}>
            A single page react application where one side of the page has a
            student details form to submit and the other side has a table that
            displays all the registered students along with their details.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
