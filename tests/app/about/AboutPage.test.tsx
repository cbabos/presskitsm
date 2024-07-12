import { render, screen } from '@testing-library/react';
import About from '@/app/about/page';

describe('About page', () => {
  it('should render the headear of the About page', () => {
    render(<About />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe('About');
  });
});
