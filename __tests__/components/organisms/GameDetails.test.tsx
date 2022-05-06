import { render } from '@testing-library/react';
import { game } from 'dummies/game';
import { GameDetails } from '~/components/organisms';

it('renders GameDetails unchanged', () => {
  const { asFragment } = render(<GameDetails game={game} />);
  expect(asFragment()).toMatchSnapshot();
});
