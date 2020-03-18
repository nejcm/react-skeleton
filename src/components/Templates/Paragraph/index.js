import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from '../../Skeleton';
import './styles.scss';

export const Paragraph = ({
  title,
  lines = 3,
  widths = ['100%', '100%', '75%', '35%', '50%', '85%'],
  skeletonProps,
  children,
  ...rest
}) => {
  const max = widths.length || 0;
  return (
    <Skeleton {...skeletonProps}>
      <div className="paragraph" {...rest}>
        {title && <Skeleton.Rectangle className="title" width="50%" />}
        {lines
          ? [...Array(lines)].map((_, i) => (
              <Skeleton.Rectangle
                key={i}
                className="line"
                width={widths[i % max] || '100%'}
              />
            ))
          : null}
        {children}
      </div>
    </Skeleton>
  );
};

Paragraph.propTypes = {
  title: PropTypes.bool,
  lines: PropTypes.number,
  widths: PropTypes.arrayOf(
    PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  ),
  skeletonProps: PropTypes.object,
  children: PropTypes.node,
};
