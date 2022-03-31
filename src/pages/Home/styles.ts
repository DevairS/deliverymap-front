import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  justify-content: center;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.text};
`;
