import React from 'react';
import {SkeletonProps} from '../../Skeleton';
export interface CommentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Avatar size "45"
   */
  avatarSize?: number;
  /**
   * Display avatar image as a circle "true"
   */
  avatarCircle?: boolean;
  /**
   * Number of comment lines "3"
   */
  lines?: number;
  /**
   * Skeleton component props
   */
  skeletonProps?: SkeletonProps;
}
declare const Comment: React.SFC<CommentProps>;
export {Comment};
