import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { Form } from '../../index';
import markdown from './form.md';

const story = () => {

  const label = boolean('Show label', true);
  const button = boolean('Show button', true);
  const inputs = number('Number of inputs', 3);
  const height = text('Input height', undefined);

  return (
    <div>
      <Form label={label} button={button} inputs={parseInt(inputs, 10)} inputHeight={height} />
    </div>
  );
};

storiesOf('Templates|Form', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
