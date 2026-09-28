// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Org site repo (Keio-CSG.github.io), so the site is served at the domain root.
// For a custom domain (e.g. https://csg.keio.jp) change `site` and add public/CNAME.
export default defineConfig({
  site: 'https://keio-csg.github.io',
  base: '/',
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    routing: { prefixDefaultLocale: true },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'ja', locales: { ja: 'ja-JP', en: 'en-US' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
