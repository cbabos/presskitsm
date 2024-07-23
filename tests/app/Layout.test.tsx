import InnerLayout from '@/app/InnerLayout';
import { metadata } from '@/app/layout';
import { render } from '@testing-library/react';

jest.mock('../../src/components/LoginBtn');

describe('InnerLayout', () => {

  it('should render the main layout with navigation', () => {
    const { getByText } = render(<InnerLayout><h1>Hello world</h1></InnerLayout>);
    expect(getByText('Home')).toBeInTheDocument();
  });

  it('should have proper metadata', () => {
    expect(metadata.title).toStrictEqual('PressKit SM Home');
  });
});
