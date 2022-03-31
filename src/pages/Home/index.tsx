import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '~/hooks';
import Home from './Home';

const HomeContainer: FC = () => {
  const { delivery } = useStores();

  const handleSubmitForm = async (values: Delivery.Data): Promise<void> => {
    // eslint-disable-next-line no-debugger
    await delivery.createDelivery(values);
  };
  return <Home handleSubmitForm={handleSubmitForm} />;
};

export default observer(HomeContainer);
