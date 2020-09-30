import React from 'react';
import PropTypes from 'prop-types';

import { IconTextWrapper, Icon, FilterText } from './styles';

const IconText = ({ icon, text, handleClick, 'data-testid': dataTestid }) => (
  <IconTextWrapper data-testid={dataTestid} onClick={handleClick}>
    <Icon src={icon} alt="" />
    <FilterText>{text}</FilterText>
  </IconTextWrapper>
);

IconText.propTypes = {
  'data-testid': PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default IconText;
