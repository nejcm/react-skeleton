import React from 'react';
import {SkeletonProps} from '../../Skeleton';
export interface ParagraphProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Show header
   */
  header?: boolean;
  /**
   * Number of pragraph lines "3"
   */
  lines?: number;
  /**
   * Array of rotating line widths. "['100%', '100%', '75%', '35%', '50%', '85%']"
   */
  widths?: (string | number)[];
  /**
   * Skeleton component props
   */
  skeletonProps?: SkeletonProps;
}
export declare const Paragraph: React.SFC<ParagraphProps>;
