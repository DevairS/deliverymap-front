import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Container } from './styles';
import Table from './Table';

type Props = {
  deliveryList: Delivery.Data[];
};

const DeliveryList: FC<Props> = ({ deliveryList }) => {
  return (
    <Container>
      <Table deliveryList={deliveryList} />
    </Container>
  );
};

export default observer(DeliveryList);
