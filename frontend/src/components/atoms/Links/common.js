import { css } from 'styled-components';

export const commonStyle = css`
  ${({ theme: { fontSizes, fontWeights, colors } }) => `
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: ${colors.gray[3]};
    font-size: ${fontSizes.size18};
    text-decoration: none;
    font-weight: ${fontWeights.medium};
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  `}
`;
