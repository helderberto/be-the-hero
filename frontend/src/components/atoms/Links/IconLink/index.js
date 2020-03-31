import React from 'react';

import { IconBack, IconLogIn } from 'components/atoms';

import * as S from './styled';

export default function IconLink({ type, children, ...rest }) {
  const icon = type === 'back' ? <IconBack /> : <IconLogIn />;

  return (
    <S.IconLink className="" {...rest}>
      {icon}
      {children}
    </S.IconLink>
  );
}
