import { MockedProvider } from '@apollo/client/testing';
import { act, render, screen } from '@testing-library/react';
import { ProductItem } from '../components/ProductItem';

describe('ProductItem', () => {
  beforeEach(()=>{
    const mockItem = {
      assets: [{ source: 'Image/url.jpg' }],
      name: 'Product 1',
      description: 'This is some prodcut',
      variants: [{
        name: "Variant 1",
        price: 12000,
        sku: "something",
        id: "1"
      }]
    }
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ProductItem item={mockItem} index={1} />
      </MockedProvider>
    );
  })
  it('renders text for product', async () => {
    expect(screen.queryByText('Product 1')).not.toBeNull();
  });
  it('render text for variant',()=>{
    expect(screen.queryByText(/Variant 1/)).not.toBeNull();
  })
})
