import { getProducts } from 'lib/shopify';

export default async function Products() {
  const allProducts = await getProducts({ query: '' });
  return (
    <div>
      <h1>All Products</h1>
      <div className="">
        {allProducts.map((p) => {
          return <li key={p.id}>{p.title}</li>;
        })}
      </div>
    </div>
  );
}
