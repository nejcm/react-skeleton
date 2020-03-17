import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { Table } from '../../components/Templates/Table';
import markdown from './table.md';

const story = () => {

  const rows = number('Rows', 3);
  const cols = number('Cols', 4);
  const head = boolean('Head', true);

  return (
    <div>
      <Table head={head} rows={parseInt(rows, 10)} cols={parseInt(cols, 10)} />
      <br /><br />
      <Table rows={6} cols={['#Id', 'Title', 'Description', 'Status', 'Action']} />
    </div>
  );
};

storiesOf('Templates|Table', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
