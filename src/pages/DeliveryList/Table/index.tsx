import { FC } from 'react';
import {
  Link,
  TableContainer,
  TBody,
  Td,
  THead,
  Tr,
  TrHead,
  FontAwesomeIcon,
} from './styles';

type Props = {
  deliveryList: Delivery.Data[];
};

const Table: FC<Props> = ({ deliveryList }) => {
  return (
    <TableContainer>
      <THead>
        <TrHead>
          <Td>Cliente</Td>
          <Td>Data</Td>
          <Td>Mapa de entrega</Td>
        </TrHead>
      </THead>
      <TBody>
        {deliveryList.map((delivery) => (
          <Tr key={delivery.id}>
            <Td>{delivery.name}</Td>
            <Td>{delivery.date}</Td>
            <Td>
              <Link to={`/delivery/${delivery.id}`}>
                <FontAwesomeIcon />
              </Link>
            </Td>
          </Tr>
        ))}
      </TBody>
    </TableContainer>
  );
};

export default Table;
