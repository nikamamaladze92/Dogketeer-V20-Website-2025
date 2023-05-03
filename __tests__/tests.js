import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { test, expect, describe, jest, beforeEach } from '@jest/globals';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import 'intersection-observer';
import App from '../src/App';
import Features from '../src/components/Features/Features';
import DemoToggle from '../src/components/Demo/DemoToggle';

describe('Website', () => {
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
  });

  describe('Features', () => {
    test('renders all feature cards', () => {
      const { getAllByTestId } = render(<Features />);
      const featureCards = getAllByTestId('feature-card');
      expect(featureCards.length).toBe(8);
    });
  });

  describe('Demo', () => {
    const setCurrentGif = jest.fn();

    beforeEach(() => {
      render(<DemoToggle setCurrentGif={setCurrentGif} currentGif={0} />);
    });

    test('containers button shows containers demo', () => {
      fireEvent.click(screen.getByText('Containers'));
      expect(setCurrentGif).toHaveBeenCalledWith(0);
    });

    test('images button shows containers demo', () => {
      fireEvent.click(screen.getByText('Images'));
      expect(setCurrentGif).toHaveBeenCalledWith(1);
    });

    test('container metrics button shows containers demo', () => {
      fireEvent.click(screen.getByText('Container Metrics'));
      expect(setCurrentGif).toHaveBeenCalledWith(2);
    });

    test('cluster metrics button shows containers demo', () => {
      fireEvent.click(screen.getByText('Cluster Metrics'));
      expect(setCurrentGif).toHaveBeenCalledWith(3);
    });

    test('process logs shows containers process logs', () => {
      fireEvent.click(screen.getByText('Process Logs'));
      expect(setCurrentGif).toHaveBeenCalledWith(4);
    });
  });
});
