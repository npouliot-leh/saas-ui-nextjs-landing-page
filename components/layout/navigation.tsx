import { HStack } from '@chakra-ui/react';
import { useDisclosure, useUpdateEffect } from '@chakra-ui/react';
import { useScrollSpy } from '#hooks/use-scrollspy'; // Corrected alias path
import { usePathname, useRouter } from '../../src/i18n/navigation'; // Use relative path
import { useTranslations } from 'next-intl';
import * as React from 'react';
import { MobileNavButton } from '#components/mobile-nav';
import { MobileNavContent } from '#components/mobile-nav'
import { NavLink } from '#components/nav-link'
import siteConfig from '#data/config'

import ThemeToggle from './theme-toggle';

const Navigation: React.FC = () => {
  const t = useTranslations('Navigation');
  const mobileNav = useDisclosure();
  const router = useRouter(); // Now locale-aware
  const path = usePathname(); // Now locale-aware
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    },
  )

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>()

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  return (
    <HStack spacing="2" flexShrink={0}>
      {/* Updated map function */}
      {siteConfig.header.links.map(({ id, label, ...props }, i) => {
        // Construct href for scroll links, assuming id is always present for these
        const linkHref = `/#${id}`;
        // Use id for isActive check for scroll links
        const isActive = !!(id && activeId === id);
        // Use translated label
        const translatedLabel = t(id);

        return (
          <NavLink
            display={['none', null, 'block']}
            href={linkHref}
            key={i}
            isActive={isActive}
            {...props}
          >
            {translatedLabel}
          </NavLink>
        );
      })}

      <ThemeToggle />

      <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        onClick={mobileNav.onOpen}
      />

      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </HStack>
  )
}

export default Navigation
