import { render } from '@testing-library/react';
import { game } from 'dummies/game';
import { GameListItem } from '~/components/atoms';

it('renders GameListItem unchanged', () => {
  const { asFragment } = render(<GameListItem game={game} />);
  expect(asFragment()).toMatchSnapshot();
});
