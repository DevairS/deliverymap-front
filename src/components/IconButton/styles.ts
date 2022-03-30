import styled from 'styled-components';
import { FontAwesomeIcon as _FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { radius } from '~/theme';
import { pxToRem } from '~/utils';

const { mediumRadius } = radius;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: ${mediumRadius};
  padding: ${pxToRem(4)} ${pxToRem(8)};
  font-size: ${pxToRem(16)};
  opacity: 1;
  background-color: ${({ theme }) => theme.surface};

  &:hover {
    opacity: 0.2;
  }
`;

export const FontAwesomeIcon = styled(_FontAwesomeIcon).attrs((props) => ({
  color: props.theme.primary,
}))``;
