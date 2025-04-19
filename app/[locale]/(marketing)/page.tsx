'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
  Button, // Import Button for styling Links
} from '@chakra-ui/react'
import { Br } from '@saas-ui/react' // Remove Link import from saas-ui
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import { useTranslations } from 'next-intl'; // Import useTranslations
// Removed setRequestLocale import as it's handled in layout
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'
import { Link } from '../../../src/i18n/navigation'; // Use relative path

// Removed unused imports: Faq, Features, Highlights, Pricing, Testimonials, faq, pricing, testimonials
// Removed ButtonLink import
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
// Import new section components
import { ServicesSection } from '#components/sections/services-section'
import { UseCasesSection } from '#components/sections/use-cases-section'
import { BlogSection } from '#components/sections/blog-section'
import { ContactSection } from '#components/sections/contact-section'
import { Em } from '#components/typography'

// Define HeroSection before Home uses it
const HeroSection: React.FC = () => {
  // Get translations for the Hero section
  const t = useTranslations('HeroSection');

  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                {/* Using original hardcoded text for now, can be translated later if needed */}
                Build beautiful
                <Br /> software faster
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                 {/* Using original hardcoded text for now, can be translated later if needed */}
                Saas UI is a <Em>React component library</Em>
                <Br /> that doesn't get in your way and helps you <Br />{' '}
                build intuitive SaaS products with speed.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack>

              {/* Replace ButtonLink with Link styled as Button */}
              <ButtonGroup spacing={4} alignItems="center">
                 <Button as={Link} colorScheme="primary" size="lg" href="/signup">
                   {/* Using original hardcoded text */}
                   Sign Up
                 </Button>
                 <Button
                   as={Link}
                   size="lg"
                   href="https://demo.saas-ui.dev" // Assuming external link doesn't need locale
                   variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                   {/* Using original hardcoded text */}
                  View demo
                 </Button>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      {/* Removed Features component usage from HeroSection */}
    </Box>
  )
}


// Removed invalid 'meta' export. Metadata should be handled by generateMetadata if needed.

// Update component signature to accept params
const Home: NextPage<{ params: { locale: string } }> = ({ params: { locale } }) => {
  // setRequestLocale is handled in the layout

  // Translations for the main page (if any needed directly here)
  // const t = useTranslations('MarketingPage');

  return (
    <Box>
      {/* Pass locale down if HeroSection needs it directly, or let it use its own hook */}
      <HeroSection />

      {/* Add new placeholder sections */}
      <ServicesSection />
      <UseCasesSection />
      <BlogSection />
      <ContactSection />

      {/* Removed unused sections */}
      {/* <HighlightsSection /> */}
      {/* <FeaturesSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <PricingSection /> */}
      {/* <FaqSection /> */}
    </Box>
  )
}

// Removed HighlightsSection, FeaturesSection, TestimonialsSection, PricingSection, FaqSection

export default Home
