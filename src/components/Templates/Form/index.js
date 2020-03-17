import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import Skeleton from '../../Skeleton';
import './styles.scss';

export const Form = ({
  inputs = 3,
  button = true,
  label = true,
  widths = ['100%'],
  children,
  skeletonProps,
  ...rest
}) => {
  const max = widths.length || 0;
  return (
    <Skeleton {...skeletonProps}>
      <div className="form" {...rest}>
        {[...Array(inputs)].map((_, i) => (
          <Fragment key={i}>
            {label ? <Skeleton.Rectangle className="label" /> : null}
            <Skeleton.Rectangle
              key={i}
              className="input"
              width={widths[i % max] || '100%'}
            />
          </Fragment>
        ))}
        {button ? <Skeleton.Rectangle className="button" /> : null}
        {children}
      </div>
    </Skeleton>
  );
};

Form.propTypes = {
  label: PropTypes.bool,
  button: PropTypes.bool,
  inputs: PropTypes.number,
  widths: PropTypes.arrayOf(
    PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  ),
  skeletonProps: PropTypes.object,
  children: PropTypes.node,
};
