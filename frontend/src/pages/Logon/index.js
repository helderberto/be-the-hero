import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import {
  LogonContainer,
  Wrapper,
  FormLogon,
  Title,
  RegisterLink,
  RegisterIcon
} from './styled';

import logoImg from 'assets/logo.svg';
import heroesImg from 'assets/heroes.png';

export default function Logon() {
  return (
    <LogonContainer>
      <Wrapper>
        <img src={logoImg} alt="Be The Hero" />

        <FormLogon>
          <Title>Faça seu logon</Title>

          <input placeholder="Sua ID" />
          <button className="button" type="submit">
            Entrar
          </button>

          <RegisterLink href="/register">
            <RegisterIcon component={<FiLogIn size={16} color="#E02041" />} />
            Não tenho cadastro
          </RegisterLink>
        </FormLogon>
      </Wrapper>

      <img src={heroesImg} alt="Heroes" />
    </LogonContainer>
  );
}
