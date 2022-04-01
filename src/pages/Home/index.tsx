import { FC, useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useStores } from '~/hooks';
import Home from './Home';

const HomeContainer: FC = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState<google.maps.LatLngLiteral>({
    lat: -23.538843,
    lng: -46.63613,
  });
  const { delivery, app } = useStores();

  const handleSubmitForm = async (values: Delivery.Data): Promise<void> => {
    await delivery.createDelivery(values);
    navigate('/list');
  };

  const loadGeolocation = useCallback(async (): Promise<void> => {
    try {
      await app.setGeolocation();
      if (app.userLocation) {
        const newLocation = {
          lat: app.userLocation.coords.latitude,
          lng: app.userLocation.coords.longitude,
        };
        setLocation(newLocation);
      }
    } catch (error) {
      console.log(error);
    }
  }, [app]);

  useEffect(() => {
    loadGeolocation();
  }, [loadGeolocation]);
  return <Home handleSubmitForm={handleSubmitForm} location={location} />;
};

export default observer(HomeContainer);
