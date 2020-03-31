import React from 'react';

import * as Styled from './styled'

export default function ActionLink({ to, children, ...rest }) {
  return (
    <Styled.ActionLink to={to} {...rest}>
      {children}
    </Styled.ActionLink>
  );
}
