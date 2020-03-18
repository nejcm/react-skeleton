import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import Skeleton from '../../index';
import markdown from './skeleton.md';

const story = () => {

  const active = boolean('Active', true);
  const dark = boolean('Dark theme', false);

  return (
    <div style={{padding: 15, backgroundColor: dark ? '#222' : '#fff'}}>
      <Skeleton active={active} darkTheme={dark}>
        <h3>Rectangle example</h3>
        <Skeleton.Rectangle height={30} />

        <h3>Circle example</h3>
        <Skeleton.Circle width={60} height={60} />
      </Skeleton>
    </div>
  );
};

storiesOf('Skeleton|Skeleton', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
