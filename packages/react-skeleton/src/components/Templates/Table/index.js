import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from '../../Skeleton';
import {Wrapper} from './styles';

export const Table = ({
  head = true,
  rows = 3,
  cols = 4,
  widths = ['100%', '100%', '75%', '35%', '50%', '85%'],
  skeletonProps,
  className,
  children,
  ...rest
}) => {
  const isArray = Array.isArray(cols);
  const rowIter = [...Array(rows)];
  const colIter = isArray ? cols : [...Array(cols)];
  const max = widths.length;

  const td = colIter.map((__, j) => (
    <td key={`c-${j}`} style={isArray ? undefined : {width: widths[j % max]}}>
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

Table.propTypes = {
  /**
   * Show table head (th) "true"
   */
  head: PropTypes.bool,
  /**
   * Number of rows "3"
   */
  rows: PropTypes.number,
  /**
   * Number or columns or array of custom elements "4"
   */
  cols: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Array of rotating column widths. "['100%', '100%', '75%', '35%', '50%', '85%']"
   */
  widths: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ),
  /**
   * Skeleton component props
   */
  skeletonProps: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};
/*Table.defaultProps = {
  head: true,
  rows: 3,
  cols: 4,
  widths: ['100%', '100%', '75%', '35%', '50%', '85%'],
};*/
