import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Home from '../index';

afterEach(cleanup);

const thumbnail = {
  path: '',
  extension: '',
};

const history = createMemoryHistory();

const mockComponent = {
  orderedArray: [
    { id: 101134, name: '3-D Man', thumbnail },
    { id: 1017100, name: 'A-Bomb (HAS)', thumbnail },
  ],
};

const { orderedArray } = mockComponent;

const getComponent = (characters) => (
  <Router history={history}>
    <Home characters={characters} />
  </Router>
);

describe('Testing Home Container', () => {
  it('test amount of chars returned with 1 character', () => {
    const component = getComponent([orderedArray[0]]);
    const { getByText } = render(component);
    expect(getByText('Encontrado 1 herói')).toBeTruthy();
  });

  it('test amount of chars returned with > 1 character', () => {
    const component = getComponent(orderedArray);
    const { getByText } = render(component);
    expect(getByText('Encontrados 2 heróis')).toBeTruthy();
  });
});
