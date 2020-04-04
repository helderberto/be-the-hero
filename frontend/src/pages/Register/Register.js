import React from 'react';

import * as S from './styled';
import { IconLink, Button } from 'components/atoms';

import logoImg from 'assets/logo.svg';

function Register() {
  return (
    <S.Container>
      <S.Content>
        <S.Section>
          <img src={logoImg} alt="Be The Hero" />

          <S.Title>Cadastro</S.Title>

          <S.Paragraph>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </S.Paragraph>

          <IconLink to="/" type="back">
            Voltar ao Logon
          </IconLink>
        </S.Section>

        <S.Form>
          <S.Input placeholder="Nome da ONG" />
          <S.Input type="email" placeholder="E-mail" />
          <S.Input placeholder="Whatsapp" />

          <S.InputGroup>
            <S.Input placeholder="Cidade" />
            <S.InputUf placeholder="UF" />
          </S.InputGroup>

          <Button type="submit">Cadastrar</Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export { Register };
