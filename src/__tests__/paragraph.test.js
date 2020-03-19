import {render} from '@testing-library/react';
import React from 'react';
import Skeleton, {Paragraph} from '../index';

test('renders paragraph with props', () => {
  const className = 'custom-element';

  const {container, getByTestId} = render(
    <Paragraph
      className={className}
      data-testid="target"
      title={false}
      skeletonProps={{darkTheme: true}}
    />,
  );
  const element = getByTestId('target');
  expect(element).toHaveClass(className);
  expect(container.querySelector('.s-title')).toBeNull();
});

test('renders paragraph with different widths', () => {
  const lines = 4;
  const widths = ['5rem', 100, '50%', '200px'];

  const {container} = render(<Paragraph lines={lines} widths={widths} />);
  const foundLines = container.querySelectorAll('.s-line');
  expect(foundLines).toHaveLength(lines);
  expect(foundLines[2]).toHaveStyle({width: widths[2]});
});

test('renders paragraph with children', () => {
  const {getByTestId} = render(
    <Paragraph>
      <Skeleton.Rectangle data-testid="target" height={25} />
    </Paragraph>,
  );
  const element = getByTestId('target');
  expect(element).toBeDefined();
});