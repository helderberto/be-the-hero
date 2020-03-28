import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import Styled from './styled';

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
          <Styled.Link component={<Link to="/register" />}>
            <Styled.Icon>
              <FiLogIn size={16} color="#E02041" />
            </Styled.Icon>
            Não tenho cadastro
          </Styled.Link>
        </Styled.Form>
      </Styled.Wrapper>

      <img src={heroesImg} alt="Heroes" />
    </Styled.Container>
  );
}
