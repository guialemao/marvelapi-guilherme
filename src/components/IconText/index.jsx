import React from 'react';
import styled from 'styled-components';

const IconTextWrapper = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.img`
  width: 17px;
  margin-right: 10px;
`;

const FilterText = styled.span`
  color: #fa7c7c;
  cursor: pointer;
`;

const IconText = ({ icon, text, handleClick }) => (
  <IconTextWrapper>
    <Icon src={icon} alt="" />
    <FilterText onClick={handleClick}>{text}</FilterText>
  </IconTextWrapper>
);

export default IconText;
