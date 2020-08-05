import React, {Fragment} from 'react';
import {measure2Css} from '../../../helpers';
import Skeleton, {SkeletonProps} from '../../Skeleton';
import {Wrapper} from './styles';

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

export const Form: React.SFC<FormProps> = ({
  inputs = 3,
  inputHeight,
  button = true,
  label = true,
  widths = ['100%'],
  skeletonProps,
  className,
  children,
  ...rest
}) => {
  const max = widths.length || 0;
  const style = inputHeight ? {height: measure2Css(inputHeight)} : undefined;
  return (
    <Skeleton {...skeletonProps}>
      <Wrapper className={`s-form ${className || ''}`} {...rest}>
        {[...Array(inputs)].map((_, i) => (
          <Fragment key={i}>
            {label ? <Skeleton.Rectangle className="s-label" /> : null}
            <Skeleton.Rectangle
              key={i}
              className="s-input"
              width={widths[i % max] || '100%'}
              style={style}
            />
          </Fragment>
        ))}
        {button ? (
          <Skeleton.Rectangle className="s-button" style={style} />
        ) : null}
        {children}
      </Wrapper>
    </Skeleton>
  );
};
