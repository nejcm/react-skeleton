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
        {cols
          ? [...Array(cols)].map((_, i) => (
              <div key={i}>
                {typeof children === 'function'
                  ? children({index: i})
                  : children}
              </div>
            ))
          : null}
      </Wrapper>
    </Skeleton>
  );
};

Grid.propTypes = {
  cols: PropTypes.number,
  className: PropTypes.string,
  skeletonProps: PropTypes.object,
  children: PropTypes.oneOf([PropTypes.node, PropTypes.func]),
};
