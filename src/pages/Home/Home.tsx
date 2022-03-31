import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Form from './form';
import { Container } from './styles';

type Props = {
  handleSubmitForm: (values: Delivery.Data) => void;
};

const Home: FC<Props> = ({ handleSubmitForm }) => {
  return (
    <Container>
      <Form handleSubmitForm={handleSubmitForm} />
    </Container>
  );
};

export default observer(Home);
