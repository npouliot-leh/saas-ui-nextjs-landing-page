import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { Section } from '#components/section';
import { useTranslations } from 'next-intl'; // Re-add import

export const UseCasesSection = () => {
  const t = useTranslations('UseCasesSection'); // Re-add hook

  return (
    <Section id="use-cases"> {/* Use the ID matching the nav link */}
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb="8" textAlign="center">
          {t('title')} {/* Use translation */}
        </Heading>
        <Text textAlign="center">
          {t('placeholder')} {/* Use translation */}
        </Text>
        {/* Add more detailed structure later (e.g., examples with images/videos) */}
      </Container>
    </Section>
  )
}
