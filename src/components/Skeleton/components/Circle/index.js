import PropTypes from 'prop-types';
import React from 'react';
import {extractStyles} from '../../../../helpers';
import {CircleWrapper} from './styles';

const Circle = ({className, ...rest}) => (
  <CircleWrapper
    className={`s-circ s-loader ${className || ''}`}
    {...extractStyles(rest)}
  />
);

Circle.propTypes = {
  /**
   * Circle Width
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Max width
   */
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Min width
   */
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Height
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Max height
   */
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Min height
   */
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default Circle;
