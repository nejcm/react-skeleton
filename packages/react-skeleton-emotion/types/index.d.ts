import * as React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  darkTheme?: boolean;
  active?: boolean;
}

export interface ChildProps {
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
}

export interface SkeletonRectangleProps
  extends ChildProps,
    React.HTMLAttributes<HTMLDivElement> {}

export interface SkeletonCircleProps
  extends ChildProps,
    React.HTMLAttributes<HTMLDivElement> {}

export interface SkeletonSFC extends React.SFC<SkeletonProps> {
  Rectangle: React.SFC<SkeletonRectangleProps>;
  Circle: React.SFC<SkeletonCircleProps>;
}

declare const Skeleton: SkeletonSFC;
export default Skeleton;

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  maxWidth?: string | number;
  image?: boolean;
  header?: boolean;
  paragraph?: boolean;
  skeletonProps?: SkeletonProps;
}
export const Card: React.SFC<CardProps>;

export interface CommentProps extends React.HTMLAttributes<HTMLDivElement> {
  avatarSize?: number;
  avatarCircle?: boolean;
  lines?: number;
  skeletonProps?: SkeletonProps;
}
export const Comment: React.SFC<CommentProps>;

export interface FormProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: boolean;
  button?: boolean;
  inputs?: number;
  inputHeight?: string | number;
  widths?: Array<string | number>;
  skeletonProps?: SkeletonProps;
}
export const Form: React.SFC<FormProps>;

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: number;
  skeletonProps?: SkeletonProps;
}
export const Grid: React.SFC<GridProps>;

export interface ParagraphProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: boolean;
  lines?: number;
  widths?: Array<string | number>;
  skeletonProps?: SkeletonProps;
}
export const Paragraph: React.SFC<ParagraphProps>;

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  head?: boolean;
  rows?: number;
  cols?: number | Array<React.ReactNode>;
  skeletonProps?: SkeletonProps;
}
export const Table: React.SFC<TableProps>;
