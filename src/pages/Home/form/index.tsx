import { FC } from 'react';
import { Formik } from 'formik';
import {
  ButtonSubmit,
  ContainerTwoInput,
  Form,
  InputDate,
  InputEndLatitude,
  InputEndLongitude,
  InputName,
  InputStartLatitude,
  InputStartLongitude,
  Title,
} from './styles';
import { validationSchema } from './validation';

type Props = {
  handleSubmitForm: (values: Delivery.Data) => void;
};

const FormContainer: FC<Props> = ({ handleSubmitForm }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        date: '',
        startLatitude: '',
        startLongitude: '',
        endLatitude: '',
        endLongitude: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const deliveryData = {
          name: values.name,
          date: values.date,
          startingPoint: {
            latitude: parseInt(values.startLatitude, 10),
            longitude: parseInt(values.startLongitude, 10),
          },
          deliveryPoint: {
            latitude: parseInt(values.endLatitude, 10),
            longitude: parseInt(values.endLongitude, 10),
          },
        };
        handleSubmitForm(deliveryData);
      }}
    >
      {({ errors, touched, handleChange, handleSubmit, values }) => (
        <Form onSubmit={handleSubmit}>
          <Title>Formulario de cadastro de nova entrega</Title>
          <InputName
            onChange={handleChange}
            value={values.name}
            errorMessage={touched.name ? errors.name : null}
          />
          <InputDate
            onChange={handleChange}
            value={values.date}
            errorMessage={touched.date ? errors.date : null}
          />
          <ContainerTwoInput>
            <InputStartLongitude
              onChange={handleChange}
              value={values.startLongitude}
              errorMessage={
                touched.startLongitude ? errors.startLongitude : null
              }
            />
            <InputStartLatitude
              onChange={handleChange}
              value={values.startLatitude}
              errorMessage={touched.startLatitude ? errors.startLatitude : null}
            />
          </ContainerTwoInput>
          <ContainerTwoInput>
            <InputEndLongitude
              onChange={handleChange}
              value={values.endLongitude}
              errorMessage={touched.endLongitude ? errors.endLongitude : null}
            />
            <InputEndLatitude
              onChange={handleChange}
              value={values.endLatitude}
              errorMessage={touched.endLatitude ? errors.endLatitude : null}
            />
          </ContainerTwoInput>
          <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
