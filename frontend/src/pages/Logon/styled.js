import styled from 'styled-components';

import Vars from 'styles/variables';
import Typography from 'styles/typography';

const Styled = {};

Styled.Title = styled.h1`
  font-size: ${Typography.size32};
  margin-bottom: 32px;
`;

Styled.Container = styled.div`
  width: 100%;
  max-width: ${Vars.maxWidths.xl};
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Styled.Wrapper = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;

Styled.Form = styled.form`
  margin-top: 100px;
`;

export default Styled;
