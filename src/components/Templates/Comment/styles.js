import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: table;
  width: 100%;

  > * {
    display: table-cell;

    &:first-child {
      padding-right: 1.5rem;
      vertical-align: top;
    }

    &:last-child {
      width: 100%;
      vertical-align: middle;
    }
  }
`;
