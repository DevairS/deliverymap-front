import { keyframes } from 'styled-components';

export const slideInDesktop = keyframes`
  0% {
      transform: translateX(-340px);
    }
    100% {
      transform: translateX(0px);
    }
`;

export const slideOutDesktop = keyframes`
  0% {
      transform: translateX(340px);
    }
    100% {
      transform: translateX(0px);
    }
`;

export const slideInTablet = keyframes`
  0% {
      transform: translateX(-280px);
    }
    100% {
      transform: translateX(0px);
    }
`;

export const slideOutTablet = keyframes`
  0% {
      transform: translateX(280px);
    }
    100% {
      transform: translateX(0px);
    }
`;
