import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import { Skeleton } from '~/components';
import { Container, Title } from './styles';
import './maps.css';

type Props = {
  deliveryData: Delivery.Data;
};

const Maps: FC<Props> = ({ deliveryData }) => {
  const [loading, setLoading] = useState(true);
  const [origin, setOrigin] = useState<google.maps.LatLngLiteral>(null);
  const [destination, setDestination] =
    useState<google.maps.LatLngLiteral>(null);

  const [routes, setRoutes] =
    useState<google.maps.DistanceMatrixResponse | null>(null);

  const directionsServiceOptions =
    useMemo<google.maps.DirectionsRequest>((): any => {
      return {
        origin,
        destination,
        travelMode: 'DRIVING',
      };
    }, [destination, origin]);

  const directionsCallback = useCallback((res) => {
    if (res !== null && res.status === 'OK') {
      setRoutes(res);
    }
  }, []);

  const directionsRendererOptions =
    useMemo<google.maps.DirectionsRendererOptions>((): any => {
      return {
        directions: routes,
      };
    }, [routes]);

  const setPositions = useCallback((): void => {
    setOrigin({
      lat: parseFloat(deliveryData.startingPoint.latitude),
      lng: parseFloat(deliveryData.startingPoint.longitude),
    });
    setDestination({
      lat: parseFloat(deliveryData.deliveryPoint.latitude),
      lng: parseFloat(deliveryData.deliveryPoint.longitude),
    });
    setLoading(false);
  }, [deliveryData]);

  useEffect(() => {
    setPositions();
  }, [deliveryData, setPositions]);

  return (
    <Container>
      <Title>Entrega para {deliveryData.name}</Title>
      <Title>Data para entrega {deliveryData.date}</Title>
      {loading ? (
        <Skeleton />
      ) : (
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
          libraries={['places']}
        >
          <GoogleMap
            mapContainerStyle={{
              width: '100%',
              height: '800px',
            }}
            zoom={15}
          >
            <Marker
              position={origin}
              options={{
                label: {
                  text: 'Ponto de Origem',
                  className: 'marker',
                },
              }}
            />
            <Marker
              position={destination}
              options={{
                label: {
                  text: 'Ponto de entrega',
                  className: 'marker',
                },
              }}
            />
            <DirectionsService
              options={directionsServiceOptions}
              callback={directionsCallback}
            />

            {routes && directionsRendererOptions && (
              <DirectionsRenderer options={directionsRendererOptions} />
            )}
          </GoogleMap>
        </LoadScript>
      )}
    </Container>
  );
};

export default memo(Maps);
