import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { Paragraph } from '../../index';
import markdown from './paragraph.md';

const story = () => {

  const header = boolean('Show header', true);
  const lines = number('Number of lines', 3);

  return (
    <Paragraph header={header} lines={lines} />
  );
};

storiesOf('Templates|Paragraph', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
