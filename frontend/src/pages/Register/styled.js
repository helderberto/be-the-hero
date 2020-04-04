import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme: { maxWidths } }) => maxWidths.xl};
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: ${({ theme: { colors } }) => colors.gray[1]};
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const Title = styled.h1`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.size32};
  margin: 64px 0 32px;
`;

export const Paragraph = styled.p`
  ${({ theme: { colors, fontSizes } }) => `
    font-size: ${fontSizes.size18};
    color: ${colors.gray[4]};
    line-height: ${fontSizes.size32};
  `}
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
`;

export const Input = styled.input`
  margin-top: 8px;
`;

export const InputGroup = styled.div`
  display: flex;
`;

export const InputUf = styled(Input)`
  margin-left: 8px;
  max-width: 80px;
`;
