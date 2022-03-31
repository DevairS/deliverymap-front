import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Form from './form';
import { Container, Text } from './styles';

const Home: FC = () => {
  return (
    <Container>
      <Form />
    </Container>
  );
};

export default observer(Home);
