import styled from 'styled-components';

import Vars from 'styles/variables';
import Color from 'styles/colors';
import Typography from 'styles/typography';

const Styled = {};

Styled.Container = styled.div`
  width: 100%;
  max-width: ${Vars.maxWidths.xl};
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Styled.Content = styled.div`
  width: 100%;
  padding: 96px;
  background: ${Color.gray[1]};
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

Styled.Section = styled.section`
  width: 100%;
  max-width: 380px;
`;

Styled.Title = styled.h1`
  font-size: ${Typography.size32};
  margin: 64px 0 32px;
`;

Styled.Paragraph = styled.p`
  font-size: ${Typography.size18};
  color: ${Color.gray[4]};
  line-height: ${Typography.size32};
`;

Styled.Form = styled.form`
  width: 100%;
  max-width: 450px;
`;

Styled.Input = styled.input`
  margin-top: 8px;
`;

Styled.InputGroup = styled.div`
  display: flex;
`;

Styled.InputUf = styled(Styled.Input)`
  margin-left: 8px;
  max-width: 80px;
`;

export default Styled;
