type Game = {
  id: string;
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
