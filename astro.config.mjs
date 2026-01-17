// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mdx from '@astrojs/mdx';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), mdx({

    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]

  })],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
});