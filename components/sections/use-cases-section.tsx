import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Section } from '#components/section'

export const UseCasesSection = () => {
  return (
    <Section id="use-cases"> {/* Use the ID matching the nav link */}
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb="8" textAlign="center">
          Use Cases
        </Heading>
        <Text textAlign="center">
          Placeholder text for Use Cases section. Concrete examples and demonstrations will be added here.
        </Text>
        {/* Add more detailed structure later (e.g., examples with images/videos) */}
      </Container>
    </Section>
  )
}
