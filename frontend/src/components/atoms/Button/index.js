import React from 'react';

import * as S from './styled';

export default function Button({ children, ...props }) {
  return <S.Button {...props}>{children}</S.Button>;
}
