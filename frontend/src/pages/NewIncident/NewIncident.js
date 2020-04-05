import React from 'react';
import * as S from './styled';
import { IconLink, Button } from 'components/atoms';
import logoImg from 'assets/logo.svg';
import { useForm } from 'hooks';
import { Http } from 'interfaces';
import { useHistory } from 'react-router-dom';

const INITIAL_FORM_STATE = {
  title: '',
  description: '',
  value: '',
};

function NewIncident() {
  const [values, resetForm, handleChange] = useForm(INITIAL_FORM_STATE);
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  async function handleCreateIncident(evt) {
    evt.preventDefault();

    try {
      await Http.post('incidents', values, {
        headers: {
          Authorization: ongId,
        },
      });

      alert('Incidente cadastrado com sucesso! :D.');
      resetForm();

      history.push('/profile');
    } catch (err) {
      alert('Não foi possível cadastrar o incidente.');
    }
  }

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

        <S.Form onSubmit={handleCreateIncident}>
          <S.Input
            name="title"
            value={values.title}
            placeholder="Título do caso"
            onChange={handleChange}
          />
          <S.Input
            as="textarea"
            name="description"
            value={values.description}
            placeholder="Descrição"
            onChange={handleChange}
          />
          <S.Input
            name="value"
            value={values.value}
            placeholder="Valor em Reais"
            onChange={handleChange}
          />

          <Button type="submit">Cadastrar</Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export { NewIncident };
