import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from '../../Skeleton';
import {Paragraph} from '../Paragraph';
import {Wrapper} from './styles';

const Comment = ({
  avatarSize = 45,
  avatarCircle = true,
  lines = 3,
  skeletonProps,
  className,
  children,
  ...rest
}) => (
  <Skeleton {...skeletonProps}>
    <Wrapper className={`s-comment ${className || ''}`} {...rest}>
      <div>
        {avatarCircle ? (
          <Skeleton.Circle
            className="s-avatar"
            width={avatarSize}
            height={avatarSize}
          />
        ) : (
          <Skeleton.Rectangle
            className="s-avatar"
            width={avatarSize}
            height={avatarSize}
          />
        )}
      </div>
      <div>
        <Paragraph header={false} lines={lines} />
        {children}
      </div>
    </Wrapper>
  </Skeleton>
);

Comment.propTypes = {
  /**
   * Avatar size "45"
   */
  avatarSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Display avatar image as a circle "true"
   */
  avatarCircle: PropTypes.bool,
  /**
   * Number of comment lines "3"
   */
  lines: PropTypes.number,
  /**
   * Skeleton component props
   */
  skeletonProps: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};
/*Comment.defaultProps = {
  avatarSize: 45,
  avatarCircle: true,
  lines: 3,
};*/

export {Comment};
