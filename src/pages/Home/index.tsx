import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '~/hooks';
import Home from './Home';

const HomeContainer: FC = () => {
  const { delivery, app } = useStores();

  const handleSubmitForm = async (values: Delivery.Data): Promise<void> => {
    await delivery.createDelivery(values);
  };

  return <Home handleSubmitForm={handleSubmitForm} />;
};

export default observer(HomeContainer);
