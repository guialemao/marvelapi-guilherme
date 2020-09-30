import React, { useState, useEffect } from 'react';
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
  const findChar = characters.filter((char) => char.id === id);
  const totalComics = findChar[0].comics.available
    + findChar[0].series.available
    + findChar[0].stories.available;

  console.log(findChar);

  useEffect(() => {
    fetchComics(findChar[0].comics.collectionURI).then((res) => setComicArr([res]));
  }, [comicArr]);
  console.log(comicArr);

  // const filterOnSaleDate = c.map((comic) => {
  //   console.log(comic.dates[0].date);
  // });

  return (
    <Wrapper>
      <HeroWrapper>
        <HeroInfo>
          <h1>{findChar[0].name}</h1>
          <p>{findChar[0].description}</p>
          <AppearancesWrapper>
            <Appearance category="Quadrinhos" icon={Book} text={totalComics} />
            <Appearance category="Filmes" icon={Video} text="10" />
          </AppearancesWrapper>
          <Rating icon={RatingIcon} />
          Último quadrinho: 13 fev. 2020
        </HeroInfo>

        <HeroPic>
          <img
            src={`${findChar[0].thumbnail.path}.${findChar[0].thumbnail.extension}`}
          />
        </HeroPic>
      </HeroWrapper>
      <div>
        <h2>Lançamentos</h2>
      </div>
    </Wrapper>
  );
};

Details.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Details;
