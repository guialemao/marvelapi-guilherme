import React from 'react';

import { Content, CategoryTitle, CategoryGroup, CategoryIcon } from './styles';

const Appearance = ({ category, icon, text }) => (
  <Content>
    <CategoryTitle>{category}</CategoryTitle>
    <CategoryGroup>
      <CategoryIcon src={icon} />
      {text}
    </CategoryGroup>
  </Content>
);

export default Appearance;
