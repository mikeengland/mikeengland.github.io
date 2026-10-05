// @ts-check

import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
	site: 'https://mikeengland.github.io',
	integrations: [mdx(), sitemap()],
	markdown: {
		processor: unified({
			rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: [] }]],
		}),
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
