import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.size32};
  margin-bottom: 32px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme: { maxWidths } }) => maxWidths.xl};
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
