import React from 'react';
import Skeleton, {SkeletonProps} from '../../Skeleton';
import {Wrapper} from './styles';

export type RenderPropFunction = (i?: number) => React.ReactNode;

const isRenderPropFunction = (value: unknown): value is RenderPropFunction =>
  typeof value === 'function';

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

export const Grid: React.FC<GridProps> = ({
  cols = 3,
  skeletonProps,
  className,
  children,
  ...rest
}) => {
  return (
    <Skeleton {...skeletonProps}>
      <Wrapper className={`s-grid ${className || ''}`} {...rest}>
        {cols > 0
          ? [...Array(cols)].map((_, i) => (
              <div key={i}>
                {isRenderPropFunction(children) ? children(i) : children}
              </div>
            ))
          : null}
      </Wrapper>
    </Skeleton>
  );
};

Grid.displayName = 'Grid';
