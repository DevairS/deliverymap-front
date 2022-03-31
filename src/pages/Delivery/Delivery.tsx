import { FC } from 'react';
import { Container } from './styles';

type Props = {
  deliveryData: Delivery.Data;
};
const Delivery: FC<Props> = ({ deliveryData }) => {
  return <Container>{deliveryData?.name}</Container>;
};

export default Delivery;
