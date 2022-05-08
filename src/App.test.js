/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import Banner from './components/Banner';
import Spinner from './components/Spinner';

test('renders Banner', () => {
  render(<Banner />);
  const banner = screen.getByTestId('banner');
  
  expect(banner).toBeInTheDocument();
});
test('renders Spinner', () => {
  render(<Spinner />);
  const spinner = screen.getByTestId('spinner');
  
  expect(spinner).toBeInTheDocument();
});
