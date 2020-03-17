import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import { Comment } from '../../components/Templates/Comment';
import markdown from './comment.md';

const story = () => {

  const size = number('Avatar size', 45);
  const circle = boolean('Avatar circle', true);
  const lines = number('Comment lines', 3);


  return (
      <Comment avatarSize={size} avatarCircle={circle} lines={lines} />
  );
};

storiesOf('Templates|Comment', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
