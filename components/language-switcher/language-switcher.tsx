'use client';

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '../../src/i18n/navigation'; // Use relative path
import { routing } from '../../src/i18n/routing'; // Use relative path
import { FiChevronDown } from 'react-icons/fi';
import { useTransition } from 'react';

export const LanguageSwitcher = () => {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<FiChevronDown />}
        variant="ghost"
        size="sm"
        isLoading={isPending} // Show loading state during transition
        aria-label={t('label')}
      >
        {/* Display the translated name of the current locale */}
        {t(locale as keyof typeof t.rich)}
      </MenuButton>
      <MenuList>
        {routing.locales.map((loc) => {
          if (loc === locale) return null; // Don't show current language as an option
          return (
            <MenuItem key={loc} onClick={() => handleLocaleChange(loc)}>
              {/* Display the translated name of the target locale */}
              {t(loc as keyof typeof t.rich)}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
