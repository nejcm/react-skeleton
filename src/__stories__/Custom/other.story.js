import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { module } from 'react';
import Skeleton, { Card, Comment, Form, Grid, Paragraph } from '../../index';
import './custom-styles.css';
import markdown from './other.md';


const story = () => {

  return (
    <>
      <h2>
        Check notes for more info.
      </h2>

      <h3>1. Custom skeleton shapes</h3>
      <Skeleton>
        <Skeleton.Rectangle width={250} height={150} style={{marginBottom: 8}}>Image examples</Skeleton.Rectangle>
        <Skeleton.Rectangle width={175} height="1.5rem">Title</Skeleton.Rectangle>
      </Skeleton>

      <br />
      <h3>2. Custom card</h3>
      <Card maxWidth={300}>
        <Skeleton.Rectangle width={175} height="1.5rem" style={{marginBottom: 8}}>Title on top</Skeleton.Rectangle>
        <Skeleton.Rectangle height={200}>Image</Skeleton.Rectangle>
      </Card>

      <br />
      <h3>3. Custom card with comments</h3>
      <Card maxWidth={500}>
        <Comment />
        <hr style={{margin: '1rem 0', border: 0, borderTop: 'solid 1px #eee' }}/>
        <Comment />
        <hr style={{margin: '1rem 0', border: 0, borderTop: 'solid 1px #eee' }}/>
        <Comment lines={1} />
      </Card>

      <br />
      <h3>4. Grid with custom elements</h3>
      <div style={{padding: 15}}>
        <Grid cols={4}>
          {(index) => (<Paragraph header={index === 1 || index === 2} lines={5} />)}
        </Grid>
      </div>

      <br />
      <h3>5. Custom styles</h3>
      <div>
        <Form className="custom-form" />
      </div>

    </>
  );
};

storiesOf('Custom|Other', module)
  .addDecorator(withKnobs)
  .add('Usage', story, { notes: {markdown} });
