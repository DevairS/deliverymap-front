import { FC, useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '~/hooks';
import DeliveryList from './DeliveryList';

const DeliveryListContainer: FC = () => {
  const { delivery } = useStores();
  const [deliveryList, setDeliveryList] = useState<Delivery.Data[]>([]);

  const loadDeliveryList = useCallback(async (): Promise<void> => {
    try {
      await delivery.getDeliveryList();
      setDeliveryList(delivery.deliveryList);
    } catch (err) {
      console.log(err);
    }
  }, [delivery]);

  useEffect(() => {
    loadDeliveryList();
  }, [loadDeliveryList]);

  return <DeliveryList deliveryList={deliveryList} />;
};

export default observer(DeliveryListContainer);
