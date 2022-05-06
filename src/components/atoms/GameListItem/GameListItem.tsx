import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';

type Props = {
  game: Game;
};

export const GameListItem: React.FC<Props> = ({ game }) => {
  const boardImage = game.initialBoardImage;

  return (
    <LinkBox
      display="flex"
      justifyContent="space-between"
      borderWidth={1}
      rounded="md"
      overflow="hidden"
      transitionDuration=".2s"
      _hover={{ bgColor: 'gray.50' }}
    >
      <Box p={4}>
        <NextLink href={`/games/${game.slug}`} passHref>
          <LinkOverlay fontSize="2xl" _before={{ zIndex: 1 }}>
            {game.name}
          </LinkOverlay>
        </NextLink>
        <Text>{game.description}</Text>
      </Box>
      <Image src={boardImage.url} width={boardImage.width} height={boardImage.height} />
    </LinkBox>
  );
};
