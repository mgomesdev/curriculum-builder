import { render, screen } from '@testing-library/react';

test('Button Component', () => {
  render(<button>botão</button>);
  expect(screen.getByRole('button', { name: 'botão' }));
});
