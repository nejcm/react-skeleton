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
  label: PropTypes.bool,
  button: PropTypes.bool,
  inputs: PropTypes.number,
  inputHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  widths: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ),
  className: PropTypes.string,
  skeletonProps: PropTypes.object,
  children: PropTypes.node,
};
