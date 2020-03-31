import styled from 'styled-components';

import Color from 'styles/colors';
import Typography from 'styles/typography';
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
  font-size: ${Typography.size18};
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
  border: 1px solid ${Color.gray[2]};
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

export const IncidentItem = styled.li`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;
`;

export const IncidentButton = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const IncidentLabel = styled.strong`
  display: block;
  margin-bottom: 16px;
  color: ${Color.gray[3]};

  &:not(:first-child) {
    margin-top: 32px;
  }
`;

export const IncidentText = styled.p`
  color: ${Color.gray[4]};
  font-size: ${Typography.size16};
  line-height: ${Typography.size21};
`;
