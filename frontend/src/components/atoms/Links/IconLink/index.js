import React from 'react';

import { IconBack, IconLogIn } from 'components/atoms';

import * as Styled from './styled';

export default function IconLink({ type, children, ...rest }) {
  const icon = type === 'back' ? <IconBack /> : <IconLogIn />;

  return (
    <Styled.IconLink className="" {...rest}>
      {icon}
      {children}
    </Styled.IconLink>
  );
}
