import React from 'react';
import * as S from './styled';
import { IconLink, Button } from 'components/atoms';
import logoImg from 'assets/logo.svg';
import { Http } from 'interfaces';
import useForm from 'hooks/useForm';
import { useHistory } from 'react-router-dom';

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  city: '',
  whatsapp: '',
  uf: '',
};

function Register() {
  const [values, setValue] = useForm(INITIAL_FORM_STATE);
  const history = useHistory();

  async function handleRegister(evt) {
    evt.preventDefault();

    try {
      const response = await Http.post('ongs', values);
      setValue(INITIAL_FORM_STATE);
      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;

    setValue({ [name]: value });
  }

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

        <S.Form onSubmit={handleRegister}>
          <S.Input
            name="name"
            placeholder="Nome da ONG"
            value={values.name}
            onChange={handleChange}
          />
          <S.Input
            name="email"
            type="email"
            placeholder="E-mail"
            value={values.email}
            onChange={handleChange}
          />
          <S.Input
            name="whatsapp"
            placeholder="Whatsapp"
            onChange={handleChange}
          />

          <S.InputGroup>
            <S.Input name="city" placeholder="Cidade" onChange={handleChange} />
            <S.InputUf name="uf" placeholder="UF" onChange={handleChange} />
          </S.InputGroup>

          <Button type="submit">Cadastrar</Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export { Register };
