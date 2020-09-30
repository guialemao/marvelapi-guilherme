import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import IconText from '../index';

afterEach(cleanup);

const mockComponent = {
  icon: 'noun_Superhero_2227044@3x.77c63509.png',
  text: 'Ordernar por nome - A/Z',
  handleClick: jest.fn(),
  orderedArray: [
    { id: 101134, name: '3-D Man' },
    { id: 1017100, name: 'A-Bomb (HAS)' },
  ],
  reverseOrderedArray: [
    { id: 1017100, name: 'A-Bomb (HAS)' },
    { id: 101134, name: '3-D Man' },
  ],
};
const { icon, text, handleClick } = mockComponent;

const component = (
  <IconText
    data-testid="order-by-name"
    icon={icon}
    text={text}
    handleClick={handleClick}
  />
);

describe('Testing Footer component', () => {
  it('should create a snapshot', () => {
    const { asFragment } = render(component);

    expect(asFragment(component)).toMatchSnapshot();
  });

  it('check if text is correct', () => {
    const { getByText } = render(component);
    expect(getByText('Ordernar por nome - A/Z')).toBeTruthy();
  });

  it('test order of array on click', () => {
    const { getByTestId } = render(component);
    fireEvent.click(getByTestId('order-by-name'));

    expect(handleClick).toHaveBeenCalled();
  });
});
