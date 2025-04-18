import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo, // Note: Logo component itself is now just text placeholder
  seo: {
    title: 'Sublogik',
    description: 'Business Consulting and Software Solutions', // Updated description
  } as NextSeoProps,
  termsUrl: '#', // TODO: Update later
  privacyUrl: '#', // TODO: Update later
  header: {
    links: [
      // Updated links for Sublogik
      {
        id: 'services', // Assuming section IDs will match
        label: 'Services',
      },
      {
        id: 'use-cases',
        label: 'Use Cases',
      },
      {
        id: 'blog',
        label: 'Blog', // Or 'News'
      },
      {
        id: 'contact',
        label: 'Contact',
      },
      // Removed Login/Signup for now, can be added back if needed
    ],
  },
  footer: {
    copyright: (
      <>
        © {new Date().getFullYear()} Sublogik Inc. All rights reserved.
      </>
    ),
    links: [
      // TODO: Add actual social links
      { href: '#', label: 'LinkedIn' }, // Placeholder
      { href: '#', label: 'Twitter' }, // Placeholder
      { href: '#', label: 'Facebook' }, // Placeholder
      // Keep contact or add specific contact link if desired
      { href: 'mailto:info@sublogik.ca', label: 'Contact' }, // Example contact
    ],
  },
  signup: { // Note: This signup section might be removed later
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
