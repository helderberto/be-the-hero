import styled from 'styled-components';

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
  color: ${({ theme: { colors } }) => colors.gray[3]};

  &:not(:first-child) {
    margin-top: 32px;
  }
`;

export const IncidentText = styled.p`
  ${({ theme: { colors, fontSizes } }) => `
    color: ${colors.gray[4]};
    font-size: ${fontSizes.size16};
    line-height: ${fontSizes.size21};
  `}
`;
