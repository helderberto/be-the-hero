import React from 'react';

import * as S from './styled';
import { IconLink, Button } from 'components/atoms';

import logoImg from 'assets/logo.svg';

function NewIncident() {
  return (
    <S.Container>
      <S.Content>
        <S.Section>
          <img src={logoImg} alt="Be The Hero" />

          <S.Title>Cadastrar novo caso</S.Title>

          <S.Paragraph>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </S.Paragraph>

          <IconLink to="/profile" type="back">
            Voltar para home
          </IconLink>
        </S.Section>

        <S.Form>
          <S.Input placeholder="Título do caso" />
          <S.Input as="textarea" placeholder="Descrição" />
          <S.Input placeholder="Valor em Reais" />

          <Button type="submit">Cadastrar</Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export { NewIncident };
