import { Form as _Form } from 'formik';
import styled from 'styled-components';
import { Input } from '~/components';

export const Container = styled.div``;

export const Form = styled(_Form)``;

export const InputName = styled(Input).attrs({
  id: 'name',
  name: 'name',
  label: 'Nome',
  placeholder: 'Nome',
})``;

// export const InputDate = styled(Input).attrs({
//   date: 'date',
// })``;

// export const InputLongitude = styled(Input).attrs({
//   longitude: 'longitude',
// })``;

// export const InputLatitude = styled(Input).attrs({
//   latitude: 'latitude',
// })``;
