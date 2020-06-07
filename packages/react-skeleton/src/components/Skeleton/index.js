import PropTypes from 'prop-types';
import React from 'react';
import Circle from './components/Circle';
import Rectangle from './components/Rectangle';
import {SkeletonWrapper} from './styles';

const Skeleton = ({active = true, darkTheme, className, ...rest}) => (
  <SkeletonWrapper
    className={`skeleton ${className || ''}${
      active ? ' s-active' : ' s-inactive'
    }${darkTheme ? ' s-dark' : ''}`}
    {...rest}
  />
);

Skeleton.propTypes = {
  /**
   * Display skeleton for a dark theme.
   */
  darkTheme: PropTypes.bool,
  /**
   * Show animation effect. "true"
   */
  active: PropTypes.bool,
  className: PropTypes.string,
};
/*Skeleton.defaultProps = {
  active: true,
};*/

Skeleton.Rectangle = Rectangle;
Skeleton.Circle = Circle;
export default Skeleton;
