import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

import icon from 'astro-icon';


import react from '@astrojs/react';


export default defineConfig({
  site: 'https://adesso-coaching.com',
  integrations: [mdx(), sitemap(), tailwind(), icon(), react()],
  output: "hybrid",
  adapter: vercel({ imageService: true }),
  image: {
    domains: ["astro.build", 'images.ctfassets.net'],
    remotePatterns: [{
      protocol: 'https',
      hostname: '**.contentful.com',
    }],
  }
});