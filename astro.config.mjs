import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.alexandranutri.com',
  output: 'static',
  viewTransitions: true,
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [tailwind(), compress(), sitemap({
    filter: (page) => !/\/404\/?$/.test(page),
    i18n: {
      defaultLocale: 'es',
      locales: {
        es: 'es-ES',
        en: 'en-US'
      }
    }
  })],
});
