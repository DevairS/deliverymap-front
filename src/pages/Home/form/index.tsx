import { FC } from 'react';
import { Formik } from 'formik';
import { Form, InputName } from './styles';
import { validationSchema } from './validation';

const FormContainer: FC = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          date: '',
          latitude: '',
          longitude: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, handleChange, handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <InputName
              onChange={handleChange}
              value={values.name}
              errorMessage={touched.name ? errors.name : null}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormContainer;
