import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import Page from '../page';

test('Vitest + React Testing Library + jest-dom setup works as expected in Next.js app', () => {
  render(<Page />);
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeInTheDocument();
});
