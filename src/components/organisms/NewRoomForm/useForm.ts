import { useCallback, useMemo, useState } from 'react';

type Visibility = 'public' | 'private';

type UseFormReturnType = {
  gamesMap: Record<string, GameSummary>;
  selectedGame: string;
  visibility: Visibility;
  handleGameChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleVisibilityChange: (value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const useForm = (games: GameSummary[]): UseFormReturnType => {
  const [selectedGame, setSelectedGame] = useState(games[0].slug);
  const [visibility, setVisibility] = useState<Visibility>('public');

  const gamesMap: Record<string, GameSummary> = useMemo(
    () => Object.fromEntries(games.map((game: GameSummary) => [game.slug, game])),
    [games]
  );

  const handleGameChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGame(event.target.value);
  }, []);

  const handleVisibilityChange = useCallback((value: string) => {
    if (value !== 'public' && value !== 'private') {
      return;
    }

    setVisibility(value);
  }, []);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.info(selectedGame, visibility);
    },
    [selectedGame, visibility]
  );

  return {
    gamesMap,
    selectedGame,
    visibility,
    handleGameChange,
    handleVisibilityChange,
    handleSubmit,
  };
};
