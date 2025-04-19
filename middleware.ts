import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing'; // Adjusted path to routing config
import { NextRequest, NextResponse } from 'next/server'; // Import NextResponse

console.log('Middleware loaded. Routing config:', routing);

// --- Basic Auth Configuration ---
// Read credentials from environment variables
const AUTH_USER = process.env.AUTH_USER;
const AUTH_PASS = process.env.AUTH_PASS;
// Enable auth only if both user and pass are set in environment
const ENABLE_AUTH = !!AUTH_USER && !!AUTH_PASS;
// --- End Basic Auth Configuration ---

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // --- Basic Auth Check ---
  if (ENABLE_AUTH) {
    const basicAuth = request.headers.get('authorization');
    if (basicAuth) {
      // Ensure AUTH_USER and AUTH_PASS are defined before proceeding
      if (!AUTH_USER || !AUTH_PASS) {
        console.error('Basic Auth Error: AUTH_USER or AUTH_PASS environment variables not set.');
        // Return unauthorized even if ENABLE_AUTH was somehow true
        return new NextResponse('Configuration error.', { status: 500 });
      }

      const authValue = basicAuth.split(' ')[1];
      try {
        const [user, pwd] = atob(authValue).split(':'); // Decode base64

        if (user === AUTH_USER && pwd === AUTH_PASS) {
          // Authorized, proceed to next-intl middleware
          console.log('Basic Auth successful.');
        } else {
          // Invalid credentials
          console.log('Basic Auth failed: Invalid credentials.');
          return new NextResponse('Unauthorized.', {
            status: 401,
            headers: {
              'WWW-Authenticate': 'Basic realm="Restricted"',
            },
          });
        }
      } catch (e) {
        // Handle potential decoding errors (e.g., invalid base64)
        console.error('Basic Auth failed: Error decoding credentials.', e);
        return new NextResponse('Unauthorized.', {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Restricted"',
          },
        });
      }
      // End of try...catch block
    } else { // This else corresponds to 'if (basicAuth)'
      // No credentials provided
      console.log('Basic Auth failed: No credentials provided.');
      return new NextResponse('Unauthorized.', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Restricted"',
        },
      });
    }
  }
  // --- End Basic Auth Check ---

  // If Auth is disabled or passed, run the intl middleware
  const url = request.nextUrl.clone();
  console.log(`\n--- Middleware (Post-Auth) ---`);
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
