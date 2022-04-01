import { FC } from 'react';

import { Container, Text } from './styles';

const Skeleton: FC = () => {
  return (
    <Container>
      <Text>Carregando...</Text>
    </Container>
  );
};

export default Skeleton;
