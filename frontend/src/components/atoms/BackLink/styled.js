import { cloneElement } from 'react';
import styled from 'styled-components';

import Color from 'styles/colors';
import Typography from 'styles/typography';

export const ICON_COLOR = Color.red;

export const Link = styled(({ component, ...props }) =>
  cloneElement(component, props)
)`
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

export const Icon = styled(({ component, ...props }) =>
  cloneElement(component, props)
)`
  margin-right: 8px;
`;
