# Other

<p>
  The skeleton and templates allow easy composition for building your own templates and configurations. <br />
  Check below for some exaples.
</p>

## Examples

### 1. Custom skeleton shapes

```jsx

import React from 'react';
import Skeleton from '@nejcm/react-skeleton';

const YourComponent = () => {
  return <Skeleton>
    <Skeleton.Rectangle width={250} height={150} style={{marginBottom: 8}}>Image examples</Skeleton.Rectangle>
    <Skeleton.Rectangle width={175} height="1.5rem">Title</Skeleton.Rectangle>
  </Skeleton>;
};

export default YourComponent;

```
<br/>

### 2. Custom card

```jsx

import React from 'react';
import Skeleton, {Card} from '@nejcm/react-skeleton';

const YourComponent = () => {
  return <Card width={300}>
    <Skeleton.Rectangle width={175} height="1.5rem" style={{marginBottom: 8}}>Title on top</Skeleton.Rectangle>
    <Skeleton.Rectangle height={200}>Image</Skeleton.Rectangle>
  </Card>;
};

export default YourComponent;

```
<br/>

### 3. Custom card with comments

```jsx

import React from 'react';
import Skeleton, {Card, Comment} from '@nejcm/react-skeleton';

const YourComponent = () => {
  return <Card maxWidth={500}>
    <Comment />
    <hr style={{margin: '1rem 0', border: 0, borderTop: 'solid 1px #eee' }}/>
    <Comment />
    <hr style={{margin: '1rem 0', border: 0, borderTop: 'solid 1px #eee' }}/>
    <Comment lines={1} />
  </Card>;
};

export default YourComponent;

```
<br/>

### 4. Grid with custom elements

```jsx

import React from 'react';
import Skeleton, {Grid, Paragraph} from '@nejcm/react-skeleton';

const YourComponent = () => {
  return <Grid cols={4}>
    {(index) => (<Paragraph title={index === 1 || index === 2} lines={5} />)}
  </Grid>;
};

export default YourComponent;

```
<br/>

### 5. Custom styles

```css 
/* custom-form-styles.css */
.custom-form {
  background-color: #eee;
}

.custom-form.s-form > .s-input {
  margin-bottom: 3rem;
  border: solid 1px blue;
}

```
<br/>

```jsx

import React from 'react';
import Skeleton, {Form} from '@nejcm/react-skeleton';
import 'custom-form-styles.css'

const YourComponent = () => {
  return <Form className="custom-form" />;
};

export default YourComponent;

```
<br/>
