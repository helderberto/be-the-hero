import React from 'react';

import * as Styled from './styled';
import { BackLink, PrimaryButton } from 'components/atoms';

import logoImg from 'assets/logo.svg';

export default function Register() {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Section>
          <img src={logoImg} alt="Be The Hero" />

          <Styled.Title>Cadastro</Styled.Title>

          <Styled.Paragraph>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </Styled.Paragraph>

          <BackLink type="back" to="/" text="Voltar ao Logon" />
        </Styled.Section>

        <Styled.Form>
          <Styled.Input placeholder="Nome da ONG" />
          <Styled.Input type="email" placeholder="E-mail" />
          <Styled.Input placeholder="Whatsapp" />

          <Styled.InputGroup>
            <Styled.Input placeholder="Cidade" />
            <Styled.InputUf placeholder="UF" />
          </Styled.InputGroup>

          <PrimaryButton text="Cadastrar" type="submit" />
        </Styled.Form>
      </Styled.Content>
    </Styled.Container>
  );
}
