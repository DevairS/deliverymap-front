import { FC } from 'react';
import { Link, TableContainer, TBody, Td, THead, Tr } from './styles';

type Props = {
  deliveryList: Delivery.Data[];
};

const Table: FC<Props> = ({ deliveryList }) => {
  return (
    <TableContainer>
      <THead>
        <Tr>
          <Td>Cliente</Td>
          <Td>Data</Td>
          <Td>Ações</Td>
        </Tr>
      </THead>
      <TBody>
        {deliveryList.map((delivery) => (
          <Tr key={delivery.id}>
            <Td>{delivery.name}</Td>
            <Td>{delivery.date}</Td>
            <Td>
              <Link to={`/delivery/${delivery.id}`}>Mapa</Link>
            </Td>
          </Tr>
        ))}
      </TBody>
    </TableContainer>
  );
};

export default Table;
