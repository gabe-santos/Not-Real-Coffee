import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';

import { Product } from 'lib/shopify/types';
import { Suspense } from 'react';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <Price
          amount={product.priceRange.maxVariantPrice.amount}
          currencyCode={product.priceRange.maxVariantPrice.currencyCode}
        />
      </div>

      {product.descriptionHtml ? <div>{product.descriptionHtml}</div> : null}

      <Suspense fallback={null}>
        <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      </Suspense>
    </>
  );
}
