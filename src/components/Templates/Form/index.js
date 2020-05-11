import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import {measure2Css} from '../../../helpers';
import Skeleton from '../../Skeleton';
import {Wrapper} from './styles';

export const Form = ({
  inputs = 3,
  inputHeight,
  button = true,
  label = true,
  widths = ['100%'],
  className,
  children,
  skeletonProps,
  ...rest
}) => {
  const max = widths.length || 0;
  const style = inputHeight ? {height: measure2Css(inputHeight)} : undefined;
  return (
    <Skeleton {...skeletonProps}>
      <Wrapper className={`s-form ${className || ''}`} {...rest}>
        {[...Array(inputs)].map((_, i) => (
          <Fragment key={i}>
            {label ? <Skeleton.Rectangle className="s-label" /> : null}
            <Skeleton.Rectangle
              key={i}
              className="s-input"
              width={widths[i % max] || '100%'}
              style={style}
            />
          </Fragment>
        ))}
        {button ? (
          <Skeleton.Rectangle className="s-button" style={style} />
        ) : null}
        {children}
      </Wrapper>
    </Skeleton>
  );
};

Form.propTypes = {
  /**
   * Show input label loader "true"
   */
  label: PropTypes.bool,
  /**
   * Show button loader "true"
   */
  button: PropTypes.bool,
  /**
   * Number of inputs "3"
   */
  inputs: PropTypes.number,
  /**
   * Input height
   */
  inputHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Array of rotating input widths. "['100%']"
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
/*Form.defaultProps = {
  inputs: 3,
  button: true,
  label: true,
  widths: ['100%'],
};*/
