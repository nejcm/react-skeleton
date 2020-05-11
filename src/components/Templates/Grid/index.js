import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from '../../Skeleton';
import {Wrapper} from './styles';

export const Grid = ({
  cols = 3,
  className,
  skeletonProps,
  children,
  ...rest
}) => {
  return (
    <Skeleton {...skeletonProps}>
      <Wrapper className={`s-grid ${className || ''}`} {...rest}>
        {cols > 0
          ? [...Array(cols)].map((_, i) => (
              <div key={i}>
                {typeof children === 'function' ? children(i) : children}
              </div>
            ))
          : null}
      </Wrapper>
    </Skeleton>
  );
};

Grid.propTypes = {
  /**
   * Number of repeated columns "3"
   */
  cols: PropTypes.number,
  /**
   * Skeleton component props
   */
  skeletonProps: PropTypes.object,
  /**
   * Children to repeat or callback function with index argument
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
};
/*Grid.defaultProps = {
  cols: 3,
};*/
