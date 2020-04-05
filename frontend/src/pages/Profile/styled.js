import styled from 'styled-components';

import { ActionLink } from 'components/atoms';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const Tag = styled.span`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.size18};
  margin-left: 24px;
`;

export const Logo = styled.img`
  height: 64px;
`;

export const RegisterLink = styled(ActionLink)`
  margin-left: auto;
  width: 260px;
  margin-top: 0;
`;

export const PowerButton = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid ${({ theme: { colors } }) => colors.gray[2]};
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;

  &:hover {
    border-color: #999;
  }
`;

export const Title = styled.h1`
  margin: 80px 0 24px;
`;

export const IncidentContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
`;
