import React from 'react';
import Circle from './components/Circle';
import Rectangle from './components/Rectangle';
import {SkeletonWrapper} from './styles';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Display skeleton for a dark theme.
   */
  active?: boolean;
  /**
   * Show animation effect. "true"
   */
  darkTheme?: boolean;
}

const Skeleton: React.SFC<SkeletonProps> & {
  Rectangle: typeof Rectangle;
  Circle: typeof Circle;
} = ({active = true, darkTheme, className, ...rest}) => (
  <SkeletonWrapper
    className={`skeleton ${className || ''}${
      active ? ' s-active' : ' s-inactive'
    }${darkTheme ? ' s-dark' : ''}`}
    {...rest}
  />
);

Skeleton.displayName = 'Skeleton';
Skeleton.Rectangle = Rectangle;
Skeleton.Circle = Circle;
export default Skeleton;
