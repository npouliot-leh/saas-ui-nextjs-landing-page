import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { Section } from '#components/section';
import { useTranslations } from 'next-intl';
import { FiMap, FiLink, FiUsers, FiEye, FiShare2 } from 'react-icons/fi'; // Import icons

export const ServicesSection = () => {
  const t = useTranslations('ServicesSection'); // Use translations hook

  // Define service keys and icons
  const serviceItems = [
    { key: 'optimization', icon: FiMap },
    { key: 'integration', icon: FiLink },
    { key: 'hrSolution', icon: FiUsers },
    { key: 'ocr', icon: FiEye },
    { key: 'affiliate', icon: FiShare2 },
    // Add more service keys as needed
  ];

  return (
    <Section id="services"> {/* Use the ID matching the nav link */}
      <Container maxW="container.xl" py={16}>
        <Heading as="h2" size="xl" mb={12} textAlign="center">
          {t('title')} {/* Use translation for main title */}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {serviceItems.map((item) => (
            <Card key={item.key} variant="outline">
              <CardBody>
                <Stack spacing={4} align="flex-start">
                  <Icon as={item.icon} boxSize={8} color="primary.500" />
                  <Heading as="h3" size="md">
                    {t(`services.${item.key}.title`)} {/* Use translation key */}
                  </Heading>
                  <Text color="muted">{t(`services.${item.key}.description`)}</Text> {/* Use translation key */}
                </Stack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Section>
  )
}
