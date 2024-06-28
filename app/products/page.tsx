import ProductView from 'components/products-view';
import { getProducts } from 'lib/shopify';
import { Product } from 'lib/shopify/types';

export const revalidate = 0;

export default async function Products() {
  const allProducts: Product[] = await getProducts({ query: '' });
  return (
    <div className="mt-2xl h-full px-sm py-md">
      <ProductView productList={allProducts} />
      <section className="h-full"></section>
    </div>
  );
}
