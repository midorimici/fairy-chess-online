import { render } from '@testing-library/react';
import { Container } from '~/components/molecules';

it('renders Container unchanged', () => {
  const { asFragment } = render(<Container>Main contents</Container>);
  expect(asFragment()).toMatchSnapshot();
});
