import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Body from './Components/Body/Body';
import Main from './Components/Body/Main/Main';
import NavigationBar from './Components/Body/Navigation/NavigationBar';
import Page1 from  './Components/Body/Main/Page1/Page1';
import Page2 from './Components/Body/Main/Page2/Page2';
import Page3 from './Components/Body/Main/Page3/Page3';
import Page4 from './Components/Body/Main/Page4/Page4';
import Page5 from './Components/Body/Main/Page5/Page5';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    screen.debug();
  });
});

describe('Body', () => {
  test('renders App component', () => {
    render(<Body />);
    screen.debug();
  });
});

describe('Main', () => {
  test('renders Main component', () => {
    render(<Main />);
    screen.debug();
  });
});

describe('NavigationBar', () => {
  test('renders Navigation component', () => {
    render(<NavigationBar />);
    screen.debug();
  });
});

describe('Page1', () => {
  test('renders Page1 component', () => {
    render(<Page1 />);
    screen.debug();
  });
});

describe('Page2', () => {
  test('renders Page2 component', () => {
    render(<Page2 />);
    screen.debug();
  });
});

describe('Page3', () => {
  test('renders Page3 component', () => {
    render(<Page3 />);
    screen.debug();
  });
});

describe('Page4', () => {
  test('renders Page4 component', () => {
    render(<Page4 />);
    screen.debug();
  });
});

describe('Page5', () => {
  test('renders Page5 component', () => {
    render(<Page5 />);
    screen.debug();
  });
});
