import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { Card } from '../../index';
import markdown from './card.md';

const story = () => {

  const width = text('Width', '100%');
  const image = boolean('Show image', true);
  const header = boolean('Show header', true);
  const paragraph = boolean('Show paragraph', true);

  return (
    <Card width={width} image={image} header={header} paragraph={paragraph} />
  );
};

storiesOf('Templates|Card', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
