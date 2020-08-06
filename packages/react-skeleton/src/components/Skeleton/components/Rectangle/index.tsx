import React from 'react';
import {extractStyles, Styles} from '../../../../helpers';
import {RectangleWrapper} from './styles';

export interface RectangleProps extends React.HTMLAttributes<HTMLElement> {
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

const Rectangle: React.FC<RectangleProps> = ({className, ...rest}) => (
  <RectangleWrapper
    className={`s-rect s-loader ${className || ''}`}
    {...extractStyles(rest as Styles)}
  />
);

export default Rectangle;
