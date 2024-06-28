import ProductView from 'components/products-view';
import { getProducts } from 'lib/shopify';
import { Product } from 'lib/shopify/types';

export const revalidate = 0;

export default async function Products() {
  const allProducts: Product[] = await getProducts({ query: '' });
  return (
    <>
      <ProductView productList={allProducts} />
    </>
  );
}
