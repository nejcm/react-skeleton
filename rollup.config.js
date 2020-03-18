import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import sass from 'rollup-plugin-sass';
import { uglify } from 'rollup-plugin-uglify';
// eslint-disable-next-line import/extensions
import pkg from './package.json';


const external = (id) => !id.startsWith('.') && !id.startsWith('/');

const stylesConfig = {
  output: 'dist/bundle.css',
  processor: (css) => postcss([autoprefixer])
    .process(css)
    .then((result) => result.css)
}

const babelConfig = (
  {useESModules, targets} = {
    useESModules: true,
    targets: {browsers: 'last 2 versions'},
  },
) => ({
  comments: false,
  runtimeHelpers: true,
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    ['@babel/transform-runtime', {useESModules, regenerator: false}],
    'no-side-effect-class-properties',
    ['babel-plugin-transform-react-remove-prop-types', {mode: 'unsafe-wrap'}],
    ['babel-plugin-transform-async-to-promises', {inlineHelpers: true}],
    'babel-plugin-minify-dead-code-elimination'
  ],
  exclude: 'node_modules/**',
});

const umdConfig = ({minify} = {}) => ({
  input: pkg.source,
  external: ['react', 'react-dom', 'prop-types'],
  output: {
    name: pkg.name,
    sourcemap: true,
    file: minify ? pkg['umd:main'].replace('.js', '.min.js') : pkg['umd:main'],
    format: 'umd',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
    },
  },
  plugins: [
    sass(stylesConfig),
    resolve(),
    babel(
      babelConfig({
        targets: {browsers: ['last 2 versions', 'safari >= 7']},
      }),
    ),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        minify ? 'production' : 'development',
      ),
    }),
    commonjs({
      exclude: ['**/*.story.js'],
    }),
    minify ? uglify() : { },
    filesize(),
  ],
});

const rollupConfig = [
  // Browser-friendly UMD builds
  umdConfig(),
  umdConfig({minify: true}),

  // CommonJS
  {
    input: pkg.source,
    external,
    output: [{file: pkg.main, format: 'cjs'}],
    plugins: [
      sass(stylesConfig),
      resolve(),
      babel(babelConfig({useESModules: false})),
      filesize()
    ],
  },

  // ES module
  {
    input: pkg.source,
    external,
    output: [{file: pkg.module, format: 'esm'}],
    plugins: [
      sass(stylesConfig),
      resolve(),
      babel(babelConfig()),
      filesize()
    ],
  },
];

export default rollupConfig;
