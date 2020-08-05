import React from 'react';
import {SkeletonProps} from '../../Skeleton';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card width
   */
  width?: string | number;
  /**
   * Card max width
   */
  maxWidth?: string | number;
  /**
   * Display image loader "false"
   */
  image?: boolean;
  /**
   * Display header loader "false"
   */
  header?: boolean;
  /**
   * Display paragraph loader "false"
   */
  paragraph?: boolean;
  /**
   * Skeleton component props
   */
  skeletonProps?: SkeletonProps;
}
export declare const Card: React.SFC<CardProps>;
