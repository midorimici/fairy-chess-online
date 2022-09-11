import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { Namespace } from 'react-i18next';
import { NewRoom } from '~/components/templates';
import { fetchGql } from '~/lib/hygraph';

type Props = {
  games: GameSummary[];
};

const NewRoomPage: NextPage<Props> = ({ games }) => <NewRoom games={games} />;

export default NewRoomPage;

const namespaces: Namespace = ['common', 'new-room'];

export const getStaticProps: GetStaticProps<{ games: GameSummary[] }, { slug: string }> = async ({
  locale,
}) => {
  const data = await fetchGql<NewRoomResponse>(`
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
