import styled from 'styled-components';

import Vars from 'styles/variables';

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;
`;

const Container = styled.div`
  width: 100%;
  max-width: ${Vars.maxWidths.xl};
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;

const Form = styled.form`
  margin-top: 100px;
`;

export default {
  Title,
  Container,
  Wrapper,
  Form
};
