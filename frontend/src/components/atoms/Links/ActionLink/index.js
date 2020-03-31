import React from 'react';

import * as S from './styled';

export default function ActionLink({ to, children, ...rest }) {
  return (
    <S.ActionLink to={to} {...rest}>
      {children}
    </S.ActionLink>
  );
}
