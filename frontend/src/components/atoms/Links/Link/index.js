import React from 'react';

import * as Styled from './styled';

export default function Link({ to, children, ...rest }) {
  return (
    <Styled.Link to={to} {...rest}>
      {children}
    </Styled.Link>
  );
}
