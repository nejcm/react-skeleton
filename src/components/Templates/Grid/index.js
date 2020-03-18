import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from '../../Skeleton';
import './styles.scss';

export const Grid = ({cols = 3, skeletonProps, children, ...rest}) => {
  return (
    <Skeleton {...skeletonProps}>
      <div className="deck" {...rest}>
        {cols
          ? [...Array(cols)].map((_, i) => (
              <div key={i}>
                {typeof children === 'function'
                  ? children({index: i})
                  : children}
              </div>
            ))
          : null}
      </div>
    </Skeleton>
  );
};

Grid.propTypes = {
  cols: PropTypes.number,
  skeletonProps: PropTypes.object,
  children: PropTypes.oneOf([PropTypes.node, PropTypes.func]),
};
