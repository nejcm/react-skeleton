import styled from 'styled-components';

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
      height: 2rem;
    }
  }

  td {
    .s-cell {
      display: flex;
      height: 1.25rem;
    }
  }
`;
