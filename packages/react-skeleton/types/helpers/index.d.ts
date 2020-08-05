/// <reference types="react" />
export declare const measure2Css: (
  value: string | number | undefined | null,
) => string | undefined;
export interface Styles extends React.HTMLAttributes<HTMLElement> {
  /**
   * Element width
   */
  width?: string | number;
  /**
   * Element max width
   */
  maxWidth?: string | number;
  /**
   * Element min width
   */
  minWidth?: string | number;
  /**
   * Element height
   */
  height?: string | number;
  /**
   * Element max height
   */
  maxHeight?: string | number;
  /**
   * Element min height
   */
  minHeight?: string | number;
}
export declare const extractStyles: ({
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  style,
  ...rest
}: Styles) => React.HTMLAttributes<HTMLElement>;
