// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import mdx from '@astrojs/mdx';

import icon from 'astro-icon';

import react from '@astrojs/react';

import { unified } from '@astrojs/markdown-remark';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [icon({

    svgoOptions: {

      plugins: [

        {

          name: "prefixIds",
          params: {

            prefix: "icon-",

          }

        }

      ]

    }

  }), mdx({
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, [rehypePrettyCode, { theme: 'github-dark' }]]
    }),
}), react()],

  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, [rehypePrettyCode, { theme: 'github-dark' }]],
    })
  },
  output: "server",
  adapter: netlify(),
  prefetch: true,
});