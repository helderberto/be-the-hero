import styled from 'styled-components';
import Link from '../Link';

import { commonStyle } from '../common';

export const IconLink = styled(Link)`
  ${commonStyle}

  & > svg {
    margin-right: 8px;
  }
`;
