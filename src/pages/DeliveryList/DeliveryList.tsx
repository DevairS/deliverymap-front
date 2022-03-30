import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Text } from './styles';

type Props = {
  deliveryList: Delivery.Data[];
};

const DeliveryList: FC<Props> = ({ deliveryList }) => {
  console.log(deliveryList);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <td>cliente</td>
            <td>data</td>
          </tr>
        </thead>
        <tbody>
          {deliveryList.map((delivery) => (
            <tr key={delivery.id}>
              <td>{delivery.name}</td>
              <td>{delivery.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default observer(DeliveryList);
