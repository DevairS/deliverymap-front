import { Link as _Link } from 'react-router-dom';
import styled from 'styled-components';
import { pxToRem } from '~/utils';

export const TableContainer = styled.table`
  background-color: ${({ theme }) => theme.surface};
  padding: ${pxToRem(16)} 0;
`;

export const THead = styled.thead``;

export const TBody = styled.tbody``;

export const Tr = styled.tr``;

export const Td = styled.td`
  border: 1px solid ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: ${pxToRem(4)};
`;

export const Link = styled(_Link)``;
