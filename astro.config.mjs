// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// User site: served from the domain root. The deploy workflow sets SITE_URL / SITE_BASE from GitHub Pages.
export default defineConfig({
  site: process.env.SITE_URL || 'https://xiaobo-coder.github.io',
  base: process.env.SITE_BASE ?? '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  vite: { plugins: [tailwindcss()] },
});
