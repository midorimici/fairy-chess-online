import { Link } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import { Container } from 'components/molecules';

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <NextLink href="/games" passHref>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link>{t('games')}</Link>
      </NextLink>
    </Container>
  );
};
