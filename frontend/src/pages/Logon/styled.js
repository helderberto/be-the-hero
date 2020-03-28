import styled from 'styled-components';

import Vars from 'styles/variables';
import Typography from 'styles/typography';

export const Title = styled.h1`
  font-size: ${Typography.size32};
  margin-bottom: 32px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${Vars.maxWidths.xl};
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;

export const Form = styled.form`
  margin-top: 100px;
`;
