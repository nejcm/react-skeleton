import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from '../../Skeleton';
import {Wrapper} from './styles';

export const Paragraph = ({
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

Paragraph.propTypes = {
  /**
   * Show header
   */
  header: PropTypes.bool,
  /**
   * Number of pragraph lines "3"
   */
  lines: PropTypes.number,
  /**
   * Array of rotating line widths. "['100%', '100%', '75%', '35%', '50%', '85%']"
   */
  widths: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ),
  /**
   * Skeleton component props
   */
  skeletonProps: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};
/*Paragraph.defaultProps = {
  widths: ['100%', '100%', '75%', '35%', '50%', '85%'],
  lines: 3,
};*/
