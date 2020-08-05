import React from 'react';
import {SkeletonProps} from '../../Skeleton';
export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  /**
   * Show table head (th) "true"
   */
  head?: boolean;
  /**
   * Number of rows "3"
   */
  rows?: number;
  /**
   * Number or columns or array of custom elements "4"
   */
  cols?: number | React.ReactNode[];
  /**
   * Array of rotating column widths. "['100%', '100%', '75%', '35%', '50%', '85%']"
   */
  widths?: (string | number)[];
  /**
   * Skeleton component props
   */
  skeletonProps?: SkeletonProps;
}
export declare const Table: React.SFC<TableProps>;
