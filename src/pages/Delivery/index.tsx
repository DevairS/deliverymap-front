import { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStores } from '~/hooks';
import Delivery from './Delivery';

const DeliveryContainer: FC = () => {
  const { id } = useParams();
  const { delivery } = useStores();
  const [deliveryData, setDeliveryData] = useState<Delivery.Data>(null);

  const loadDelivery = useCallback(
    async (id: string): Promise<void> => {
      const data = await delivery.getDeliveryById(id);
      setDeliveryData(data);
      console.log('carregado', data);
    },
    [delivery],
  );

  useEffect(() => {
    loadDelivery(id);
  }, [id, loadDelivery]);

  return <Delivery deliveryData={deliveryData} />;
};

export default DeliveryContainer;
