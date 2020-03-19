import styled from '@emotion/styled';

export const Wrapper = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.8rem;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  }

  th {
    .s-cell {
      display: flex;
      align-items: center;
      height: 2rem;

      > span {
        padding: 0 0.5rem;
      }
    }
  }

  td {
    .s-cell {
      display: flex;
      height: 1.25rem;
    }
  }
`;
