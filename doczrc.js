const name = 'react-skeleton';

export default {
  lang: 'en',
  //src: './src/__docs__',
  files: '**/*.mdx',
  ignore: [
    '**/*.md',
    'readme.md',
    'changelog.md',
    'code_of_conduct.md',
    'contributing.md',
    'license.md',
  ],
  title: name,
  base: `/${name}/`,
  description: 'Documentation on react-skeleton loader',
  favicon: './assets/favicon.png',
  menu: [
    'Introduction',
    'Getting started',
    'Installation',
    {
      name: 'API',
      menu: ['Skeleton'],
    },
  ],
  htmlContext: {
    favicon: './assets/favicon.ico',
  },
  themeConfig: {
    logo: {
      src: './assets/logo.svg',
    },
    styles: {
      body: {
        fontFamily: 'Roboto, Helvetica, sans-serif',
        fontSize: 16,
        lineHeight: 1.6,
      },
      h1: {
        fontFamily: 'inherit',
      },
      h2: {
        fontFamily: 'inherit',
      },
      h3: {
        fontFamily: 'inherit',
      },
    },
  },
};
