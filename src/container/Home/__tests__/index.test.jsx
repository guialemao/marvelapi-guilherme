import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Home from '../index';

afterEach(cleanup);

const mockComponent = {
  orderedArray: [
    { id: 101134, name: '3-D Man' },
    { id: 1017100, name: 'A-Bomb (HAS)' },
  ],
};

const { orderedArray } = mockComponent;

const component = <Home characters={orderedArray[0]} />;

describe('Testing Home Container', () => {
  it('test amount of chars returned', () => {
    const { getByTex } = render(component);
    expect(getByTex('Encontrado 1 herói')).toBeTruthy();
  });
});
