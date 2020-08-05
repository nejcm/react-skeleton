import React from 'react';
import Skeleton, {SkeletonProps} from '../../Skeleton';
import {Paragraph} from '../Paragraph';
import {Wrapper} from './styles';

export interface CommentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Avatar size "45"
   */
  avatarSize?: number;
  /**
   * Display avatar image as a circle "true"
   */
  avatarCircle?: boolean;
  /**
   * Number of comment lines "3"
   */
  lines?: number;
  /**
   * Skeleton component props
   */
  skeletonProps?: SkeletonProps;
}

const Comment: React.SFC<CommentProps> = ({
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

export {Comment};
