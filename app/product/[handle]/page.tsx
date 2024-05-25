import { notFound } from 'next/navigation';

import { ProductDescription } from 'components/product/product-description';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="h-full w-full basis-full lg:basis-4/6">
          <Suspense
            fallback={
              <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
            }
          >
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText}
              width={800}
              height={800}
              className="w-full"
            />
          </Suspense>
        </div>

        <div className="basis-full lg:basis-2/6">
          <ProductDescription product={product} />
        </div>
      </div>
      <RelatedProducts id={product.id} />
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {relatedProducts.map((product) => (
          <li
            key={product.handle}
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link className="relative h-full w-full" href={`/product/${product.handle}`}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
