import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

import fetchCharacters from './utils/fetchCharacters';

import Home from './container/Home';

import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Work Sans', sans-serif;

    * {
      box-sizing: border-box;
    }
  }
`;

const App = () => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    fetchCharacters.then((res) => {
      setCharacters(res);
    });
  }, [characters]);

  return (
    <>
      <GlobalStyle />
      <Home characters={characters} />
      <Footer />
    </>
  );
};

export default App;
