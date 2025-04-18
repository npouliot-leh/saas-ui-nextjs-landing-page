import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Section } from '#components/section' // Assuming Section component exists and provides basic layout/padding

export const ServicesSection = () => {
  return (
    <Section id="services"> {/* Use the ID matching the nav link */}
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb="8" textAlign="center">
          Our Services
        </Heading>
        <Text textAlign="center">
          Placeholder text for Services section. Details about business consulting, software solutions, API integrations, etc., will go here.
        </Text>
        {/* Add more detailed structure later (e.g., grids, cards) */}
      </Container>
    </Section>
  )
}
