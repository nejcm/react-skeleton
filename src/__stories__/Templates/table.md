# Table

<p>
  Skeleton table
</p>

## Usage

```jsx

import React from 'react';
import {Table} from '@nejcm/react-skeleton';

const YourComponent = () => {
  return <Table rows={3} cols={5} />;
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
      <td>head</td>
      <td>boolean</td>
      <td>false</td>
      <td>true</td>
      <td>Show table head.</td>
    </tr>
    <tr>
      <td>rows</td>
      <td>number</td>
      <td>false</td>
      <td>3</td>
      <td>Number of table rows.</td>
    </tr>
    <tr>
      <td>cols</td>
      <td>number | array(string)</td>
      <td>false</td>
      <td>4</td>
      <td>Number of columns or array of column names.</td>
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
      <td>Show children below the table.</td>
    </tr>
  </tbody>
</table>