// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ehrapy',
  tagline: 'Electronic Health Record Analysis with Python.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'theislab', // Usually your GitHub org/user name.
  projectName: 'ehrapy', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/theislab/ehrapy',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ehrapy',
        logo: {
          alt: 'My Site Logo',
          src: 'img/ehrapy_logo.png',
          height: 60,
        },
        items: [
          {
            type: 'dropdown',
            label: 'Docs',
            position: 'right',
            items: [
              {
                label: 'Full Documentation',
                href: 'https://ehrapy.readthedocs.io/en/latest/',
              },
              {
                label: 'Installation',
                href: 'https://ehrapy.readthedocs.io/en/latest/installation.html',
              },
              {
                label: 'API reference',
                href: 'https://ehrapy.readthedocs.io/en/latest/usage/usage.html',
              },
              {
                label: 'Tutorails',
                href: 'https://ehrapy.readthedocs.io/en/latest/tutorials/index.html',
              },
              {
                label: 'Contributor Guide',
                href: 'https://ehrapy.readthedocs.io/en/latest/contributing.html',
              },
            ]
          },
          {
            href: 'https://discourse.scverse.org',
            label: 'Discussion',
            position: 'right',
          },
          {
            href: 'https://github.com/theislab/ehrapy',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Lukas Heumos, Theislab`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
