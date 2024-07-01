import { notFound } from 'next/navigation';

import { ProductDescription } from 'components/product/product-description';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { Button } from 'components/ui/button';
import Price from 'components/price';
import { Product } from 'lib/shopify/types';
import { AddToCart } from 'components/cart/add-to-cart';
import { CanVariantSelector } from 'components/product/can-variant-selector';

type ColdBrewCan = Product & {
  caffeine_level: number;
  tasting_notes: string;
  sweetness: number;
};

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();
  console.log(product);

  const coldBrewCan: ColdBrewCan = {
    ...product,
    caffeine_level: product.caffeine_level?.value,
    tasting_notes: product.tasting_notes?.value,
    sweetness: product.sweetness?.value
  };

  return (
    <>
      <div className="mt-2xl flex w-full max-w-screen flex-col gap-lg px-lg md:flex-row">
        <div className="h-[968px] w-full basis-full overflow-hidden ">
          <Suspense
            fallback={
              <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
            }
          >
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText}
              width={2000}
              height={2000}
              className="h-full w-auto object-cover"
            />
          </Suspense>
        </div>

        <div className="flex w-full basis-full flex-col items-center justify-end">
          <div className="flex w-full max-w-[500px] flex-col">
            {/* <ProductDescription product={product} /> */}
            <h1 className="text-lg font-medium uppercase">{product.title}</h1>
            <p className="border-b border-black py-sm text-sm">TOTAL PRICE GOES HERE</p>
            <div className="flex justify-between py-sm">
              <CanVariantSelector options={product.options} variants={product.variants} />
              <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
            </div>
            <div className="flex flex-col gap-3xs border-b border-black py-sm">
              <h2 className="text-sm font-semibold uppercase">Details</h2>
              <p className="text-sm leading-tight">{product.description}</p>
            </div>
            {product.tags.includes('cold_brew_can') && (
              <div className="flex justify-between gap-sm border-b border-black py-sm">
                <div className="w-full">
                  <h3 className="text-sm font-semibold uppercase">Taste</h3>
                  <p className="text-sm leading-tight">{coldBrewCan.tasting_notes}</p>
                </div>
                <div className="w-full">
                  <h2 className="text-sm font-semibold uppercase">Stats</h2>
                  <div className="flex flex-col">
                    <StatRating label="Caffeine" value={coldBrewCan.caffeine_level} />
                    <StatRating label="Sweetness" value={coldBrewCan.sweetness} />
                  </div>
                </div>
              </div>
            )}
          </div>
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

const StatRating = ({ label, value }: { label: string; value: number }) => {
  // Ensure value is between 1 and 5
  const clampedValue = Math.max(1, Math.min(5, value));

  return (
    <div className="flex w-full max-w-md items-center justify-between">
      <span className="text-sm uppercase">{label}</span>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index < clampedValue ? 'bg-black' : 'border border-black bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
