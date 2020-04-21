const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const sass = require('rollup-plugin-sass');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const config = require('kcd-scripts/dist/config/rollup.config.js');

const babelPluginIndex = config.plugins.findIndex(
  (plugin) => plugin.name === 'babel',
);
const cjsPluginIndex = config.plugins.findIndex(
  (plugin) => plugin.name === 'commonjs',
);

config.plugins[babelPluginIndex] = babel({
  runtimeHelpers: true,
});
config.plugins[cjsPluginIndex] = commonjs({
  include: 'node_modules/**',
  exclude: ['**/*.story.js'],
  namedExports: {},
});
// Add sass support
config.plugins.unshift(
  sass({
    output: 'dist/bundle.css',
    processor: (css) =>
      postcss([autoprefixer])
        .process(css)
        .then((result) => result.css),
  }),
);

module.exports = config;
