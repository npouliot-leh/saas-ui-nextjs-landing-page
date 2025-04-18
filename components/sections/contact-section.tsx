import { Box, Container, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react'
import { Section } from '#components/section'

export const ContactSection = () => {
  // Basic form structure - submission logic needs to be added later
  return (
    <Section id="contact"> {/* Use the ID matching the nav link */}
      <Container maxW="container.md"> {/* Using md for a typical contact form width */}
        <Heading as="h2" size="xl" mb="8" textAlign="center">
          Contact Us
        </Heading>
        <VStack as="form" spacing="4" onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission for now */}
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Your Name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="your.email@example.com" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your message..." />
          </FormControl>
          <Button type="submit" colorScheme="primary" alignSelf="center">
            Send Message
          </Button>
        </VStack>
      </Container>
    </Section>
  )
}
