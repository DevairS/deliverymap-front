import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Text } from './styles';

const Customers: FC = () => {
  return (
    <Container>
      <Text>Opa</Text>
    </Container>
  );
};

export default observer(Customers);
