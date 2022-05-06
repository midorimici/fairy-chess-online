import { render } from '@testing-library/react';
import { items } from 'dummies/breadcrumbItems';
import { BreadcrumbNav } from '~/components/molecules';

it('renders BreadcrumbNav unchanged', () => {
  const { asFragment } = render(<BreadcrumbNav items={items} />);
  expect(asFragment()).toMatchSnapshot();
});
