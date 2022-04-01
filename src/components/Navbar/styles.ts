import styled, { css } from 'styled-components';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { radius } from '~/theme';
import { mqDesktop, pxToRem } from '~/utils';
import IconButton from '../IconButton';

const { mediumRadius } = radius;

export const Container = styled.div`
  display: flex;
  height: ${pxToRem(50)};
  margin-top: ${pxToRem(24)};
  margin-right: ${pxToRem(24)};
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.surface};
  border-radius: ${mediumRadius};
  padding: ${pxToRem(8)};
  ${mqDesktop(css`
    margin-left: ${pxToRem(8)};
  `)}
`;

export const IconButtonBars = styled(IconButton).attrs({
  type: 'button',
  icon: faBars,
})`
  display: none;

  ${mqDesktop(css`
    display: flex;
  `)};
`;

export const IconButtonTheme = styled(IconButton).attrs(({ theme }) => ({
  type: 'button',
  icon: theme.title === 'dark' ? faSun : faMoon,
}))``;
