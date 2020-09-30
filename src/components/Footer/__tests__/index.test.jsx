import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Footer from '../index';

afterEach(cleanup);

describe('Testing Footer component', () => {
  it('should create a snapshot', () => {
    const { asFragment } = render(<Footer />);

    expect(asFragment(<Footer />)).toMatchSnapshot();
  });
});
