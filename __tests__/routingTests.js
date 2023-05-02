import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import 'intersection-observer';
import App from '../src/App';
import Features from '../src/components/Features/Features';

test('Test that headings and navigation buttons are rendered', async () => {
  const { getAllByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </MemoryRouter>
  );
  expect(getAllByText('Home').length).toBe(1);
  expect(getAllByText('Features').length).toBe(2);
  expect(getAllByText('Demo').length).toBe(1);
  expect(getAllByText('Get Started').length).toBe(2);
  expect(getAllByText('Team').length).toBe(1);
  expect(getAllByText('Start Exploring').length).toBe(1);
  expect(getAllByText('See Docketeer in Action').length).toBe(1);
  expect(getAllByText('Read about us on Medium!').length).toBe(1);
  expect(getAllByText('The Team Behind Docketeer XII').length).toBe(1);
  expect(getAllByText('Meet All Our Engineers').length).toBe(1);

  //   fireEvent.click(getByText('Start Exploring'));
  //   expect(getByText('About page')).toBeInTheDocument();
});

test('renders all feature cards', () => {
  const { getAllByTestId } = render(<Features />);
  const featureCards = getAllByTestId('feature-card');
  expect(featureCards.length).toBe(8);
});
