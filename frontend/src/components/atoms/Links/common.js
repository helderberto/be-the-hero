import { css } from 'styled-components';

import Color from 'styles/colors';
import Typography from 'styles/typography';

export const commonStyle = css`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: ${Color.gray[3]};
  font-size: ${Typography.size18};
  text-decoration: none;
  font-weight: ${Typography.weightMedium};
  transiton: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
