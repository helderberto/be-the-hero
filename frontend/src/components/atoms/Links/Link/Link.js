import React from 'react';

import * as S from './styled';

export default function Link({ to, children, ...rest }) {
  return (
    <S.Link to={to} {...rest}>
      {children}
    </S.Link>
  );
}
