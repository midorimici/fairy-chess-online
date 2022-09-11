import { Heading } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Container } from '~/components/molecules';
import { NewRoomForm } from '~/components/organisms';

type Props = {
  games: GameSummary[];
};

export const NewRoom: React.FC<Props> = ({ games }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Heading mb={4}>{t('create-room')}</Heading>
      <NewRoomForm games={games} />
    </Container>
  );
};
