import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { Paragraph } from '../../components/Templates/Paragraph';
import markdown from './paragraph.md';

const story = () => {

  const title = boolean('Show title', true);
  const lines = number('Number of lines', 3);

  return (
    <Paragraph title={title} lines={lines} />
  );
};

storiesOf('Templates|Paragraph', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
