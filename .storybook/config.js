import {configure, setAddon} from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import './styles.css';

function importAll(req) {
  req.keys().forEach((filename) => req(filename));
}

function loadStories() {
  let req = require.context('../', true, /\.story\.js$/);
  importAll(req);
}

setAddon(JSXAddon);
configure(loadStories, module);
