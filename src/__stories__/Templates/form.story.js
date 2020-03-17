import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { Form } from '../../components/Templates/Form';
import markdown from './form.md';

const story = () => {

  const label = boolean('Show label', true);
  const button = boolean('Show button', true);
  const inputs = number('Number of inputs', 3);

  return (
    <div>
      <Form label={label} button={button} inputs={inputs} />
    </div>
  );
};

storiesOf('Templates|Form', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
