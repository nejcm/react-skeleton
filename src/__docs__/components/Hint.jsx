import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

const getBgColor = ({ type }) => {
  switch (type) {
    case 'info':
      return 'rgba(56, 132, 255, .09)';
    case 'success':
      return 'rgba(32, 199, 119, .09)';
    case 'warning':
      return 'rgba(255, 204, 0, .09)';
    case 'danger':
      return 'rgba(243, 32, 19, .09)';
    default:
      return 'rgba(0, 0, 0, .04)';
  }
};

const getColor = ({ type }) => {
  switch (type) {
    case 'info':
      return 'rgb(56, 132, 255)';
    case 'success':
      return 'rgb(32, 199, 119)';
    case 'warning':
      return 'rgb(255, 204, 0)';
    case 'danger':
      return 'rgb(243, 32, 19)';
    default:
      return 'rgb(0, 0, 0, .3)';
  }
};

const getIcon = ({ type }) => {
  switch (type) {
    case 'info':
      return 'i';
    case 'success':
      return '✓';
    case 'warning':
      return '!';
    case 'danger':
      return '✖';
    default:
      return 'i';
  }
};

const Container = styled.div`
  position: relative;
  margin: 2rem 0;
  padding: 1rem 1rem 1rem 4rem;
  background-color: ${getBgColor};
  border: 0;
  border-style: solid;
  border-color: ${getColor};
  border-left-width: 3px;
  border-radius: 3px;

  &::before {
    content: '${getIcon}';
    position: absolute;
    top: 1.1rem;
    left: 1.1rem;
    width: 22px;
    height: 22px;
    border: solid 2px ${getColor};
    border-radius: 50%;
    font-size: 1rem;
    font-weight: bold;
    line-height: 22px;
    color: ${getColor};
    text-align: center;
  }
`;

const Hint = ({ type, children }) => (
  <Container type={type}>{children}</Container>
);
Hint.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Hint;
