import { Button, HStack, VStack } from '@chakra-ui/react';
import Language from '@mui/icons-material/Language';
import Lock from '@mui/icons-material/Lock';
import { useTranslation } from 'next-i18next';
import { BreadcrumbNav, Container } from '~/components/molecules';
import { GameDetails } from '~/components/organisms';

type Props = {
  game: GameDetail;
};

export const Game: React.FC<Props> = ({ game }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <VStack alignItems="stretch" spacing={4}>
        <BreadcrumbNav
          items={[
            {
              name: t('games'),
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
              {t('play-public')}
            </Button>
            <Button size="lg" leftIcon={<Lock />}>
              {t('play-private')}
            </Button>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};
