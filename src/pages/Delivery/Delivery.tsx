import { FC } from 'react';
import Maps from './maps';
import { Container } from './styles';

type Props = {
  deliveryData: Delivery.Data;
};
const Delivery: FC<Props> = ({ deliveryData }) => {
  return (
    <Container>
      {deliveryData ? <Maps deliveryData={deliveryData} /> : null}
    </Container>
  );
};

export default Delivery;
