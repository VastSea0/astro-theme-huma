import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://humatarayici.netlify.app/',
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: 'tr',
    locales: ['en', 'ja',  'tr'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'red',
    },
  },
});
