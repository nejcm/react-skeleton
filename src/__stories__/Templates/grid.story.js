import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import Skeleton, { Card, Grid } from '../../index';
import markdown from './grid.md';

const story = () => {

  const cols = number('Columns', 3);

  return (
    <>
      <div style={{padding: '1rem'}}>
        <Grid cols={cols}>
          <Card title paragraph />
        </Grid>
      </div>
      <div style={{padding: '1rem'}}>
        <Grid cols={5}>
          <Skeleton.Rectangle height={14} />
        </Grid>
      </div>
    </>
  );
};

storiesOf('Templates|Grid', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
