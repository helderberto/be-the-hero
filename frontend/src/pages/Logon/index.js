import React from 'react';

import Styled from './styled';
import { BackLink } from 'components/atoms';

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
          <button className="button" type="submit">
            Entrar
          </button>

          <BackLink to="/register" text="Não tenho cadastro" />
        </Styled.Form>
      </Styled.Wrapper>

      <img src={heroesImg} alt="Heroes" />
    </Styled.Container>
  );
}
