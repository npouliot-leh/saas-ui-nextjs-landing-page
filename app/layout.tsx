import * as React from 'react';
import { ColorModeScript, theme } from '@chakra-ui/react';
import { Provider } from './provider'; // Ensure this path is correct

// Root layout MUST contain <html> and <body> tags
export default function RootLayout({
  children,
  params, // Add params to the signature
}: {
  children: React.ReactNode;
  params: { locale: string }; // Define the type for params
}) {
  const colorMode = theme.config.initialColorMode;

  // Note: lang attribute is set in app/[locale]/layout.tsx via html tag there
  // This layout provides the essential document structure and UI providers
  // We can now use params.locale if needed, but it's primarily for context passing
  return (
    // The lang attribute should be set here, using the passed locale
    <html lang={params.locale} data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <head>
        {/* Favicon links */}
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
      </head>
      <body className={`chakra-ui-${colorMode}`}>
        <ColorModeScript initialColorMode={colorMode} />
        {/* Main UI Provider wraps the children passed down */}
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
