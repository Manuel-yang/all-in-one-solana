// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'All in One Solana',
  tagline: 'Power by 706 & Rustycab',
  url: 'https://www.all-in-one-blockchain.xyz/',
  baseUrl: '/all-in-one-solana/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CreatorsDAO', // Usually your GitHub org/user name.
  projectName: 'all-in-one-solana', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/CreatorsDAO/all-in-one-solana/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://creatorsdao.github.io/all-in-one-solana/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'All In One Solana',
        logo: {
          alt: 'Logo',
          src: 'img/my_logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'doc',
            docId: 'Solana-Co-Learn/README',
            position: 'left',
            label: 'Solana Co Learn',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/CreatorsDAO/all-in-one-solana/discussions',
            label: 'Discussions',
            position: 'right',
          },
          {
            href: 'https://github.com/CreatorsDAO/all-in-one-solana.git',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/92B7aka3qr',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/SolanaCreators',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/CreatorsDAO',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} All in One Solana site, Inc.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
        darkTheme: darkCodeTheme,
        // Additional languages can be added here.
        additionalLanguages: ['powershell', 'rust', 'toml', 'yaml', 'c', 'cpp'],
      },
    }),
};

module.exports = config;
