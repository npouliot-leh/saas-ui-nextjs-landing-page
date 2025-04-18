'use client'

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { usePathname, useRouter } from 'next/navigation'
import { FiChevronDown } from 'react-icons/fi'

// Assuming locales are defined in next.config.mjs i18n
const locales = ['en', 'fr']
const localeLabels: { [key: string]: string } = {
  en: 'English',
  fr: 'Français',
}

export const LanguageSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  // Extract current locale from pathname (e.g., /fr/about -> fr)
  // This is a basic extraction, might need refinement based on exact routing structure
  const currentLocale = locales.find((loc) => pathname.startsWith(`/${loc}`)) || 'en' // Default to 'en' if no prefix

  const handleLocaleChange = (newLocale: string) => {
    // Remove current locale prefix if it exists
    const newPathname = pathname.startsWith(`/${currentLocale}`)
      ? pathname.substring(`/${currentLocale}`.length) || '/'
      : pathname

    // Navigate to the new path with the new locale prefix
    // Note: For the default locale 'en', Next.js might not add the prefix by default.
    // Adjust logic if needed based on actual Next.js i18n routing behavior.
    const path = newLocale === 'en' ? newPathname : `/${newLocale}${newPathname}`
    router.push(path)
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<FiChevronDown />}
        variant="ghost"
        size="sm"
      >
        {localeLabels[currentLocale]}
      </MenuButton>
      <MenuList>
        {locales.map((locale) => {
          if (locale === currentLocale) return null // Don't show current language as an option
          return (
            <MenuItem key={locale} onClick={() => handleLocaleChange(locale)}>
              {localeLabels[locale]}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}
