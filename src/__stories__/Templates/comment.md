# Comment

<p>
  Skeleton comment.
</p>

## Usage

```jsx

import React from 'react';
import {Comment} from '@nejcm/react-skeleton';

const YourComponent = () => {
  return <Comment />;
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
      <td>avatarSize</td>
      <td>number</td>
      <td>false</td>
      <td>45px</td>
      <td>Set the avatar size.</td>
    </tr>
    <tr>
      <td>avatarCircle</td>
      <td>boolean</td>
      <td>false</td>
      <td>true</td>
      <td>Show avatar as a circle.</td>
    </tr>
    <tr>
      <td>lines</td>
      <td>boolean</td>
      <td>false</td>
      <td>3</td>
      <td>Number of comment lines.</td>
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
      <td>Show children inside the comment.</td>
    </tr>
  </tbody>
</table>