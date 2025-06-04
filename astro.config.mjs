import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexandranutri.com',
  output: 'static',
  viewTransitions: true,
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  integrations: [tailwind(), compress(), sitemap({
    i18n: {
      defaultLocale: 'es',
      locales: {
        es: 'https://alexandranutri.com',
        en: 'https://alexandranutri.com/en'
      }
    }
  })],
});
