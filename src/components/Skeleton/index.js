import PropTypes from 'prop-types';
import React from 'react';
import {measure2Css} from '../../helpers';
import './styles.scss';

const setStyles = ({width, maxWidth, height, maxHeight, style}) => {
  return {
    width: measure2Css(width),
    maxWidth: measure2Css(maxWidth),
    height: measure2Css(height),
    maxHeight: measure2Css(maxHeight),
    ...style,
  };
};

const Skeleton = ({active = true, children, darkTheme, className, ...rest}) => {
  return (
    <div
      className={`${className || ''} skeleton${
        active ? ' active' : ' inactive'
      }${darkTheme ? ' dark' : ''}`}
      {...rest}
    >
      {children}
    </div>
  );
};

const Rectangle = ({
  width,
  maxWidth,
  height,
  maxHeight,
  children,
  style,
  className,
  ...rest
}) => {
  const internalStyle = setStyles({
    width,
    maxWidth,
    height,
    maxHeight,
    style,
  });

  return (
    <div
      className={`rect loader ${className || ''}`}
      style={internalStyle}
      {...rest}
    >
      {children}
    </div>
  );
};

const Circle = ({
  width,
  maxWidth,
  height,
  maxHeight,
  children,
  style,
  className,
  ...rest
}) => {
  const internalStyle = setStyles({
    width,
    maxWidth,
    height,
    maxHeight,
    style,
  });
  return (
    <div
      className={`circ loader ${className || ''}`}
      style={internalStyle}
      {...rest}
    >
      {children}
    </div>
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
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};

Circle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Skeleton;
