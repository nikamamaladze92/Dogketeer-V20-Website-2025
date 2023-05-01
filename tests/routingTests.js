import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import { MemoryRouter, Route } from 'react-router-dom';
import App from './App';

test('clicking on a link takes the user to the correct page', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <Route path="/">
        <App />
      </Route>
    </MemoryRouter>
  );

  fireEvent.click(getByText('About'));

  expect(getByText('About page')).toBeInTheDocument();
});
