import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

const getBgColor = ({theme}) => {
  return theme.colors.background;
};

const Link = styled.a`
  margin: 2rem 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: ${getBgColor};
  border-radius: 3px;
  box-shadow: rgba(116, 129, 141, 0.1) 0px 3px 8px 0px;
`;

const PageRef = ({to, name}) => {
  return (
    <Link href={to} alt={name}>
      <span>{name}</span>
      <span>{to}</span>
    </Link>
  );
};
PageRef.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string,
};

export default PageRef;
