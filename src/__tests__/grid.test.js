import {render} from '@testing-library/react';
import React from 'react';
import Skeleton, {Grid} from '../index';

describe('Grid', () => {
  test('renders grid with props', () => {
    const className = 'custom-element';
    const {getByTestId} = render(
      <Grid
        className={className}
        data-testid="target"
        skeletonProps={{darkTheme: false}}
      />,
    );
    const element = getByTestId('target');
    expect(element).toHaveClass(className);
  });

  test('renders grid with children', () => {
    const amount = 4;
    const className = 'custom-element';
    const {getByTestId} = render(
      <Grid cols={amount} data-testid="target">
        <Skeleton.Rectangle height={10} className={className} />
      </Grid>,
    );
    const element = getByTestId('target');
    expect(element.children).toHaveLength(amount);
  });

  test('renders grid without children', () => {
    const amount = 0;
    const {getByTestId} = render(
      <Grid cols={amount} data-testid="target">
        <Skeleton.Rectangle height={10} />
      </Grid>,
    );
    const element = getByTestId('target');
    expect(element.children).toHaveLength(amount);
  });

  test('renders grid with render props children', () => {
    const amount = 6;
    const className = 'custom-element';
    const {getByTestId} = render(
      <Grid cols={amount} data-testid="target">
        {(index) => <Skeleton.Rectangle className={className} key={index} />}
      </Grid>,
    );
    const element = getByTestId('target');
    expect(element.children).toHaveLength(amount);
  });
});
