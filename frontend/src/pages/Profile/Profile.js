import React, { useEffect, useState } from 'react';
import { IconPower } from 'components/atoms';
import * as S from './styled';
import logoImg from 'assets/logo.svg';
import { Http } from 'interfaces';
import { Incident } from 'components/molecules';

function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    Http.get('profile', {
      headers: {
        Authorization: ongId,
      },
    }).then((response) => {
      setIncidents(response.data);
    });
  }, [ongId]);

  return (
    <S.Container>
      <S.Header>
        <S.Logo src={logoImg} alt="Be The Hero" />
        <S.Tag>Bem vindo(a), {ongName}</S.Tag>

        <S.RegisterLink to="/incidents/new">Cadastrar novo caso</S.RegisterLink>

        <S.PowerButton type="button">
          <IconPower size={18} />
        </S.PowerButton>
      </S.Header>

      <S.Title>Casos Cadastrados</S.Title>

      <S.IncidentContainer>
        {incidents.map((incident) => (
          <Incident
            key={incident.id}
            title={incident.title}
            description={incident.description}
            value={incident.value}
          />
        ))}
      </S.IncidentContainer>
    </S.Container>
  );
}

export { Profile };
