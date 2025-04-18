import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Section } from '#components/section'

export const BlogSection = () => {
  return (
    <Section id="blog"> {/* Use the ID matching the nav link */}
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb="8" textAlign="center">
          Blog / News
        </Heading>
        <Text textAlign="center">
          Placeholder text for Blog/News section. Recent articles will be listed here.
        </Text>
        {/* Add logic to fetch and display blog posts later */}
      </Container>
    </Section>
  )
}
