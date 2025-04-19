import * as React from 'react';
import { NextIntlClientProvider, hasLocale } from 'next-intl'; // Import hasLocale
import { notFound } from 'next/navigation';
import { getMessages, setRequestLocale } from 'next-intl/server'; // Import getMessages
import { routing } from '../../src/i18n/routing'; // Corrected import path

// Add generateStaticParams function
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale }, // Destructure locale directly
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate locale using hasLocale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Load messages for the specific locale
  const messages = await getMessages();

  // Note: The actual <html>, <body> are in the parent app/layout.tsx
  // We also cannot set lang={locale} here as the <html> tag is not rendered here.
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
