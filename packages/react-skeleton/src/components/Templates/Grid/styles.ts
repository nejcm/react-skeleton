import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;
  overflow: hidden;

  > * {
    flex: 1 1 auto;
    padding: 1rem;
  }
`;
