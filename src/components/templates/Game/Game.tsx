import { Button, HStack, VStack } from '@chakra-ui/react';
import Language from '@mui/icons-material/Language';
import Lock from '@mui/icons-material/Lock';
import { BreadcrumbNav, Container } from '~/components/molecules';
import { GameDetails } from '~/components/organisms';

type Props = {
  game: Game;
};

export const Game: React.FC<Props> = ({ game }) => (
  <Container>
    <VStack alignItems="stretch" spacing={4}>
      <BreadcrumbNav
        items={[
          {
            name: 'Games',
            path: '/games',
          },
          {
            name: game.name,
            path: '',
          },
        ]}
      />
      <HStack alignItems="flex-start">
        <GameDetails game={game} />
        <VStack alignItems="stretch" spacing={4}>
          <Button size="lg" leftIcon={<Language />}>
            Play in a public room
          </Button>
          <Button size="lg" leftIcon={<Lock />}>
            Play in a private room
          </Button>
        </VStack>
      </HStack>
    </VStack>
  </Container>
);
