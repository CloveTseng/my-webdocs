// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Clove Crafted-dev | 前端工程師',
  tagline: 'F2E Developer',
  favicon: '/img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: false,
          // path: 'docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        exclude: ['**/solving-code/**', '**/_*.{js,jsx,ts,tsx,md,mdx}'],
        },
        blog: {
          showReadingTime: true,
          // feedOptions: {
          //   type: null,
          //   // xslt: true,
          // },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          // onInlineTags: 'warn',
          // onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
          
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Clove Crafted-dev',
        logo: {
          alt: 'My Site Logo',
          src: 'img/sprout.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: '技術筆記',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          // {
          //   href: 'https://firebasestorage.googleapis.com/v0/b/mobaocoffee.appspot.com/o/%E6%9B%BE%E7%B9%AA%E7%92%87_%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB_Resume.pdf?alt=media&token=b20783a2-dc5a-44ca-8fc2-f6478b3f99c9',
          //   label: 'Resume',
          //   position: 'right'
          // },
          {
            href: 'https://github.com/CloveTseng',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        }
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Clove Tseng. All Rights Reserved. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        magicComments: [
          {
            className: 'code-block-highlight-line',
            line: 'next-line',
            block: {start: 'next-line-start', end: 'next-line-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'error'
          },
        ],
        additionalLanguages: ['git','bash'],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
    },
    }),
  
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid','@docusaurus/theme-live-codeblock'],
};

export default config;
