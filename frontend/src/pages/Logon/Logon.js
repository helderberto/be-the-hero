import React from 'react';
import * as S from './styled';
import { IconLink, Button } from 'components/atoms';
import logoImg from 'assets/logo.svg';
import heroesImg from 'assets/heroes.png';
import { Http } from 'interfaces';
import { useForm } from 'hooks';
import { useHistory } from 'react-router-dom';

const INITIAL_STATE = {
  id: '',
};

function Logon() {
  const { values, resetForm, handleChange } = useForm(INITIAL_STATE);
  const history = useHistory();

  async function handleLogin(evt) {
    evt.preventDefault();

    try {
      const response = await Http.post('sessions', values);

      localStorage.setItem('ongId', values.id);
      localStorage.setItem('ongName', response.data.name);

      alert('Login efetuado com sucesso! :D');
      resetForm();

      history.push('/profile');
    } catch (err) {
      alert('Não foi possível efetuar o login.');
    }
  }

  return (
    <S.Container>
      <S.Wrapper>
        <img src={logoImg} alt="Be The Hero" />

        <S.Form onSubmit={handleLogin}>
          <S.Title>Faça seu logon</S.Title>
          <input
            name="id"
            placeholder="Sua ID"
            value={values.id}
            onChange={handleChange}
          />

          <Button type="submit">Entrar</Button>

          <IconLink to="/register">Não tenho cadastro</IconLink>
        </S.Form>
      </S.Wrapper>

      <img src={heroesImg} alt="Heroes" />
    </S.Container>
  );
}

export { Logon };
