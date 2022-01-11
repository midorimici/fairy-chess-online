import { render } from '@testing-library/react';
import { Footer } from 'components/atoms';

it('renders Footer unchanged', () => {
  const { asFragment } = render(<Footer>Main contents</Footer>);
  expect(asFragment()).toMatchSnapshot();
});
