import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Customers } from '~/pages';
import { Path } from './routePaths';

const RoutesContainer: FC = () => {
  return (
    <Routes>
      <Route path={Path.HOME} element={<Home />} />
      <Route path={Path.CUSTOMERS} element={<Customers />} />
    </Routes>
  );
};

export { Path };

export default RoutesContainer;
