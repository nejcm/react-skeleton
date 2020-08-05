import React from 'react';
import {SkeletonProps} from '../../Skeleton';
export declare type RenderPropFunction = (i?: number) => React.ReactNode;
export interface GridProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Number of repeated columns "3"
   */
  cols?: number;
  /**
   * Skeleton component props
   */
  skeletonProps?: SkeletonProps;
  /**
   * Children to repeat or callback function with index argument
   */
  children: RenderPropFunction | React.ReactNode;
}
export declare const Grid: React.SFC<GridProps>;
