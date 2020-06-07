module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    [
      'transform-rename-import',
      {
        original: '^styled-components',
        replacement: '@emotion/styled',
      },
    ],
    '@babel/plugin-transform-runtime',
    'no-side-effect-class-properties',
    [
      'babel-plugin-transform-react-remove-prop-types',
      {
        mode: 'unsafe-wrap'
      }
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    'babel-plugin-minify-dead-code-elimination'
  ]
}
