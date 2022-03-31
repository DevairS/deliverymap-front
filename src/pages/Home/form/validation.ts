import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  date: yup.string().required('Data é obrigatório'),
  startLatitude: yup.number().required('Latitude é obrigatório'),
  startLongitude: yup.number().required('Longitude é obrigatório'),
  endLatitude: yup.number().required('Latitude é obrigatório'),
  endLongitude: yup.number().required('Longitude é obrigatório'),
});
