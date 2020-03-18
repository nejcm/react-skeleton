import PropTypes from 'prop-types';
import React from 'react';
import {measure2Css} from '../../../helpers';
import Skeleton from '../../Skeleton';
import {Paragraph} from '../Paragraph';
import './styles.scss';

export const Card = ({
  width,
  maxWidth,
  image,
  title,
  paragraph,
  skeletonProps,
  children,
  style,
  ...rest
}) => {
  const internalStyle = {
    width: measure2Css(width),
    maxWidth: measure2Css(maxWidth),
    ...style,
  };
  return (
    <Skeleton {...skeletonProps}>
      <div className="card" style={internalStyle} {...rest}>
        {image ? <Skeleton.Rectangle className="image" height={200} /> : null}
        {title || paragraph ? (
          <Paragraph
            title={title}
            lines={paragraph ? 3 : 0}
            skeletonProps={skeletonProps}
          />
        ) : null}
        {children}
      </div>
    </Skeleton>
  );
};

Card.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.bool,
  title: PropTypes.bool,
  paragraph: PropTypes.bool,
  skeletonProps: PropTypes.object,
  children: PropTypes.node,
  style: PropTypes.object,
};
