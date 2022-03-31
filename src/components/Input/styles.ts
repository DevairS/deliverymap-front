import styled from 'styled-components';
import { radius } from '~/theme';
import { pxToRem } from '~/utils';

const { mediumRadius } = radius;

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  margin: ${pxToRem(12)} ${pxToRem(24)};
`;

export const TextInput = styled.input`
  width: 100%;
  height: ${pxToRem(45)};
  padding: 0 ${pxToRem(10)};
  border-radius: ${mediumRadius};
  border: 1px solid lightgray;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.error};
  margin: 0;
  font-size: ${pxToRem(12)};
`;

export const Label = styled.label`
  display: block;
  font-size: ${pxToRem(16)};
  font-weight: normal;
  color: ${({ theme }) => theme.text};
`;
