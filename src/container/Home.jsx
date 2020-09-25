import React from 'react';

const Home = ({ characters }) => {
  if (characters === undefined) return <h1>Loading...</h1>;

  const renderList = () => {
    const char = characters.map((character) => <li><img src={character.thumbnail.path} /></li>);

    return char;
  };

  return (
    <>
      <h1>Home</h1>
      <ul>
        {renderList()}
      </ul>

    </>
  );
};

export default Home;
