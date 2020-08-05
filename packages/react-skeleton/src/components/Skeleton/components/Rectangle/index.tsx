import React from 'react';
import {extractStyles, Styles} from '../../../../helpers';
import {RectangleWrapper} from './styles';

export interface RectangleProps extends Styles {
  as?: string;
}

const Rectangle: React.SFC<RectangleProps> = ({className, ...rest}) => (
  <RectangleWrapper
    className={`s-rect s-loader ${className || ''}`}
    {...extractStyles(rest)}
  />
);

export default Rectangle;
