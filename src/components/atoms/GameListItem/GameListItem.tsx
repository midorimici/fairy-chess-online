import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

type Props = {
  game: Game;
};

export const GameListItem: React.FC<Props> = ({ game }) => {
  const boardImage = game.initialBoardImage;

  return (
    <Flex justifyContent="space-between">
      <Box p={4}>
        <Text fontSize="2xl">{game.name}</Text>
        <Text>{game.description}</Text>
      </Box>
      <Image src={boardImage.url} width={boardImage.width} height={boardImage.height} />
    </Flex>
  );
};
