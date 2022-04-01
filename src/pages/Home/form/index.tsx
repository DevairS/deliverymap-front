import { FC, useState } from 'react';
import { Formik } from 'formik';
import MapsForm from './mapsForm';
import {
  ButtonSubmit,
  ContainerTwoInput,
  Form,
  InputDate,
  InputName,
  Title,
} from './styles';
import { validationSchema } from './validation';

type Props = {
  handleSubmitForm: (values: Delivery.Data) => void;
  location: google.maps.LatLngLiteral;
};

const FormContainer: FC<Props> = ({ handleSubmitForm, location }) => {
  const [pointA, setPointA] = useState<google.maps.LatLngLiteral>();
  const [pointB, setPointB] = useState<google.maps.LatLngLiteral>();

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
        if (pointA && pointB) {
          const deliveryData = {
            name: values.name,
            date: values.date,
            startingPoint: {
              latitude: pointA.lat.toString(),
              longitude: pointA.lng.toString(),
            },
            deliveryPoint: {
              latitude: pointB.lat.toString(),
              longitude: pointB.lng.toString(),
            },
          };
          handleSubmitForm(deliveryData);
        }
      }}
    >
      {({ errors, touched, handleChange, handleSubmit, values }) => (
        <Form onSubmit={handleSubmit}>
          <Title>Formulario de cadastro de nova entrega</Title>
          <ContainerTwoInput>
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
          </ContainerTwoInput>
          <MapsForm
            pointA={pointA}
            pointB={pointB}
            setPointA={setPointA}
            setPointB={setPointB}
            location={location}
          />
          <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
