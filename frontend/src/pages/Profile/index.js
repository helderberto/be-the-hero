import React from 'react';

import { IconPower, IconTrash } from 'components/atoms';
import * as S from './styled';

import logoImg from 'assets/logo.svg';

export default function Profile() {
  return (
    <S.Container>
      <S.Header>
        <S.Logo src={logoImg} alt="Be The Hero" />
        <S.Tag>Bem vindo(a), APAD</S.Tag>

        <S.RegisterLink to="/incidents/new">Cadastrar novo caso</S.RegisterLink>

        <S.PowerButton type="button">
          <IconPower size={18} />
        </S.PowerButton>
      </S.Header>

      <S.Title>Casos Cadastrados</S.Title>

      <S.IncidentContainer>
        <S.IncidentItem>
          <S.IncidentLabel>CASO:</S.IncidentLabel>
          <S.IncidentText>Caso teste</S.IncidentText>

          <S.IncidentLabel>DESCRIÇÃO:</S.IncidentLabel>
          <S.IncidentText>Descrição teste</S.IncidentText>

          <S.IncidentLabel>VALOR:</S.IncidentLabel>
          <S.IncidentText>R$ 120,00</S.IncidentText>

          <S.IncidentButton type="button">
            <IconTrash size={20} color="#a8a8b3" />
          </S.IncidentButton>
        </S.IncidentItem>
        <S.IncidentItem>
          <S.IncidentLabel>CASO:</S.IncidentLabel>
          <S.IncidentText>Caso teste</S.IncidentText>

          <S.IncidentLabel>DESCRIÇÃO:</S.IncidentLabel>
          <S.IncidentText>Descrição teste</S.IncidentText>

          <S.IncidentLabel>VALOR:</S.IncidentLabel>
          <S.IncidentText>R$ 120,00</S.IncidentText>

          <S.IncidentButton type="button">
            <IconTrash size={20} color="#a8a8b3" />
          </S.IncidentButton>
        </S.IncidentItem>
        <S.IncidentItem>
          <S.IncidentLabel>CASO:</S.IncidentLabel>
          <S.IncidentText>Caso teste</S.IncidentText>

          <S.IncidentLabel>DESCRIÇÃO:</S.IncidentLabel>
          <S.IncidentText>Descrição teste</S.IncidentText>

          <S.IncidentLabel>VALOR:</S.IncidentLabel>
          <S.IncidentText>R$ 120,00</S.IncidentText>

          <S.IncidentButton type="button">
            <IconTrash size={20} color="#a8a8b3" />
          </S.IncidentButton>
        </S.IncidentItem>
        <S.IncidentItem>
          <S.IncidentLabel>CASO:</S.IncidentLabel>
          <S.IncidentText>Caso teste</S.IncidentText>

          <S.IncidentLabel>DESCRIÇÃO:</S.IncidentLabel>
          <S.IncidentText>Descrição teste</S.IncidentText>

          <S.IncidentLabel>VALOR:</S.IncidentLabel>
          <S.IncidentText>R$ 120,00</S.IncidentText>

          <S.IncidentButton type="button">
            <IconTrash size={20} color="#a8a8b3" />
          </S.IncidentButton>
        </S.IncidentItem>
      </S.IncidentContainer>
    </S.Container>
  );
}
