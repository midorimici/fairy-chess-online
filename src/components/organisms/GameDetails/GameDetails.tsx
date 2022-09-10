import { Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

type Props = {
  game: GameDetail;
};

export const GameDetails: React.FC<Props> = ({ game }) => (
  <VStack alignItems="flex-start" gap={2} flexGrow={1}>
    <Image
      src={game.initialBoardImage.url}
      alt={game.name}
      width={game.initialBoardImage.width}
      height={game.initialBoardImage.height}
    />
    <Text fontSize="2xl">{game.name}</Text>
    <Text>{game.description}</Text>
  </VStack>
);
