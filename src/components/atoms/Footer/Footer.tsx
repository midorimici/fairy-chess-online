import { Center } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

export const Footer: React.FC<Props> = ({ children }) => <Center>{children}</Center>;
