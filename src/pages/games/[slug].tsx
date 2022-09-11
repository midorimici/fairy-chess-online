import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { Namespace } from 'react-i18next';
import { i18n } from 'next-i18next.config';
import { Game } from '~/components/templates';
import { fetchGql } from '~/lib/hygraph';

const GamePage: NextPage<GameResponse> = ({ game }) => <Game game={game} />;

export default GamePage;

const namespaces: Namespace = ['common'];

export const getStaticProps: GetStaticProps<{ game: Game }, { slug: string }> = async ({
  params,
  locale,
}) => {
  if (params === undefined) {
    return {
      notFound: true,
    };
  }

  const data = await fetchGql<GameResponse>(`
    {
      game(where: {slug: "${params.slug}"}) {
        slug
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
      game: data.game,
      ...(await serverSideTranslations(locale ?? 'en', namespaces)),
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const data = await fetchGql<{ games: { slug: string }[] }>(`
    {
      games {
        slug
      }
    }
  `);

  const paths = data.games
    .map((game: { slug: string }) =>
      i18n.locales.map((locale: string) => ({ params: { slug: game.slug }, locale }))
    )
    .flat();

  return {
    paths,
    fallback: false,
  };
};
