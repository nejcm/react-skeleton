import {render} from '@testing-library/react';
import React from 'react';
import Skeleton, {Card} from '../index';

describe('Card', () => {
  test('renders card with props', () => {
    const className = 'custom-element';
    const {container, getByTestId} = render(
      <Card
        className={className}
        data-testid="target"
        width="50%"
        maxWidth={300}
        image={false}
        title={true}
        paragraph={true}
        skeletonProps={{active: false}}
      />,
    );
    const element = getByTestId('target');
    expect(element).toHaveStyle({
      width: '50%',
      maxWidth: '300px',
    });
    expect(element).toHaveClass(className);
    expect(container.querySelector('.s-image')).toBeNull();
    expect(container.querySelector('.s-title')).not.toBeNull();
    expect(container.querySelector('.s-line')).not.toBeNull();
  });

  test('renders card with props', () => {
    const {container} = render(
      <Card
        width="50%"
        maxWidth={250}
        image={true}
        title={false}
        paragraph={false}
        skeletonProps={{active: false}}
      />,
    );
    expect(container.querySelector('.s-image')).not.toBeNull();
    expect(container.querySelector('.s-title')).toBeNull();
    expect(container.querySelector('.s-line')).toBeNull();
  });

  test('renders card with children', () => {
    const {getByTestId} = render(
      <Card>
        <Skeleton.Rectangle data-testid="target" height={25} />
      </Card>,
    );
    const element = getByTestId('target');
    expect(element).toBeDefined();
  });
});
