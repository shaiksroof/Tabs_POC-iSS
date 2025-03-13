import React from 'react';
import { render } from "@testing-library/react";
import App from '../App.jsx';

test("renders App component without crashing", () => {
  const { getByText } = render(<App />);
  expect(getByText(/LOREM IPSUM DOLOR SIT AMET/i)).toBeInTheDocument();
});

