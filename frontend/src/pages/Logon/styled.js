import { cloneElement } from 'react';
import styled from 'styled-components';

import Color from 'styles/colors';
import Typography from 'styles/typography';
import Vars from 'styles/variables';

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;
`;

export const LogonContainer = styled.div`
  width: 100%;
  max-width: ${Vars.maxWidths.xl};
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;

export const FormLogon = styled.form`
  margin-top: 100px;
`;

export const RegisterLink = styled.a`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: ${Color.gray[3]};
  font-size: ${Typography.size18};
  text-decoration: none;
  font-weight: ${Typography.weightMedium};
  transiton: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const RegisterIcon = styled(({ component, ...props }) =>
  cloneElement(component, props)
)`
  margin-right: 8px;
`;
