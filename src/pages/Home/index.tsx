import { FC, useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '~/hooks';
import Home from './Home';

const HomeContainer: FC = () => {
  const [location, setLocation] = useState<google.maps.LatLngLiteral>({
    lat: -27.590824,
    lng: -48.551262,
  });
  const { delivery, app } = useStores();

  const handleSubmitForm = async (values: Delivery.Data): Promise<void> => {
    await delivery.createDelivery(values);
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
