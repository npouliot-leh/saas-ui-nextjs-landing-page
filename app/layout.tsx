import { ColorModeScript, theme } from '@chakra-ui/react'

import { Provider } from './provider'

// Reverted: Root layout only needs children
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const colorMode = theme.config.initialColorMode

  // Set a default lang here, or move html/body entirely to the locale layout
  // For simplicity, let's keep html/body here for now and set lang in locale layout later if needed
  // Or, we can just remove lang from here entirely for now. Let's remove it.
  return (
    <html data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <head>
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
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
