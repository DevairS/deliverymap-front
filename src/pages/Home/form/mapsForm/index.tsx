import { memo, FC, useCallback, useMemo, useState } from 'react';
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from '@react-google-maps/api';
import { Button, Container, ContainerAddress, Input } from './styles';

type Props = {
  pointA: google.maps.LatLngLiteral;
  pointB: google.maps.LatLngLiteral;
  setPointA: (point: google.maps.LatLngLiteral) => void;
  setPointB: (point: google.maps.LatLngLiteral) => void;
  location: google.maps.LatLngLiteral;
};

const MapsForm: FC<Props> = ({
  pointA,
  pointB,
  setPointA,
  setPointB,
  location,
}) => {
  const [map, setMap] = useState<google.maps.Map>();
  const [searchBoxA, setSearchBoxA] = useState<google.maps.places.SearchBox>();
  const [searchBoxB, setSearchBoxB] = useState<google.maps.places.SearchBox>();

  const [origin, setOrigin] = useState<google.maps.LatLngLiteral | null>(null);
  const [destination, setDestination] =
    useState<google.maps.LatLngLiteral | null>(null);

  const [response, setResponse] =
    useState<google.maps.DistanceMatrixResponse | null>(null);

  const onMapLoad = (map: google.maps.Map): void => {
    setMap(map);
  };

  const onLoadA = (ref: google.maps.places.SearchBox): void => {
    setSearchBoxA(ref);
  };

  const onLoadB = (ref: google.maps.places.SearchBox): void => {
    setSearchBoxB(ref);
  };

  const onPlacesChangedA = (): void => {
    const places = searchBoxA?.getPlaces();
    const place = places?.[0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setPointA(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    map?.panTo(location);
  };

  const onPlacesChangedB = (): void => {
    const places = searchBoxB?.getPlaces();
    const place = places?.[0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setPointB(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    map?.panTo(location);
  };

  const traceRoute = (): void => {
    if (pointA && pointB) {
      setOrigin(pointA);
      setDestination(pointB);
    }
  };

  const directionsServiceOptions =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useMemo<google.maps.DirectionsRequest>(() => {
      return {
        origin,
        destination,
        travelMode: 'DRIVING',
      };
    }, [origin, destination]);

  const directionsCallback = useCallback((res) => {
    if (res !== null && res.status === 'OK') {
      setResponse(res);
    }
  }, []);

  const directionsRendererOptions = useMemo<any>(() => {
    return {
      directions: response,
    };
  }, [response]);

  return (
    <Container>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        libraries={['places']}
      >
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '600px',
          }}
          center={location}
          zoom={14}
          onLoad={onMapLoad}
        >
          <ContainerAddress>
            <StandaloneSearchBox
              onLoad={onLoadA}
              onPlacesChanged={onPlacesChangedA}
            >
              <Input
                className="addressField"
                placeholder="Digite o endereço inicial"
              />
            </StandaloneSearchBox>
            <StandaloneSearchBox
              onLoad={onLoadB}
              onPlacesChanged={onPlacesChangedB}
            >
              <Input
                className="addressField"
                placeholder="Digite o endereço final"
              />
            </StandaloneSearchBox>
            <Button onClick={traceRoute}>Traçar rota</Button>
          </ContainerAddress>

          {!response && pointA && <Marker position={pointA} />}
          {!response && pointB && <Marker position={pointB} />}

          {origin && destination && (
            <DirectionsService
              options={directionsServiceOptions}
              callback={directionsCallback}
            />
          )}

          {response && directionsRendererOptions && (
            <DirectionsRenderer options={directionsRendererOptions} />
          )}
        </GoogleMap>
      </LoadScript>
    </Container>
  );
};

export default memo(MapsForm);
