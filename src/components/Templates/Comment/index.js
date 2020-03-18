import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from '../../Skeleton';
import {Paragraph} from '../Paragraph';
import {Wrapper} from './styles';

export const Comment = ({
  avatarSize = 45,
  avatarCircle = true,
  lines = 3,
  skeletonProps,
  className,
  children,
  ...rest
}) => {
  return (
    <Skeleton {...skeletonProps}>
      <Wrapper className={`s-comment ${className || ''}`} {...rest}>
        <div>
          {avatarCircle ? (
            <Skeleton.Circle width={avatarSize} height={avatarSize} />
          ) : (
            <Skeleton.Rectangle width={avatarSize} height={avatarSize} />
          )}
        </div>
        <div>
          <Paragraph title={false} lines={lines} />
          {children}
        </div>
      </Wrapper>
    </Skeleton>
  );
};

Comment.propTypes = {
  avatarSize: PropTypes.number,
  avatarCircle: PropTypes.bool,
  lines: PropTypes.number,
  className: PropTypes.string,
  skeletonProps: PropTypes.object,
  children: PropTypes.node,
};
