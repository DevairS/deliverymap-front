import { FC } from 'react';
import { Container, IconButtonBars, IconButtonTheme } from './styles';

type Props = {
  setTheme: () => void;
  handleOpenSideMenu: () => void;
};

const Navbar: FC<Props> = ({ setTheme, handleOpenSideMenu }) => {
  return (
    <Container>
      <IconButtonTheme onClick={setTheme} />
      <IconButtonBars onClick={handleOpenSideMenu} />
    </Container>
  );
};

export default Navbar;
