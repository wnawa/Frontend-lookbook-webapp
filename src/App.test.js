import React from 'react'
import { render, screen } from '@testing-library/react'
// import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event'
import App  from './App.js'
test('renders Logo element', () => {
  render(<App />);
  expect(screen.getByRole('Logo')).toBeDefined();
 
});