import React from 'react';
import PropTypes from 'prop-types';

import { IconTextWrapper, Icon, FilterText } from './styles';

const IconText = ({ icon, text, handleClick }) => (
  <IconTextWrapper>
    <Icon src={icon} alt="" />
    <FilterText onClick={handleClick}>{text}</FilterText>
  </IconTextWrapper>
);

IconText.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default IconText;
