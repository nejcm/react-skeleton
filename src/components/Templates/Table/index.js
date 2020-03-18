import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from '../../Skeleton';
import './styles.scss';

const widths = ['45px', '175px', '100px', '100px', '75px'];

export const Table = ({
  head = true,
  rows = 3,
  cols = 4,
  skeletonProps,
  children,
  ...rest
}) => {
  const isArray = Array.isArray(cols);
  const rowIter = [...Array(rows)];
  const colIter = isArray ? cols : [...Array(cols)];
  const max = widths.length;

  const td = colIter.map((__, j) => (
    <td key={`c-${j}`} style={isArray ? undefined : {width: widths[j % max]}}>
      <Skeleton.Rectangle className="cell" />
    </td>
  ));

  return (
    <Skeleton {...skeletonProps}>
      <table {...rest}>
        {head ? (
          <thead>
            <tr>
              {colIter.map((val, i) => (
                <th key={i} align="left">
                  <Skeleton.Rectangle className="cell">
                    <span>{val}</span>
                  </Skeleton.Rectangle>
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
      </table>
    </Skeleton>
  );
};

Table.propTypes = {
  head: PropTypes.bool,
  rows: PropTypes.number,
  cols: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  skeletonProps: PropTypes.object,
  children: PropTypes.node,
};
