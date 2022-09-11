import { render } from '@testing-library/react';
import { games } from 'dummies/games';
import { NewRoomForm } from '~/components/organisms';

it('renders NewRoomForm unchanged', () => {
  const { asFragment } = render(<NewRoomForm games={games} />);
  expect(asFragment()).toMatchSnapshot();
});
