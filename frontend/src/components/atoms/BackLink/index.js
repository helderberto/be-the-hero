import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi';

import Styled, { ICON_COLOR } from './styled';

const TYPES = {
  register: 'register',
  back: 'back'
};

const iconProps = {
  size: 16,
  color: ICON_COLOR
};

export default function BackLink({ to, text, type }) {
  return (
    <Styled.Link component={<Link to={to} />}>
      <Styled.Icon>
        {type === TYPES.register ? (
          <FiLogIn {...iconProps} />
        ) : (
          <FiArrowLeft {...iconProps} />
        )}
      </Styled.Icon>

      {text}
    </Styled.Link>
  );
}

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(TYPES))
};

BackLink.defaultProps = {
  type: TYPES.register
};
