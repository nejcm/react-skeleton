export const measure2Css = (
  value: string | number | undefined | null,
): string | undefined => {
  return value ? (typeof value === 'string' ? value : `${value}px`) : undefined;
};

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

export const extractStyles = ({
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  style,
  ...rest
}: Styles): React.HTMLAttributes<HTMLElement> => {
  return {
    style: {
      width: measure2Css(width),
      maxWidth: measure2Css(maxWidth),
      minWidth: measure2Css(minWidth),
      height: measure2Css(height),
      maxHeight: measure2Css(maxHeight),
      minHeight: measure2Css(minHeight),
      ...style,
    },
    ...rest,
  };
};
