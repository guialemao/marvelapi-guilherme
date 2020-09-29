import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { Wrapper } from './styles';

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const HeroInfo = styled.div`
  width: 300px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const HeroPic = styled.div`
  width: 100%;

  > img {
    width: 240px;
  }
`;

const Details = ({ characters }) => {
  const location = useLocation();
  const { id } = location.query;
  const findChar = characters.filter((char) => char.id === id);
  console.log(findChar);

  return (
    <Wrapper>
      <HeroWrapper>
        <HeroInfo>
          <h1>{findChar[0].name}</h1>
          <p>{findChar[0].description}</p>
        </HeroInfo>

        <HeroPic>
          <img
            src={`${findChar[0].thumbnail.path}.${findChar[0].thumbnail.extension}`}
          />
        </HeroPic>
      </HeroWrapper>
    </Wrapper>
  );
};

export default Details;
