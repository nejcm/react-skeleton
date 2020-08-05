import React from 'react';
import {extractStyles, Styles} from '../../../../helpers';
import {CircleWrapper} from './styles';

export interface CircleProps extends Styles {
  as?: string;
}

const Circle: React.SFC<CircleProps> = ({className, ...rest}) => (
  <CircleWrapper
    className={`s-circ s-loader ${className || ''}`}
    {...extractStyles(rest)}
  />
);

export default Circle;
