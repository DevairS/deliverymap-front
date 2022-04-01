import styled, { css } from 'styled-components';
import { Input } from '~/components';
import { radius } from '~/theme';
import { mqTablet, pxToRem } from '~/utils';

const { mediumRadius } = radius;

export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.surface};
  padding: ${pxToRem(20)} ${pxToRem(10)};

  ${mqTablet(css`
    width: 100%;
  `)};
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.text};
`;

export const ContainerTwoInput = styled.div`
  display: flex;
  width: 100%;

  ${mqTablet(css`
    flex-direction: column;
  `)};
`;

export const InputName = styled(Input).attrs({
  id: 'name',
  name: 'name',
  type: 'text',
  label: 'Nome',
  placeholder: 'Nome',
})``;

export const InputDate = styled(Input).attrs({
  id: 'date',
  type: 'date',
  name: 'date',
  placeholder: 'Data',
  label: 'Data da entrega',
})``;

export const ButtonSubmit = styled.button`
  border: none;
  width: ${pxToRem(240)};
  padding: ${pxToRem(12)};
  margin-top: ${pxToRem(20)};
  background-color: ${({ theme }) => theme.primary};
  border-radius: ${mediumRadius};
  color: ${({ theme }) => theme.text};
`;
