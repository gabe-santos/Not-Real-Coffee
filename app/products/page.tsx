import ProductView from 'components/products-view';
import { getProducts } from 'lib/shopify';
import { Product } from 'lib/shopify/types';

export default async function Products() {
  const allProducts: Product[] = await getProducts({ query: '' });
  return (
    <div>
      <ProductView productList={allProducts} />
    </div>
  );
}
