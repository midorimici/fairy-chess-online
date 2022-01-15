import { Box, Container } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Footer } from 'components/atoms';

type Props = {
  children: React.ReactNode;
};

export const Cont: React.FC<Props> = ({ children }) => {
  const { t } = useTranslation();
  const currentYearLastTwoDigits = new Date().getFullYear() - 2000;

  return (
    <Container
      maxW={{ base: 'container.sm', md: 'container.md', lg: 'container.lg' }}
      display="flex"
      flexDir="column"
      minH="100vh"
      py={4}
    >
      <Box as="main" flexGrow={1}>
        {children}
      </Box>
      <Footer>
        &copy;
        {` 2022-${currentYearLastTwoDigits} ${t('midorimici')}`}
      </Footer>
    </Container>
  );
};
