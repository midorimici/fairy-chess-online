import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Select,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import NextLink from 'next/link';
import { useForm } from './useForm';

type Props = {
  games: GameSummary[];
};

export const NewRoomForm: React.FC<Props> = ({ games }) => {
  const { t } = useTranslation('new-room');

  const {
    gamesMap,
    selectedGame,
    visibility,
    handleGameChange,
    handleVisibilityChange,
    handleSubmit,
  } = useForm(games);
  const gameImage = gamesMap[selectedGame].initialBoardImage;

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap={8} justify="space-between">
        <VStack spacing={8} flexGrow={1}>
          <FormControl isRequired>
            <FormLabel>{t('game-type')}</FormLabel>
            <Select defaultValue={games[0].slug} onChange={handleGameChange}>
              {games.map((game: GameSummary) => (
                <option key={game.slug} value={game.slug}>
                  {game.name}
                </option>
              ))}
            </Select>
            <FormHelperText>{gamesMap[selectedGame].description}</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>{t('room-visibility')}</FormLabel>
            <RadioGroup
              colorScheme="orange"
              defaultValue="public"
              onChange={handleVisibilityChange}
            >
              <HStack spacing={4}>
                <Radio value="public">{t('public')}</Radio>
                <Radio value="private">{t('private')}</Radio>
              </HStack>
            </RadioGroup>
            <FormHelperText>{t(`${visibility}-description`)}</FormHelperText>
          </FormControl>
          <Button colorScheme="orange" type="submit">
            {t('create')}
          </Button>
        </VStack>
        <NextLink href={`/games/${selectedGame}`} passHref>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <Image
              src={gameImage.url}
              width={gameImage.width}
              height={gameImage.height}
              title={t('see-game-details')}
            />
          </a>
        </NextLink>
      </Flex>
    </form>
  );
};
