import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from './routing';

// Function to validate locale
function isValidLocale(locale: any): locale is typeof routing.locales[number] {
  return routing.locales.includes(locale);
}

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // Using locale assertion because middleware should ensure validity
  if (!isValidLocale(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    // Add locale back to satisfy TypeScript type definition
    locale: locale as string
  };
});
