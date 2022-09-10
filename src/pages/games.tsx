import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { Namespace } from 'react-i18next';
import { Games } from '~/components/templates';
import { fetchGql } from '~/lib/hygraph';

type Props = {
  games: GameSummary[];
};

const GamesPage: NextPage<Props> = ({ games }) => <Games games={games} />;

export default GamesPage;

const namespaces: Namespace = ['common'];

export const getStaticProps: GetStaticProps<{ games: GameSummary[] }, { slug: string }> = async ({
  locale,
}) => {
  const data = await fetchGql<GamesResponse>(`
    {
      games {
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
      games: data.games,
      ...(await serverSideTranslations(locale ?? 'en', namespaces)),
    },
  };
};
