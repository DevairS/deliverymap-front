import styled, { css } from 'styled-components';
import { mqDesktop, pxToRem } from '~/utils';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ContainerMenu = styled.div`
  flex-direction: column;
  width: 100%;
`;

export const ContainerPage = styled.div`
  margin-top: ${pxToRem(24)};
  margin-right: ${pxToRem(24)};
  ${mqDesktop(css`
    margin: ${pxToRem(24)};
  `)};
`;
