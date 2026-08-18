// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Update `site`/`base` when the lab moves to a custom domain (e.g. https://csg.keio.jp with base '/').
export default defineConfig({
  site: 'https://kentaroy47.github.io',
  base: '/lab-hp',
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    routing: { prefixDefaultLocale: true },
  },
  vite: { plugins: [tailwindcss()] },
});
