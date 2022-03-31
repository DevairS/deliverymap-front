import styled from 'styled-components';
import { Input } from '~/components';
import { radius } from '~/theme';
import { pxToRem } from '~/utils';

const { mediumRadius } = radius;

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.surface};
  padding: ${pxToRem(20)} ${pxToRem(10)};
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.text};
`;

export const ContainerTwoInput = styled.div`
  width: 100%;
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

export const InputStartLongitude = styled(Input).attrs({
  type: 'number',
  id: 'startLongitude',
  name: 'startLongitude',
  label: 'Longitude de origem',
  placeholder: 'Longitude',
})`
  margin-left: 0;
  margin-right: ${pxToRem(10)};
`;

export const InputStartLatitude = styled(Input).attrs({
  type: 'number',
  id: 'startLatitude',
  name: 'startLatitude',
  label: 'latitude de origem',
  placeholder: 'Latitude',
})`
  margin-left: ${pxToRem(10)};
  margin-right: 0;
`;

export const InputEndLongitude = styled(Input).attrs({
  type: 'number',
  id: 'endLongitude',
  name: 'endLongitude',
  label: 'Longitude de entrega',
  placeholder: 'Longitude',
})`
  margin-left: 0;
  margin-right: ${pxToRem(10)};
`;

export const InputEndLatitude = styled(Input).attrs({
  type: 'number',
  id: 'endLatitude',
  name: 'endLatitude',
  label: 'latitude de entrega',
  placeholder: 'Latitude',
})`
  margin-left: ${pxToRem(10)};
  margin-right: 0;
`;

export const ButtonSubmit = styled.button`
  border: none;
  width: ${pxToRem(240)};
  padding: ${pxToRem(12)};
  margin-top: ${pxToRem(20)};
  background-color: ${({ theme }) => theme.primary};
  border-radius: ${mediumRadius};
  color: ${({ theme }) => theme.text};
`;
