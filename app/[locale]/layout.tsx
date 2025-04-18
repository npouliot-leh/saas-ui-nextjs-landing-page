import * as React from 'react'

// This layout receives the locale param and wraps the actual page layouts/content
export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // We can use params.locale here later for loading translations, setting lang attribute, etc.
  // For now, just render the children passed from the specific route group layouts (marketing, auth)
  return <>{children}</>
}
