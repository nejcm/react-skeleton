import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { Card, Grid } from '../../index';
import markdown from './grid.md';

const story = () => {

  const cols = number('Columns', 3);

  return (
    <div style={{padding: '1rem'}}>
      <Grid cols={cols}>
        <Card title paragraph />
      </Grid>
    </div>
  );
};

storiesOf('Templates|Grid', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
