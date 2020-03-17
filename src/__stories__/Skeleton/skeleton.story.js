import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import Skeleton from '../../components/Skeleton';
import markdown from './skeleton.md';

const story = () => {
  return (
    <Skeleton>
      <h3>Rectangle example</h3>
      <Skeleton.Rectangle height={20} />

      <h3>Circle example</h3>
      <Skeleton.Circle width={40} height={40} />
    </Skeleton>
  );
};

storiesOf('Skeleton|Skeleton', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
