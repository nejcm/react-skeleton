import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from '../../Skeleton';
import { Paragraph } from '../Paragraph';
import './styles.scss';

export const Comment = ({
  avatarSize = 45,
  avatarCircle = true,
  lines = 3,
  skeletonProps,
  children,
  ...rest
}) => {
  return (
    <Skeleton {...skeletonProps}>
      <div className="comment" {...rest}>
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
      </div>
    </Skeleton>
  );
};

Comment.propTypes = {
  avatarSize: PropTypes.number,
  avatarCircle: PropTypes.bool,
  lines: PropTypes.number,
  skeletonProps: PropTypes.object,
  children: PropTypes.node,
};
