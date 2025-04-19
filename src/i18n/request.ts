import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // Provide messages for the current locale. Note that this example
  // uses the root `messages` directory, not one inside `src`.
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
