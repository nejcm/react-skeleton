import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import Skeleton, { Card, Comment, Grid, Paragraph } from '../../index';
import markdown from './other.md';
const story = () => {

  return (
    <>
      <h2>
        Check notes.
      </h2>

      <h3>1.</h3>
      <Skeleton>
        <Skeleton.Rectangle width={250} height={150} style={{marginBottom: 8}}>Image examples</Skeleton.Rectangle>
        <Skeleton.Rectangle width={175} height="1.5rem">Title</Skeleton.Rectangle>
      </Skeleton>

      <br />
      <h3>2.</h3>
      <Card maxWidth={300}>
        <Skeleton.Rectangle width={175} height="1.5rem" style={{marginBottom: 8}}>Title on top</Skeleton.Rectangle>
        <Skeleton.Rectangle height={200}>Image</Skeleton.Rectangle>
      </Card>

      <br />
      <h3>3.</h3>
      <Card maxWidth={500}>
        <Comment />
        <hr style={{margin: '1rem 0', border: 0, borderTop: 'solid 1px #eee' }}/>
        <Comment />
        <hr style={{margin: '1rem 0', border: 0, borderTop: 'solid 1px #eee' }}/>
        <Comment lines={1} />
      </Card>

      <br />
      <h3>4.</h3>
      <div stlye={{padding: 15}}>
        <Grid cols={4}>
          {({index}) => (<Paragraph title={index === 1 || index === 2} lines={5} />)}
        </Grid>
      </div>

    </>
  );
};

storiesOf('Templates|Other', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });