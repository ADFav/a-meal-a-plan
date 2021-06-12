import { render, screen } from '@testing-library/react';
import App from './App';

test("whole app doesn't crash", () => {
  render(<App />);
  expect(true).toBeTruthy();
});
