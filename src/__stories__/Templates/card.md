# Card

<p>
  Skeleton card.
</p>

## Usage

```jsx

import React from 'react';
import {Card} from '@nejcm/react-skeleton';

const YourComponent = () => {
  return <Card image title />;
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
      <td>width</td>
      <td>string | number</td>
      <td>false</td>
      <td>100%</td>
      <td>Set the width of the card.</td>
    </tr>
    <tr>
      <td>maxWidth</td>
      <td>string | number</td>
      <td>false</td>
      <td></td>
      <td>Set the max width of the card.</td>
    </tr>
    <tr>
      <td>image</td>
      <td>boolean</td>
      <td>false</td>
      <td>false</td>
      <td>Show the image.</td>
    </tr>
    <tr>
      <td>title</td>
      <td>boolean</td>
      <td>false</td>
      <td>false</td>
      <td>Show the title.</td>
    </tr>
    <tr>
      <td>paragraph</td>
      <td>boolean</td>
      <td>false</td>
      <td>false</td>
      <td>Show the paragraph.</td>
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
      <td>Show children inside the card.</td>
    </tr>
  </tbody>
</table>