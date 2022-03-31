import { Link as _Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as _FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mqTablet, pxToRem } from '~/utils';

export const TableContainer = styled.table`
  background-color: ${({ theme }) => theme.surface};
`;

export const THead = styled.thead``;

export const TBody = styled.tbody``;

export const TrHead = styled.tr``;

export const Tr = styled.tr`
  :nth-child(odd) {
    background-color: ${({ theme }) => theme.background};
  }
`;

export const Td = styled.td`
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: ${pxToRem(4)};

  ${mqTablet(css`
    font-size: ${pxToRem(12)};
  `)}
`;

export const Link = styled(_Link)``;

export const FontAwesomeIcon = styled(_FontAwesomeIcon).attrs((props) => ({
  color: props.theme.primary,
  icon: faMapMarkedAlt,
}))``;
