import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from '../../Skeleton';
import {Wrapper} from './styles';

export const Paragraph = ({
  title,
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
        {title && <Skeleton.Rectangle className="s-title" width="50%" />}
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

Paragraph.propTypes = {
  title: PropTypes.bool,
  lines: PropTypes.number,
  widths: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ),
  skeletonProps: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};
