import { render, screen } from '@testing-library/react';
import { games } from 'dummies/games';
import { Games } from '~/components/templates';

describe('Games', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Games games={games} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains copy right', () => {
    render(<Games games={games} />);
    const copyRightElement = screen.getByText(/©/);
    expect(copyRightElement).toBeInTheDocument();
  });
});
