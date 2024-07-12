import { InnerLayout, metadata } from '@/app/layout';
import { render } from '@testing-library/react';

describe('Root layout', () => {
  it('should render the main layout with navigation', () => {
    const { getByText } = render(InnerLayout(<h1>Hello world</h1>));
    expect(getByText('Home')).toBeInTheDocument();
  });

  it('should have proper metadata', () => {
    expect(metadata.title).toStrictEqual('PressKit SM Home');
  });
});
