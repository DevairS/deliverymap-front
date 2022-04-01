import styled from 'styled-components';
import { pxToRem } from '~/utils';

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.text};
  padding-bottom: ${pxToRem(24)};
`;
