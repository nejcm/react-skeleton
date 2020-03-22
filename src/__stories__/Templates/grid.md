# Grid

<p>
  Skeleton grid.
</p>

## Usage

```jsx

import React from 'react';
import {Grid, Card} from '@nejcm/react-skeleton';

const YourComponent = () => {
  return <Grid cols={3}>
    <Card image />
  </Grid>;
};

export default YourComponent;

```

### Children as callback function

```jsx

import React from 'react';
import {Grid, Card} from '@nejcm/react-skeleton';

// Show title only in second column
const YourComponent = () => {
  return <Grid cols={3}>
    {(index) => (
      <Card image title={(index === 1)} />
    )}
  </Grid>;
};

export default YourComponent;

```
<br/>

## Prop types

<table style="width:100%">
  <thead>
    <tr>
      <th>property</th>
      <th>propType</th>
      <th>required</th>
      <th>default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>cols</td>
      <td>number</td>
      <td>false</td>
      <td>3</td>
      <td>Number of columns.</td>
    </tr>
    <tr>
      <td>skeletonProps</td>
      <td>object</td>
      <td>false</td>
      <td></td>
      <td>Skeletop element props. Check skeleton docs for more info.</td>
    </tr>
    <tr>
      <td>children</td>
      <td>ReactNode | Function(index)</td>
      <td>false</td>
      <td></td>
      <td>Element to repeat inside grid columns.</td>
    </tr>
  </tbody>
</table>