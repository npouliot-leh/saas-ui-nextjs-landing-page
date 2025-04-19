import { MarketingLayout } from '#components/layout'

export default function Layout({
  children,
  params, // Add params to the signature
}: {
  children: React.ReactNode;
  params: { locale: string }; // Define the type for params
}) {
  // Although params.locale isn't used here directly, accepting it is crucial
  // for Next.js routing context when nested under a dynamic segment.
  return <MarketingLayout>{children}</MarketingLayout>
}
