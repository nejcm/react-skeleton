import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: table;
  width: 100%;

  > * {
    display: table-cell;

    &:first-of-type {
      padding-right: 1.5rem;
      vertical-align: top;
    }

    &:last-of-type {
      width: 100%;
      vertical-align: middle;
    }
  }
`;
