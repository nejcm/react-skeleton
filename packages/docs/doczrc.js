const pkgName = 'react-skeleton';

export default {
  typescript: true,
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
  description: `Documentation for ${pkgName} loader`,
  menu: [
    'Introduction',
    'Getting started',
    'Installation',
    'Skeleton',
    {
      name: 'Templates',
    },
  ],
  groups: {
    '': [],
    'API': ['Skeleton', 'Templates']
  },
  favicon: './public/assets/favicon.png',
  htmlContext: {
    favicon: './public/assets/favicon.ico',
  },
  themeConfig: {
    search: true,
    header: {
      icons: 'minimal',
    },
    footer: {
      navigation: true
    },
    logo: {
      src: "/public/assets/logo.svg",
      width: 50
    },
    menu: {
      search: false,
      headings: {
        rightSide: true,
        scrollspy: true,
        depth: 3
      }
    },
  },
  docgenConfig: {
    searchPatterns: [
      "../**/*.{js,jsx,ts,tsx,mjs}",
      "../react-skeleton/src/components/**/*.{js,jsx,ts,tsx,mjs}",
      "!**/node_modules",
      "!../**/node_modules",
      "!**/doczrc.js",
    ]
  }
};
