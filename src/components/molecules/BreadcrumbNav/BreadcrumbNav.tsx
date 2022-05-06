import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import ChevronRight from '@mui/icons-material/ChevronRight';
import NextLink from 'next/link';

type Item = {
  name: string;
  path: string;
};

type Props = {
  items: Item[];
};

export const BreadcrumbNav: React.FC<Props> = ({ items }) => (
  <Breadcrumb separator={<ChevronRight />}>
    {items.map((item: Item, index: number) => {
      const isCurrentPage = index === items.length - 1;

      return (
        <BreadcrumbItem key={item.path} isCurrentPage={isCurrentPage} alignItems="flex-start">
          {isCurrentPage ? (
            <BreadcrumbLink href={item.path}>{item.name}</BreadcrumbLink>
          ) : (
            <NextLink href={item.path} passHref>
              <BreadcrumbLink>{item.name}</BreadcrumbLink>
            </NextLink>
          )}
        </BreadcrumbItem>
      );
    })}
  </Breadcrumb>
);
