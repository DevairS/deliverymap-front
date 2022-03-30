import styled from 'styled-components';
import { pxToRem } from '~/utils';

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.text};
`;
