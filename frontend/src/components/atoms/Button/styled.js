import styled from 'styled-components';

export const Button = styled.button`
  ${({ theme: { fontWeights, colors } }) => `
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

    &:hover {
      filter: brightness(90%);
    }
  `}
`;
