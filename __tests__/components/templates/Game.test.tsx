import { render, screen } from '@testing-library/react';
import { game } from 'dummies/game';
import { Game } from '~/components/templates';

describe('Game', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Game game={game} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains copy right', () => {
    render(<Game game={game} />);
    const copyRightElement = screen.getByText(/©/);
    expect(copyRightElement).toBeInTheDocument();
  });
});
