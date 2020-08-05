import React from 'react';
import Skeleton, {SkeletonProps} from '../../Skeleton';
import {Wrapper} from './styles';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  /**
   * Show table head (th) "true"
   */
  head?: boolean;
  /**
   * Number of rows "3"
   */
  rows?: number;
  /**
   * Number or columns or array of custom elements "4"
   */
  cols?: number | React.ReactNode[];
  /**
   * Array of rotating column widths. "['100%', '100%', '75%', '35%', '50%', '85%']"
   */
  widths?: (string | number)[];
  /**
   * Skeleton component props
   */
  skeletonProps?: SkeletonProps;
}

export const Table: React.SFC<TableProps> = ({
  head = true,
  rows = 3,
  cols = 4,
  widths = ['100%', '100%', '75%', '35%', '50%', '85%'],
  skeletonProps,
  className,
  children,
  ...rest
}) => {
  const rowIter = Array(rows).fill(0);
  const colIter = Array.isArray(cols) ? cols : Array(cols).fill(0);
  const max = widths.length;

  const td = colIter.map((_, j) => (
    <td key={`c-${j}`} style={{width: widths[j % max]}}>
      <Skeleton.Rectangle as="span" width="100%" className="s-cell" />
    </td>
  ));

  return (
    <Skeleton {...skeletonProps}>
      <Wrapper className={`s-table ${className || ''}`} {...rest}>
        {head ? (
          <thead>
            <tr>
              {colIter.map((val, i) => (
                <th key={i} align="left">
                  {val ? (
                    val
                  ) : (
                    <Skeleton.Rectangle
                      as="span"
                      width="100%"
                      className="s-cell"
                    />
                  )}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
        <tbody>
          {rowIter.map((_, i) => (
            <tr key={i}>{td}</tr>
          ))}
          {children}
        </tbody>
      </Wrapper>
    </Skeleton>
  );
};
