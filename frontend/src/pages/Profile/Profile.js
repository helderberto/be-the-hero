import React, { useEffect, useState } from 'react';
import { IconPower } from 'components/atoms';
import * as S from './styled';
import logoImg from 'assets/logo.svg';
import { Http } from 'interfaces';
import { Incident } from 'components/molecules';
import { useHistory } from 'react-router-dom';

function Profile() {
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();
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

  async function handleRemoveIncident(id) {
    if (window.confirm(`Você confirma a exclusão do incident ${id}?`)) {
      try {
        await Http.delete(`incidents/${id}`, {
          headers: {
            Authorization: ongId,
          },
        });

        alert('O incidente foi removido com sucesso!');

        const newIncidents = incidents.filter((incident) => incident.id !== id);
        setIncidents(newIncidents);
      } catch (err) {
        alert('Erro ao deletar caso, tente novamente.');
      }
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <S.Container>
      <S.Header>
        <S.Logo src={logoImg} alt="Be The Hero" />
        <S.Tag>Bem vindo(a), {ongName}</S.Tag>

        <S.RegisterLink to="/incidents/new">Cadastrar novo caso</S.RegisterLink>

        <S.PowerButton type="button" onClick={handleLogout}>
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
            onClick={() => handleRemoveIncident(incident.id)}
          />
        ))}
      </S.IncidentContainer>
    </S.Container>
  );
}

export { Profile };
