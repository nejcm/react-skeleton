import React from 'react';
import {measure2Css} from '../../../helpers';
import Skeleton, {SkeletonProps} from '../../Skeleton';
import {Paragraph} from '../Paragraph';
import {Wrapper} from './styles';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card width
   */
  width?: string | number;
  /**
   * Card max width
   */
  maxWidth?: string | number;
  /**
   * Display image loader "false"
   */
  image?: boolean;
  /**
   * Display header loader "false"
   */
  header?: boolean;
  /**
   * Display paragraph loader "false"
   */
  paragraph?: boolean;
  /**
   * Skeleton component props
   */
  skeletonProps?: SkeletonProps;
}

const Card: React.FC<CardProps> = ({
  width,
  maxWidth,
  image,
  header,
  paragraph,
  skeletonProps,
  className,
  children,
  style,
  ...rest
}) => (
  <Skeleton {...skeletonProps}>
    <Wrapper
      className={`s-card ${className || ''}`}
      style={{
        width: measure2Css(width),
        maxWidth: measure2Css(maxWidth),
        ...style,
      }}
      {...rest}
    >
      {image ? <Skeleton.Rectangle className="s-image" height={200} /> : null}
      {header || paragraph ? (
        <Paragraph
          header={header}
          lines={paragraph ? 3 : 0}
          skeletonProps={skeletonProps}
        />
      ) : null}
      {children}
    </Wrapper>
  </Skeleton>
);

Card.displayName = 'Card';
export {Card};
