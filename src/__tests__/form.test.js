import {render} from '@testing-library/react';
import React from 'react';
import Skeleton, {Form} from '../index';

test('renders form with props', () => {
  const className = 'custom-element';
  const amount = 4;
  const {container, getByTestId} = render(
    <Form
      className={className}
      data-testid="target"
      inputs={amount}
      inputHeight={50}
      button={false}
      label={true}
      skeletonProps={{active: false}}
    />,
  );
  const element = getByTestId('target');
  expect(element).toHaveClass(className);
  expect(container.querySelector('.s-label')).not.toBeNull();
  expect(container.querySelector('.s-button')).toBeNull();
  expect(container.querySelector('.s-input')).toHaveStyle({
    height: '50px',
  });
  expect(container.querySelectorAll('.s-input')).toHaveLength(amount);
});

test('renders form with children', () => {
  const {getByTestId} = render(
    <Form>
      <Skeleton.Rectangle data-testid="target" height={25} />
    </Form>,
  );
  const element = getByTestId('target');
  expect(element).toBeDefined();
});
