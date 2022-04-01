import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon as _FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { radius } from '~/theme';
import {
  mqDesktop,
  mqTablet,
  pxToRem,
  slideInDesktop,
  slideOutDesktop,
  slideInTablet,
  slideOutTablet,
} from '~/utils';

const { mediumRadius } = radius;

interface IsOpen {
  isOpen: boolean;
}

export const Container = styled.div<IsOpen>`
  width: ${pxToRem(400)};
  height: 100%;
  padding: ${pxToRem(24)};
  ${({ isOpen }) => css`
    ${mqDesktop(css`
      width: ${pxToRem(340)};
      position: absolute;
      z-index: 9999;
      padding: ${pxToRem(0)};
      left: ${isOpen ? pxToRem(0) : pxToRem(-400)};
      animation: ${isOpen ? slideInDesktop : slideOutDesktop} 0.3s ease-in-out;
    `)};

    ${mqTablet(css`
      width: ${pxToRem(280)};
      left: ${isOpen ? pxToRem(0) : pxToRem(-280)};
      animation: ${isOpen ? slideInTablet : slideOutTablet} 0.3s ease-in-out;
    `)};
  `}
`;

export const ContainerSideMenu = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.surface};
  flex-direction: column;
  border-radius: ${mediumRadius};

  ${mqDesktop(css`
    border-radius: 0;
  `)};
`;

export const ContainerTitle = styled.div`
  justify-content: center;
  padding: ${pxToRem(16)};
  margin-bottom: ${pxToRem(16)};
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.text};
`;

export const ContainerItems = styled.div`
  flex-direction: column;
`;

export const Item = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  padding: ${pxToRem(8)} ${pxToRem(40)};
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.background};
  }
`;

export const ItemText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text};
`;
export const FontAwesomeIcon = styled(_FontAwesomeIcon).attrs((props) => ({
  color: props.theme.primary,
}))`
  margin-right: ${pxToRem(20)};
`;
