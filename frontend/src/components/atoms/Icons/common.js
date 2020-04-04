import { css } from 'styled-components';

export const commonStyle = css`
  ${({ theme: { fontSizes, colors } }) => `
    font-size: ${fontSizes.size16};
    color: ${colors.red};
  `}
`;
