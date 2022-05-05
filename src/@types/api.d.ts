type Game = {
  slug: string;
  name: string;
  description: string;
  initialBoardImage: {
    url: string;
    width: number;
    height: number;
  };
};

type GamesResponse = {
  games: Game[];
};

type GameResponse = {
  game: Game;
};
