import React from 'react';

import * as Styled from './styled';
import { IconLink, Button } from 'components/atoms';

import logoImg from 'assets/logo.svg';
import heroesImg from 'assets/heroes.png';

export default function Logon() {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <img src={logoImg} alt="Be The Hero" />

        <Styled.Form>
          <Styled.Title>Faça seu logon</Styled.Title>
          <input placeholder="Sua ID" />

          <Button type="submit">Entrar</Button>

          <IconLink to="/register">Não tenho cadastro</IconLink>
        </Styled.Form>
      </Styled.Wrapper>

      <img src={heroesImg} alt="Heroes" />
    </Styled.Container>
  );
}
