import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Form from './form';
import { Container } from './styles';

type Props = {
  handleSubmitForm: (values: Delivery.Data) => void;
  location: google.maps.LatLngLiteral;
};

const Home: FC<Props> = ({ handleSubmitForm, location }) => {
  return (
    <Container>
      <Form handleSubmitForm={handleSubmitForm} location={location} />
    </Container>
  );
};

export default observer(Home);
