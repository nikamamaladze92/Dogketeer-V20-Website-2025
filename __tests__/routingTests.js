import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import jest from 'jest';

import 'intersection-observer';
import { useInView } from 'react-intersection-observer';
import App from '../src/App';
import Features from '../src/components/Features/Features';

test('Test that expected text is rendered', async () => {
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
  expect(getAllByText('Read about us on Medium!').length).toBe(1);

  //   fireEvent.click(getByText('Start Exploring'));
  //   expect(getByText('About page')).toBeInTheDocument();
});

jest.mock('react-intersection-observer', () => ({
  useInView: jest.fn(),
}));

test('renders all feature cards', () => {
  useInView.mockReturnValueOnce({ ref: jest.fn(), inView: true });

  const { getAllByTestId } = render(<Features />);
  const featureCards = getAllByTestId('feature-card');
  console.log(featureCards);
});
