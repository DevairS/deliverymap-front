import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Navbar, SideMenu } from '~/components';
import { useStores } from '~/hooks';
import { darkTheme, GlobalStyle, lightTheme } from '~/theme';
import { Path } from './routePaths';
import RoutesContainer from './routes';
import { Container, ContainerMenu, ContainerPage } from './styles';

const App: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { app } = useStores();

  const setTheme = (): void => {
    app.setTheme();
  };

  const handleOpenSideMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={app.theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Container>
          <SideMenu isOpen={isOpen} />
          <ContainerMenu>
            <Navbar
              setTheme={setTheme}
              handleOpenSideMenu={handleOpenSideMenu}
            />
            <ContainerPage>
              <RoutesContainer />
            </ContainerPage>
          </ContainerMenu>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export { Path };

export default observer(App);
