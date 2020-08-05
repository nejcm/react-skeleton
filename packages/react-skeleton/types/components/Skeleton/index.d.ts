import React from 'react';
import Circle from './components/Circle';
import Rectangle from './components/Rectangle';
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
declare const Skeleton: React.SFC<SkeletonProps> & {
  Rectangle: typeof Rectangle;
  Circle: typeof Circle;
};
export default Skeleton;
