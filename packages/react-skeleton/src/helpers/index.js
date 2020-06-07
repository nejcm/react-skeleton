export const measure2Css = (value) => {
  return value ? (typeof value === 'string' ? value : `${value}px`) : undefined;
};

export const extractStyles = ({
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  style,
  ...rest
}) => {
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
