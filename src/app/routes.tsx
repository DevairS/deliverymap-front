import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, DeliveryList } from '~/pages';
import { Path } from './routePaths';

const RoutesContainer: FC = () => {
  return (
    <Routes>
      <Route path={Path.HOME} element={<Home />} />
      <Route path={Path.DELIVERYLIST} element={<DeliveryList />} />
    </Routes>
  );
};

export { Path };

export default RoutesContainer;
