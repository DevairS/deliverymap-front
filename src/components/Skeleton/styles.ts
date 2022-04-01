import styled from 'styled-components';
import { pxToRem } from '~/utils';

export const Container = styled.div`
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.surface};
  animation: focus 2s ease-in-out both infinite;

  @keyframes focus {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.2;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Text = styled.h2`
  color: ${(props) => props.theme.text};
  font-size: ${pxToRem(32)};
`;
