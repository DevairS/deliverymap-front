import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Home from './Home';

const HomeContainer: FC = () => {
  return <Home />;
};

export default observer(HomeContainer);
