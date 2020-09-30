import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { fetchCharacters } from './utils/fetchData';

import Home from './container/Home';
import Details from './container/Details';

import Header from './components/Header';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Work Sans', sans-serif;
    background: ${({ color }) => color};

    * {
      box-sizing: border-box;
    }
  }
`;

const App = () => {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    fetchCharacters.then((res) => {
      setCharacters(res);
    });
  }, [characters]);

  return (
    <>
      <GlobalStyle color={pathname !== '/' ? '#E7F6E7' : 'transparent'} />
      <Header />
      <Switch>
        <Route path="/" exact render={() => <Home characters={characters} />} />
        <Route
          path="/details"
          render={() => <Details characters={characters} />}
        />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
