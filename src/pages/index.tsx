import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { Namespace } from 'react-i18next';
import { Home } from '~/components/templates';

const HomePage: NextPage = () => <Home />;

export default HomePage;

const namespaces: Namespace = ['common'];

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', namespaces)),
  },
});
