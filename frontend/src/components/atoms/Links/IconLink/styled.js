import styled from 'styled-components';
import { Link as RDLink } from 'react-router-dom';

import { commonStyle } from '../common';

export const IconLink = styled(RDLink)`
  ${commonStyle}

  & > svg {
    margin-right: 8px;
  }
`;
