import { render, screen } from '@testing-library/react';
import { Home } from 'components/templates';

describe('Home', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains copy right', () => {
    render(<Home />);
    const copyRightElement = screen.getByText(/©/);
    expect(copyRightElement).toBeInTheDocument();
  });
});
