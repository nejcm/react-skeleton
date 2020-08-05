import React from 'react';
import {SkeletonProps} from '../../Skeleton';
export interface FormProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of inputs "3"
   */
  inputs?: number;
  /**
   * Input height
   */
  inputHeight?: number;
  /**
   * Show button loader "true"
   */
  button?: boolean;
  /**
   * Show input label loader "true"
   */
  label?: boolean;
  /**
   * Array of rotating input widths. "['100%']"
   */
  widths?: (string | number)[];
  /**
   * Skeleton component props
   */
  skeletonProps?: SkeletonProps;
}
export declare const Form: React.SFC<FormProps>;
