import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon as _FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { radius } from '~/theme';
import { mqDesktop, mqTablet, pxToRem } from '~/utils';

const { mediumRadius } = radius;

interface IsOpen {
  isOpen: boolean;
}

export const Container = styled.div<IsOpen>`
  width: ${pxToRem(400)};
  height: 100%;
  padding: ${pxToRem(24)};

  ${mqDesktop(css`
    width: ${pxToRem(340)};
    position: absolute;
    padding: ${pxToRem(0)};
  `)};

  ${mqTablet(css`
    width: ${pxToRem(280)};
  `)};

  @media (max-width: 1080px) {
    left: ${({ isOpen }) => (isOpen ? pxToRem(0) : pxToRem(-400))};
    animation: ${({ isOpen }) =>
        isOpen ? 'slide-in-right-desktop' : 'slide-out-right-desktop'}
      0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    left: ${({ isOpen }) => (isOpen ? pxToRem(0) : pxToRem(-280))};
    animation: ${({ isOpen }) =>
        isOpen ? 'slide-in-right-tablet' : 'slide-out-right-tablet'}
      0.3s ease-in-out;
  }

  @keyframes slide-in-right-desktop {
    0% {
      transform: translateX(-340px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  @keyframes slide-out-right-desktop {
    0% {
      transform: translateX(340px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  @keyframes slide-in-right-tablet {
    0% {
      transform: translateX(-280px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  @keyframes slide-out-right-tablet {
    0% {
      transform: translateX(280px);
    }
    100% {
      transform: translateX(0px);
    }
  }
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
  color: props.theme.secondary,
}))`
  margin-right: ${pxToRem(20)};
`;
