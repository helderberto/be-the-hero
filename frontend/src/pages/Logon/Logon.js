import React from 'react';

import * as S from './styled';
import { IconLink, Button } from 'components/atoms';

import logoImg from 'assets/logo.svg';
import heroesImg from 'assets/heroes.png';

function Logon() {
  return (
    <S.Container>
      <S.Wrapper>
        <img src={logoImg} alt="Be The Hero" />

        <S.Form>
          <S.Title>Faça seu logon</S.Title>
          <input placeholder="Sua ID" />

          <Button type="submit">Entrar</Button>

          <IconLink to="/register">Não tenho cadastro</IconLink>
        </S.Form>
      </S.Wrapper>

      <img src={heroesImg} alt="Heroes" />
    </S.Container>
  );
}

export { Logon };
