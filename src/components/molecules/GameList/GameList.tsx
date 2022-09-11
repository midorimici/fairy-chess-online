import { Stack } from '@chakra-ui/react';
import { GameListItem } from '~/components/atoms';

type Props = {
  games: GameSummary[];
};

export const GameList: React.FC<Props> = ({ games }) => (
  <Stack spacing={8}>
    {games.map((game: GameSummary) => (
      <GameListItem key={game.slug} game={game} />
    ))}
  </Stack>
);
