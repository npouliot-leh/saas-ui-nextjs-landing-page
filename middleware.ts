import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing'; // Adjusted path to routing config
import { NextRequest } from 'next/server';

console.log('Middleware loaded. Routing config:', routing);

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  console.log(`\n--- Middleware ---`);
  console.log(`Incoming request path: ${url.pathname}`);
  console.log(`Incoming request locale: ${url.locale}`); // Next.js detected locale before middleware

  const response = intlMiddleware(request);

  // Log the response status and location header if it's a redirect
  console.log(`Middleware response status: ${response.status}`);
  if (response.headers.has('location')) {
    console.log(`Middleware redirecting to: ${response.headers.get('location')}`);
  } else {
    // If not redirecting, it might be rewriting. Log the final URL if possible.
    // Note: Accessing the final rewritten URL directly from the response isn't straightforward here.
    // We rely on the fact that intlMiddleware handles the rewrite internally.
    console.log(`Middleware likely rewriting internally (no redirect header).`);
  }
  console.log(`------------------`);

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
