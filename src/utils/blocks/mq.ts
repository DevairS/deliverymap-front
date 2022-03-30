import { FlattenSimpleInterpolation, css } from 'styled-components';

const mq = ({
  cssBlock,
  maxWidth,
}: {
  cssBlock: FlattenSimpleInterpolation;
  maxWidth: number;
}): FlattenSimpleInterpolation => css`
  @media (max-width: ${maxWidth}px) {
    ${cssBlock}
  }
`;

export const mqTablet = (
  cssBlock: FlattenSimpleInterpolation,
): FlattenSimpleInterpolation =>
  mq({
    cssBlock,
    maxWidth: 768,
  });

export const mqDesktop = (
  cssBlock: FlattenSimpleInterpolation,
): FlattenSimpleInterpolation =>
  mq({
    cssBlock,
    maxWidth: 1080,
  });
