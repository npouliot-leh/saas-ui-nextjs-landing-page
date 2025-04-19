import { Box, Container, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import { Section } from '#components/section';
import { useTranslations } from 'next-intl'; // Re-add import

export const ContactSection = () => {
  const t = useTranslations('ContactSection'); // Re-add hook
  // Basic form structure - submission logic needs to be added later
  return (
    <Section id="contact"> {/* Use the ID matching the nav link */}
      <Container maxW="container.md"> {/* Using md for a typical contact form width */}
        <Heading as="h2" size="xl" mb="8" textAlign="center">
          {t('title')} {/* Use translation */}
        </Heading>
        <VStack as="form" spacing="4" onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission for now */}
          <FormControl isRequired>
            <FormLabel>{t('nameLabel')}</FormLabel> {/* Use translation */}
            <Input placeholder={t('namePlaceholder')} /> {/* Use translation */}
          </FormControl>
          <FormControl isRequired>
            <FormLabel>{t('emailLabel')}</FormLabel> {/* Use translation */}
            <Input type="email" placeholder={t('emailPlaceholder')} /> {/* Use translation */}
          </FormControl>
          <FormControl isRequired>
            <FormLabel>{t('messageLabel')}</FormLabel> {/* Use translation */}
            <Textarea placeholder={t('messagePlaceholder')} /> {/* Use translation */}
          </FormControl>
          <Button type="submit" colorScheme="primary" alignSelf="center">
            {t('sendButton')} {/* Use translation */}
          </Button>
        </VStack>
      </Container>
    </Section>
  )
}
