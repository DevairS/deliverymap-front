import { css, FlattenSimpleInterpolation } from 'styled-components';

export const pointer = (): FlattenSimpleInterpolation => css`
  &,
  * {
    cursor: pointer;
  }
`;
