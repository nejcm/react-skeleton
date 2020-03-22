# Paragraph

<p>
  Skeleton paragraph.
</p>

## Usage

```jsx

import React from 'react';
import {Paragraph} from '@nejcm/react-skeleton';

const YourComponent = () => {
  return <Paragraph />;
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
      <td>title</td>
      <td>boolean</td>
      <td>false</td>
      <td>false</td>
      <td>Show the title.</td>
    </tr>
    <tr>
      <td>lines</td>
      <td>number</td>
      <td>false</td>
      <td>3</td>
      <td>Number of paragraph lines.</td>
    </tr>
    <tr>
      <td>widths</td>
      <td>array< string | number ></td>
      <td>false</td>
      <td>['100%', '100%', '75%', '35%', '50%', '85%']</td>
      <td>Lines widths loop.</td>
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
      <td>ReactNode</td>
      <td>false</td>
      <td></td>
      <td>Show children inside the paragraph.</td>
    </tr>
  </tbody>
</table>