import React from 'react';
import Skeleton, {SkeletonProps} from '../../Skeleton';
import {Wrapper} from './styles';

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

export const Paragraph: React.SFC<ParagraphProps> = ({
  header,
  lines = 3,
  widths = ['100%', '100%', '75%', '35%', '50%', '85%'],
  skeletonProps,
  className,
  children,
  ...rest
}) => {
  const max = widths.length || 0;
  return (
    <Skeleton {...skeletonProps}>
      <Wrapper className={`s-paragraph ${className || ''}`} {...rest}>
        {header && <Skeleton.Rectangle className="s-header" width="50%" />}
        {lines > 0
          ? [...Array(lines)].map((_, i) => (
              <Skeleton.Rectangle
                key={i}
                className="s-line"
                width={widths[i % max] || '100%'}
              />
            ))
          : null}
        {children}
      </Wrapper>
    </Skeleton>
  );
};
