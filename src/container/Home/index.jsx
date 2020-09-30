import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import IconText from '../../components/IconText';
import HeroIcon from '../../assets/images/icon/noun_Superhero_2227044@3x.png';
import HeartFilled from '../../assets/images/icon/Path@3x.png';
import HeartEmpty from '../../assets/images/icon/Path_Copy2@3x.png';

import {
  FilterBar,
  FilterGroup,
  Wrapper,
  CardWrapper,
  Card,
  CardInfo,
  FavIcon,
} from '../styles';

const Home = ({ characters }) => {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState(false);
  const [favArr, setFavArr] = useState([]);

  useEffect(() => {
    setData(characters);
  }, [characters]);

  useEffect(() => {
    const orded = (type) => {
      if (type) {
        return [...data].sort((a, b) => b.name.localeCompare(a.name));
      }
      return [...data].sort((a, b) => a.name.localeCompare(b.name));
    };
    setData(orded(sort));
  }, [sort]);

  if (characters === undefined) return <h1>Loading...</h1>;

  const handleOrderByName = () => {
    setSort(!sort);
  };

  const handleShowFavs = () => {
    if (favArr.length > 0) setData(favArr);
  };

  const handleFavorite = (value) => {
    const hasFav = favArr.some((fav) => fav.id === value.id);

    if (favArr.length < 5) {
      if (!hasFav) {
        setFavArr(favArr.concat([value]));
      } else {
        const newFavArr = favArr.filter((f) => f.id !== value.id);
        setFavArr(newFavArr);
      }
    }
  };

  return (
    <Wrapper>
      <FilterBar>
        {data.length > 1
          ? `Encontrados ${data.length} heróis`
          : `Encontrado ${data.length} herói`}
        <FilterGroup>
          <IconText
            icon={HeroIcon}
            text="Ordernar por nome - A/Z"
            handleClick={() => handleOrderByName()}
          />
          <IconText
            icon={HeartFilled}
            text="Somente favoritos"
            handleClick={() => handleShowFavs()}
          />
        </FilterGroup>
      </FilterBar>
      <CardWrapper>
        {data.map((character) => {
          const checkFav = favArr.some((item) => item.id === character.id);
          const detailUrl = character.name.toLowerCase().replace(/ /g, '-');
          return (
            <Card>
              <Link
                to={{
                  pathname: `/details/${detailUrl}`,
                  query: { id: character.id },
                }}
              >
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />
              </Link>
              <CardInfo>
                <Link
                  to={{
                    pathname: `/details/${detailUrl}`,
                    query: { id: character.id },
                  }}
                >
                  {character.name}
                </Link>
                <FavIcon
                  src={checkFav ? HeartFilled : HeartEmpty}
                  onClick={() => handleFavorite(character)}
                />
              </CardInfo>
            </Card>
          );
        })}
      </CardWrapper>
    </Wrapper>
  );
};

export default Home;
