import createNextIntlPlugin from 'next-intl/plugin';
// Remove Velite import for now
// import { withVelite } from 'velite';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // REMOVING i18n block again based on next-intl warning for App Router
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })
    return config
  },
}

// Explicitly provide the path to the request config file
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

// Export only with next-intl wrapper for now
export default withNextIntl(nextConfig);
