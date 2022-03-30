import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Customers from './Customers';

const CustomersContainer: FC = () => {
  return <Customers />;
};

export default observer(CustomersContainer);
