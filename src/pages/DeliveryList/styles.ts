import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.text};
`;
