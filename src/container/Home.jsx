import React, { useState, useEffect } from 'react';

const Home = ({ characters }) => {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState(false);
  const [favArr, setFavArr] = useState([]);
  const [currentFavID, setCurrentFavID] = useState();

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

  const handleFavorite = (id) => {
    setCurrentFavID(id);
    if (favArr.length < 5) {
      if (currentFavID !== id) {
        setFavArr(favArr.concat([{ id }]));
      }
    }
  };

  console.log({ currentFavID });

  console.log('depois', favArr);

  return (
    <>
      <h1>Home</h1>
      <span onClick={() => handleOrderByName()}>Ordernar por nome A/Z</span>
      <br />
      <span>Listar por favoritos</span>
      <ul>
        {data.map((character) => (
          <li>
            {character.name}
            <span onClick={() => handleFavorite(character.id)}> favoritar</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
