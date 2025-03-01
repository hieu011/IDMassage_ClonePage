import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'vi', 'ko'],

    // Used when no locale matches
    defaultLocale: 'vi'
}); 