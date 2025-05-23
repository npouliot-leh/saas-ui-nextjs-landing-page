'use client' // Add this directive

import { Center } from '@chakra-ui/react'
import { Auth } from '@saas-ui/auth'
import { Link } from '@saas-ui/react'
import { BackgroundGradient } from 'components/gradients/background-gradient'
import { PageTransition } from 'components/motion/page-transition'
import { Section } from 'components/section'
import { NextPage } from 'next'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const providers = {
  google: {
    name: 'Google',
    icon: FaGoogle,
  },
  github: {
    name: 'Github',
    icon: FaGithub,
    variant: 'solid',
  },
}

// Note: Page props might need locale later
const Login: NextPage = () => {
  return (
    <Section height="calc(100vh - 200px)" innerWidth="container.sm">
      <BackgroundGradient zIndex="-1" />

      <Center height="100%" pt="20">
        <PageTransition width="100%">
          <Auth
            view="login"
            providers={providers}
            signupLink={<Link href="/signup">Sign up</Link>} // Link might need locale prefixing later
          />
        </PageTransition>
      </Center>
    </Section>
  )
}

export default Login
