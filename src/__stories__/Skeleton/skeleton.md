# Skeleton

<p>
  React skeleton loader
</p>

## Usage

### Rectangle example:

```jsx

import React from 'react';
import Skeleton from '@nejcm/react-skeleton';

const YourComponent = () => {
  return <Skeleton>
    <Skeleton.Rectangle height={20} />
  </Skeleton>;
};

export default YourComponent;

```

### Circle example:

```jsx

import React from 'react';
import Skeleton from '@nejcm/react-skeleton';

const YourComponent = () => {
  return <Skeleton>
    <Skeleton.Circle width={40} height={40} />
  </Skeleton>;
};

export default YourComponent;

```
<br/>

## Prop types

### Skeleton:

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
      <td>active</td>
      <td>boolean</td>
      <td>false</td>
      <td>true</td>
      <td>Show animation effect.</td>
    </tr>
    <tr>
      <td>darkTheme</td>
      <td>boolean</td>
      <td>false</td>
      <td>false</td>
      <td>Show white loader.</td>
    </tr>
  </tbody>
</table>

### Skeleton.Rectangle:

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
      <td>Set the width of the rectangle.</td>
    </tr>
    <tr>
      <td>height</td>
      <td>string | number</td>
      <td>false</td>
      <td></td>
      <td>Set the height of the rectangle.</td>
    </tr>
    <tr>
      <td>maxWidth</td>
      <td>string | number</td>
      <td>false</td>
      <td></td>
      <td>Set the max width of the rectangle.</td>
    </tr>
    <tr>
      <td>maxHeight</td>
      <td>string | number</td>
      <td>false</td>
      <td></td>
      <td>Set the max height of the rectangle.</td>
    </tr>
    <tr>
      <td>minWidth</td>
      <td>string | number</td>
      <td>false</td>
      <td></td>
      <td>Set the min width of the rectangle.</td>
    </tr>
    <tr>
      <td>minHeight</td>
      <td>string | number</td>
      <td>false</td>
      <td></td>
      <td>Set the min height of the rectangle.</td>
    </tr>
  </tbody>
</table>

### Skeleton.Circle:

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
      <td>Set the width of the circle.</td>
    </tr>
    <tr>
      <td>height</td>
      <td>string | number</td>
      <td>false</td>
      <td></td>
      <td>Set the height of the circle.</td>
    </tr>
    <tr>
      <td>maxWidth</td>
      <td>string | number</td>
      <td>false</td>
      <td></td>
      <td>Set the max width of the circle.</td>
    </tr>
    <tr>
      <td>maxHeight</td>
      <td>string | number</td>
      <td>false</td>
      <td></td>
      <td>Set the max height of the circle.</td>
    </tr>
    <tr>
      <td>minWidth</td>
      <td>string | number</td>
      <td>false</td>
      <td></td>
      <td>Set the min width of the circle.</td>
    </tr>
    <tr>
      <td>minHeight</td>
      <td>string | number</td>
      <td>false</td>
      <td></td>
      <td>Set the min height of the circle.</td>
    </tr>
  </tbody>
</table>

