import React from 'react';
import {extractStyles, Styles} from '../../../../helpers';
import {CircleWrapper} from './styles';

export interface CircleProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Element width
   */
  width?: string | number;
  /**
   * Element max width
   */
  maxWidth?: string | number;
  /**
   * Element min width
   */
  minWidth?: string | number;
  /**
   * Element height
   */
  height?: string | number;
  /**
   * Element max height
   */
  maxHeight?: string | number;
  /**
   * Element min height
   */
  minHeight?: string | number;
  /**
   * Specify element type "div"
   */
  as?: string;
}

const Circle: React.FC<CircleProps> = ({className, ...rest}) => (
  <CircleWrapper
    className={`s-circ s-loader ${className || ''}`}
    {...extractStyles(rest as Styles)}
  />
);

export default Circle;
