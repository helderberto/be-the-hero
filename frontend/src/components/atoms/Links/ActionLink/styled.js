import styled from 'styled-components';
import { Link as RDLink } from 'react-router-dom';

export const ActionLink = styled(RDLink)`
  ${({ theme: { colors, fontWeights, fontSizes } }) => `
    width: 100%;
    height: 60px;
    background: ${colors.red};
    border: 0;
    border-radius: 8px;
    color: ${colors.white};
    font-weight: ${fontWeights.bold};
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    line-height: 60px;
    transition: filter 0.2s;
    font-size: ${fontSizes.size18};

    &:hover {
      filter: brightness(90%);
    }
  `}
`;
