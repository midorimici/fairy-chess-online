import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Container } from 'components/molecules';

export const Home: React.FC = () => (
  <Container>
    <NextLink href="/games" passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link>Games</Link>
    </NextLink>
  </Container>
);
