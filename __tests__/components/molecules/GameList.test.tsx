import { render } from '@testing-library/react';
import { games } from 'dummies/games';
import { GameList } from '~/components/molecules';

it('renders GameList unchanged', () => {
  const { asFragment } = render(<GameList games={games} />);
  expect(asFragment()).toMatchSnapshot();
});
