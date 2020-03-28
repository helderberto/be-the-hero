import styled from 'styled-components';

import Color from 'styles/colors';
import Typography from 'styles/typography';

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: ${Color.red};
  border: 0;
  border-radius: 8px;
  color: ${Color.white};
  font-weight: ${Typography.weightBold};
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  line-height: 60px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;
