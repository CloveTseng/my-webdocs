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
  url: 'https://clovetseng.dev',
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
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
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
        gtag: {
          trackingID: 'G-HEYHYGD17P',
          anonymizeIP: true
        }, 
        theme: {
          customCss: './src/css/custom.css',
          
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Clove Crafted-dev',
        logo: {
          alt: 'My Site Logo',
          src: 'img/socialcard-removebg.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: '技術筆記',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          { type: 'search', position: 'right' },
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
        additionalLanguages: ['git', 'bash'],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid','@docusaurus/theme-live-codeblock'],
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        removeDefaultStopWordFilter: false,
      },
    ],
  ],
};

export default config;
