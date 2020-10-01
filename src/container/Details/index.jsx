import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { fetchComics } from '../../utils/fetchData';

import Appearance from './components/Appearance';
import Rating from './components/Rating';

import Book from '../../assets/images/icon/Group@3x.png';
import Video from '../../assets/images/icon/VideoShape@3x.png';
import RatingIcon from '../../assets/images/icon/Group4@3x.png';

import Wrapper from '../styles';

import {
  HeroWrapper, HeroInfo, HeroPic, AppearancesWrapper,
} from './styles';

const Details = ({ characters }) => {
  const [comicArr, setComicArr] = useState([]);
  const location = useLocation();
  const { id } = location.query;
  const findChar = characters.find((char) => char.id === id);
  const totalComics = findChar.comics.available
    + findChar.series.available
    + findChar.stories.available;

  useEffect(() => {
    const url = findChar.comics.collectionURI.replace(/^http:/, 'https:');
    fetchComics(url).then((res) => setComicArr(res));
  }, [id]);

  const ComicList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;

    li {
      width: 100px;
    }
  `;

  const ComicImg = styled.img`
    width: 100px;
    display: block
  `;

  return (
    <Wrapper>
      <HeroWrapper>
        <HeroInfo>
          <h1>{findChar.name}</h1>
          <p>{findChar.description}</p>
          <AppearancesWrapper>
            <Appearance category="Quadrinhos" icon={Book} text={totalComics} />
            <Appearance category="Filmes" icon={Video} text="10" />
          </AppearancesWrapper>
          <Rating icon={RatingIcon} />
          Último quadrinho: 13 fev. 2020
        </HeroInfo>

        <HeroPic>
          <img
            src={`${findChar.thumbnail.path}.${findChar.thumbnail.extension}`}
          />
        </HeroPic>
      </HeroWrapper>
      <div>
        <h2>Lançamentos</h2>
        <ComicList>
          {
         comicArr.map((comic) => (
           <li>
             <ComicImg src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
             {comic.title}
           </li>
         ))
        }
        </ComicList>
      </div>
    </Wrapper>
  );
};

Details.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Details;
