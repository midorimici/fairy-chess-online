type GameSummary = {
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
  games: GameSummary[];
};

type GameDetail = GameSummary;

type GameResponse = {
  game: GameDetail;
};

type NewRoomResponse = {
  games: GameSummary[];
};
