import PropTypes from 'prop-types';
import React from 'react';
import {measure2Css} from '../../helpers';
import {SkeletonChild, SkeletonWrapper} from './styles';

const extractPropStyles = ({
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  style,
  ...rest
}) => {
  return {
    style: {
      width: measure2Css(width),
      maxWidth: measure2Css(maxWidth),
      minWidth: measure2Css(minWidth),
      height: measure2Css(height),
      maxHeight: measure2Css(maxHeight),
      minHeight: measure2Css(minHeight),
      ...style,
    },
    props: rest,
  };
};

const Skeleton = ({active = true, children, darkTheme, className, ...rest}) => {
  return (
    <SkeletonWrapper
      className={`skeleton ${className || ''}${
        active ? ' s-active' : ' s-inactive'
      }${darkTheme ? ' s-dark' : ''}`}
      {...rest}
    >
      {children}
    </SkeletonWrapper>
  );
};

const Rectangle = ({children, className, ...rest}) => {
  const {style, props} = extractPropStyles(rest);
  return (
    <SkeletonChild
      className={`s-rect s-loader ${className || ''}`}
      style={style}
      {...props}
    >
      {children}
    </SkeletonChild>
  );
};

const Circle = ({children, className, ...rest}) => {
  const {style, props} = extractPropStyles(rest);
  return (
    <SkeletonChild
      className={`s-circ s-loader ${className || ''}`}
      style={style}
      {...props}
    >
      {children}
    </SkeletonChild>
  );
};

Skeleton.Rectangle = Rectangle;
Skeleton.Circle = Circle;

Skeleton.propTypes = {
  darkTheme: PropTypes.bool,
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Rectangle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};

Circle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Skeleton;
