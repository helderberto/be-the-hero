import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

export default function Button({ children, ...props }) {
  return <Styled.Button {...props}>{children}</Styled.Button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired
};
