import styled, { css } from 'styled-components';
import { radius } from '~/theme';
import { mqDesktop, pxToRem } from '~/utils';

const { mediumRadius } = radius;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  ${mqDesktop(css`
    margin-top: ${pxToRem(8)};
  `)};
`;

export const ContainerAddress = styled.div`
  display: flex;
  flex-direction: column;
  width: ${pxToRem(240)};
  padding: ${pxToRem(12)};
  justify-content: center;
  border-radius: ${mediumRadius};
  font-size: ${pxToRem(14)};
  position: absolute;
  left: 50%;
  margin-left: ${pxToRem(-120)};
  margin-top: ${pxToRem(12)};
`;

export const Input = styled.input`
  box-sizing: border-box;
  border: 1px solid transparent;
  width: 100%;
  height: 32px;
  margin-bottom: 8px;
  padding: 0 12px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  outline: none;
  text-overflow: ellipses;
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  border: none;
  padding: ${pxToRem(4)};
  background-color: ${({ theme }) => theme.primary};
  border-radius: ${mediumRadius};
  color: ${({ theme }) => theme.text};
`;
