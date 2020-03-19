import {render} from '@testing-library/react';
import React from 'react';
import Skeleton, {Table} from '../index';

test('renders table with props', () => {
  const className = 'custom-element';
  const rows = 2;
  const cols = 5;

  const {container, getByTestId} = render(
    <Table
      className={className}
      data-testid="target"
      head={false}
      rows={rows}
      cols={cols}
      skeletonProps={{darkTheme: true}}
    />,
  );
  const element = getByTestId('target');
  expect(element).toHaveClass(className);
  expect(container.querySelectorAll('.s-cell')).toHaveLength(rows * cols);
});

test('renders table with head nodes', () => {
  const cols = ['Col 1', 'Col 2', <span data-testid="target">Col 3</span>];

  const {getByTestId, getByText} = render(
    <Table head={true} cols={cols} skeletonProps={{darkTheme: true}} />,
  );
  expect(getByTestId('target')).toBeDefined();
  expect(getByText('Col 2')).toBeDefined();
});

test('renders table with children', () => {
  const {getByTestId} = render(
    <Table>
      <tr>
        <td colSpan={3}>
          <Skeleton.Rectangle as="span" data-testid="target" height={25} />
        </td>
      </tr>
    </Table>,
  );
  const element = getByTestId('target');
  expect(element).toBeDefined();
});
