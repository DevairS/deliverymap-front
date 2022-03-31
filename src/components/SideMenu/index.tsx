import { FC } from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  ContainerItems,
  ContainerSideMenu,
  ContainerTitle,
  FontAwesomeIcon,
  Item,
  ItemText,
  Title,
} from './styles';

type Props = {
  isOpen: boolean;
};
const SideMenu: FC<Props> = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <ContainerSideMenu>
        <ContainerTitle>
          <Title>Template</Title>
        </ContainerTitle>
        <ContainerItems>
          <Item to="/">
            <FontAwesomeIcon icon={faHome} />
            <ItemText>Dashboard</ItemText>
          </Item>
          <Item to="/list">
            <FontAwesomeIcon icon={faHome} />
            <ItemText>Entregas</ItemText>
          </Item>
        </ContainerItems>
      </ContainerSideMenu>
    </Container>
  );
};

export default SideMenu;
