import { IconBack, IconLogin } from 'components/atoms';
import React from 'react';
import * as S from './styled';

export default function IconLink({ type, children, ...rest }) {
  const icon = type === 'back' ? <IconBack /> : <IconLogin />;

  return (
    <S.IconLink className="" {...rest}>
      {icon}
      {children}
    </S.IconLink>
  );
}
