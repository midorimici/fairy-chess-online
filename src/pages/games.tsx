import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { Namespace } from 'react-i18next';
import { fetchGql } from '~/lib/graphcms';

type Props = {
  games: Game[];
};

const GamesPage: NextPage<Props> = ({ games }) => (
  <ul>
    {games.map((game: Game) => (
      <div key={game.id}>
        <li>{game.name}</li>
        <li>{game.description}</li>
      </div>
    ))}
  </ul>
);

export default GamesPage;

const namespaces: Namespace = ['common'];

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data = await fetchGql<GamesResponse>(`
    {
      games {
        id
        name
        description
        initialBoardImage {
          url
          width
          height
        }
      }
    }
  `);

  return {
    props: {
      games: data.games,
      ...(await serverSideTranslations(locale ?? 'en', namespaces)),
    },
  };
};
