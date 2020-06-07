const pkgName = 'react-skeleton';

export default {
  lang: 'en',
  ignore: [
    '**/*.md',
    'README.md',
    'CHANGELOG.md',
    'CODE_OF_CONDUCT.md',
    'CONTRIBUTING.md',
    'LICENSE.md',
  ],
  title: pkgName,
  base: `/${pkgName}/`,
  description: `Documentation on ${pkgName} loader`,
  menu: [
    'Introduction',
    'Getting started',
    'Installation',
    {
      name: 'API',
      menu: ['Skeleton'],
    },
  ],
  favicon: './public/assets/favicon.png',
  htmlContext: {
    favicon: './assets/favicon.ico',
  },
  themeConfig: {
    footer: {
      navigation: true
    },
    logo: {
      src: "/public/assets/logo.svg",
      width: 50
    },
    menu: {
      headings: {
        rightSide: true,
        scrollspy: true,
        depth: 3
      }
    },
  },
  docgenConfig: {
    searchPatterns: [
      "../**/*.{ts,tsx,js,jsx,mjs}",
      "../react-skeleton/src/components/**/*.{ts,tsx,js,jsx,mjs}",
      "!**/node_modules",
      "!../**/node_modules",
      "!**/doczrc.js",
      "!../**/doczrc.js",
    ]
  },
};
