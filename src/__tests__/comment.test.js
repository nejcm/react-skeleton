import {render} from '@testing-library/react';
import React from 'react';
import Skeleton, {Comment} from '../index';

test('renders comment with props', () => {
  const className = 'custom-element';
  const {container, getByTestId} = render(
    <Comment
      className={className}
      data-testid="target"
      avatarSize={75}
      avatarCircle={false}
      lines={5}
      skeletonProps={{active: false}}
    />,
  );
  const element = getByTestId('target');
  const avatar = container.querySelector('.s-avatar');
  expect(element).toHaveClass(className);
  expect(container.querySelector('.s-inactive')).not.toBeNull();
  expect(avatar).not.toBeNull();
  expect(avatar).toHaveStyle({
    width: '75px',
    height: '75px',
  });
  expect(container.querySelectorAll('.s-line')).toHaveLength(5);
});

test('renders comment with children', () => {
  const {getByTestId} = render(
    <Comment>
      <Skeleton.Rectangle data-testid="target" height={25} />
    </Comment>,
  );
  const element = getByTestId('target');
  expect(element).toBeDefined();
});
