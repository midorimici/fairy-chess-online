import { Heading } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Container, GameList } from '~/components/molecules';

type Props = {
  games: Game[];
};

export const Games: React.FC<Props> = ({ games }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Heading mb={4}>{t('games')}</Heading>
      <GameList games={games} />
    </Container>
  );
};
