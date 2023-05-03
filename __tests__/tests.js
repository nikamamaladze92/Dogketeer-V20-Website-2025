import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { test, expect, describe, jest, beforeEach, mock } from '@jest/globals';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import 'intersection-observer';
import App from '../src/App';
import Features from '../src/components/Features/Features';
import Demo from '../src/components/Demo/Demo';
import DemoToggle from '../src/components/Demo/DemoToggle';

// jest.mock('../../assets/containers-demo.gif', () => 'containersGif', {
//   virtual: true,
// });
// jest.mock('../../assets/images-demo.gif', () => 'imagesGif', { virtual: true });
// jest.mock('../../assets/containermetrics-demo.gif',() => 'containerMetricsGif');
// jest.mock('../../assets/k8smetrics-demo.gif', () => 'clusterMetricsGif');
// jest.mock('../../assets/logs-demo.gif', () => 'logsGif');

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

  // describe('Demo', () => {
  //   const setCurrentGif = jest.fn((num) => {
  //     return num;
  //   });

  //   beforeEach(() => {
  //     render(
  //       <DemoToggle
  //         setCurrentGif={(num) => setCurrentGif(num)}
  //         currentGif={0}
  //       />
  //     );
  //   });

  //   test('containers button shows containers demo', () => {
  //     fireEvent.click(screen.getByText('Containers'));
  //     expect(setCurrentGif(0)).toBe(DemoToggle.currentGif);
  //   });

  //   //   test('image button shows image demo', () => {
  //   //     const { getByText } = render(
  //   //       <DemoToggle setCurrentGif={() => setCurrentGif(1)} />
  //   //     );
  //   //     fireEvent.click(getByText('Images'));
  //   //     expect(setCurrentGif).toHaveBeenCalledWith(1);
  //   //   });

  //   //   test('container metrics button shows container metrics demo', () => {
  //   //     const { getByText } = render(
  //   //       <DemoToggle setCurrentGif={() => setCurrentGif(2)} />
  //   //     );
  //   //     fireEvent.click(getByText('Images'));
  //   //     expect(setCurrentGif).toHaveBeenCalledWith(2);
  //   //   });

  //   //   test('cluster metrics button shows cluster metrics demo', () => {
  //   //     const { getByText } = render(
  //   //       <DemoToggle setCurrentGif={() => setCurrentGif(3)} />
  //   //     );
  //   //     fireEvent.click(getByText('Images'));
  //   //     expect(setCurrentGif).toHaveBeenCalledWith(3);
  //   //   });
  //   //   test('process logs button shows process logs demo', () => {
  //   //     const { getByText } = render(
  //   //       <DemoToggle setCurrentGif={() => setCurrentGif(4)} />
  //   //     );
  //   //     fireEvent.click(getByText('Process Logs'));
  //   //     expect(setCurrentGif).toHaveBeenCalledWith(4);
  //   //   });
  // });
});
