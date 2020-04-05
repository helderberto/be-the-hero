import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { IconTrash } from 'components/atoms';

function Incident({ title, description, value }) {
  return (
    <S.IncidentItem>
      <S.IncidentLabel>CASO:</S.IncidentLabel>
      <S.IncidentText>{title}</S.IncidentText>

      <S.IncidentLabel>DESCRIÇÃO:</S.IncidentLabel>
      <S.IncidentText>{description}</S.IncidentText>

      <S.IncidentLabel>VALOR:</S.IncidentLabel>
      <S.IncidentText>R$ {parseFloat(value)}</S.IncidentText>

      <S.IncidentButton type="button">
        <IconTrash size={20} color="#a8a8b3" />
      </S.IncidentButton>
    </S.IncidentItem>
  );
}

Incident.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export { Incident };
