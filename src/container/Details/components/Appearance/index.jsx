import React from 'react';
import PropTypes from 'prop-types';

import {
  Content, CategoryTitle, CategoryGroup, CategoryIcon,
} from './styles';

const Appearance = ({ category, icon, text }) => (
  <Content>
    <CategoryTitle>{category}</CategoryTitle>
    <CategoryGroup>
      <CategoryIcon src={icon} />
      {text}
    </CategoryGroup>
  </Content>
);

Appearance.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Appearance;
