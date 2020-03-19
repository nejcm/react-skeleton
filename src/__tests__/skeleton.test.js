import {render} from '@testing-library/react';
import React from 'react';
import Skeleton from '../index';

test('renders skeleton', () => {
  const {getByText} = render(
    <Skeleton>
      <span>Hello</span>
    </Skeleton>,
  );
  const element = getByText(/Hello/i);
  expect(element).toBeInTheDocument();
});

test('renders skeleton with props', () => {
  const {getByTestId} = render(
    <Skeleton data-testid="target" darkTheme={true} active={false} />,
  );
  const element = getByTestId('target');
  expect(element).toHaveClass('s-inactive');
  expect(element).toHaveClass('s-dark');
});

test('renders skeleton rectengle with props', () => {
  const {getByTestId} = render(
    <Skeleton>
      <Skeleton.Rectangle
        data-testid="target"
        width={100}
        maxHeight={200}
        minHeight={'3rem'}
      />
    </Skeleton>,
  );
  const element = getByTestId('target');
  expect(element).toBeDefined();
  expect(element).toHaveStyle({
    width: '100px',
    maxHeight: '200px',
    minHeight: '3rem',
  });
});

test('renders skeleton circle with props', () => {
  const {getByTestId} = render(
    <Skeleton>
      <Skeleton.Circle data-testid="target" width={50} height={50} />
    </Skeleton>,
  );
  const element = getByTestId('target');
  expect(element).toBeDefined();
  expect(element).toHaveStyle({
    width: '50px',
    height: '50px',
  });
});
