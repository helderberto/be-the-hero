import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

export default function PrimaryButton({ text, ...props }) {
  return <Styled.Button {...props}>{text}</Styled.Button>;
}

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired
};
