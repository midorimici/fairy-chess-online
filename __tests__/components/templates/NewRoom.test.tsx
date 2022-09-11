import { render, screen } from '@testing-library/react';
import { games } from 'dummies/games';
import { NewRoom } from '~/components/templates';

describe('NewRoom', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<NewRoom games={games} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains copy right', () => {
    render(<NewRoom games={games} />);
    const copyRightElement = screen.getByText(/©/);
    expect(copyRightElement).toBeInTheDocument();
  });
});
