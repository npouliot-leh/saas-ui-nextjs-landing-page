import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Create locale-aware navigation functions
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({ locales: routing.locales });
