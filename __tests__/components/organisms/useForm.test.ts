import { act, renderHook } from '@testing-library/react';
import { games, gamesMap } from 'dummies/games';
import { useForm, type UseFormReturnType } from '~/components/organisms/NewRoomForm/useForm';

let result: { current: UseFormReturnType };

describe('useForm', () => {
  beforeEach(() => {
    ({ result } = renderHook(() => useForm(games)));
  });

  it('returns values correctly at first', () => {
    const { gamesMap: map, selectedGame, visibility } = result.current;

    expect(map).toStrictEqual(gamesMap);
    expect(selectedGame).toBe(games[0].slug);
    expect(visibility).toBe('public');
  });

  it('updates selectedGame correctly after handleGameChange is called', () => {
    const { handleGameChange } = result.current;
    const mockEvent = jest.fn(() => ({
      target: {
        value: games[1].slug,
      },
    })) as unknown as () => React.ChangeEvent<HTMLSelectElement>;

    act(() => handleGameChange(mockEvent()));

    const { selectedGame } = result.current;
    expect(selectedGame).toBe(games[1].slug);
  });

  it('updates visibility correctly after handleVisibilityChange is called with a valid value', () => {
    const { handleVisibilityChange } = result.current;

    act(() => handleVisibilityChange('private'));

    const { visibility } = result.current;
    expect(visibility).toBe('private');
  });

  it('returns visibility correctly after handleVisibilityChange is called with an invalid value', () => {
    const { handleVisibilityChange } = result.current;

    act(() => handleVisibilityChange('invalid'));

    const { visibility } = result.current;
    expect(visibility).toBe('public');
  });
});
