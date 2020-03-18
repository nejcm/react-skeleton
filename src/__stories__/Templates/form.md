# Form

<p>
  Skeleton form.
</p>

## Usage

```jsx

import React from 'react';
import {Form} from '@nejcm/react-skeleton';

const YourComponent = () => {
  return <Form label widths={['100%', 150, '10rem', '100px', '50%']} />;
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
      <td>label</td>
      <td>boolean</td>
      <td>false</td>
      <td>true</td>
      <td>Show the input label.</td>
    </tr>
    <tr>
      <td>button</td>
      <td>boolean</td>
      <td>false</td>
      <td>true</td>
      <td>Show the form button at the end of form.</td>
    </tr>
    <tr>
      <td>inputs</td>
      <td>number</td>
      <td>false</td>
      <td>3</td>
      <td>Number of inputs.</td>
    </tr>
    <tr>
      <td>widths</td>
      <td>array(string | number)</td>
      <td>false</td>
      <td>['100%']</td>
      <td>Input widths loop.</td>
    </tr>
    <tr>
      <td>skeletonProps</td>
      <td>object</td>
      <td>false</td>
      <td></td>
      <td>Skeletop element props.</td>
    </tr>
    <tr>
      <td>children</td>
      <td>node</td>
      <td>false</td>
      <td></td>
      <td>Show children inside the form.</td>
    </tr>
  </tbody>
</table>