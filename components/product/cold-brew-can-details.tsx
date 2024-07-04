'use client';
import { useState, useEffect } from 'react';
import { Product, ProductVariant } from 'lib/shopify/types';
import { CanVariantSelector } from './can-variant-selector';
import { AddToCart } from 'components/cart/add-to-cart';
import StatRating from 'components/ui/stat-rating';
import { useSearchParams } from 'next/navigation';
import Price from 'components/price';

interface ColdBrewCan extends Product {
  tasting_notes?: {
    value: string;
  };
  caffeine_level?: {
    value: number;
  };
  sweetness?: {
    value: number;
  };
  boldness?: {
    value: number;
  };
  complexity?: {
    value: number;
  };
}

export default function ColdBrewCanDetails({ coldBrewCan }: { coldBrewCan: ColdBrewCan }) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null | undefined>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const variant = coldBrewCan.variants.find((variant: ProductVariant) =>
      variant.selectedOptions.every(
        (option) => option.value === searchParams.get(option.name.toLowerCase())
      )
    );
    setSelectedVariant(variant || coldBrewCan.variants[0]);
  }, [searchParams, coldBrewCan.variants]);

  return (
    <div className="flex w-full basis-full flex-col items-center justify-end">
      <div className="flex w-full max-w-[800px] flex-col">
        <h1 className="text-xl font-medium uppercase">{coldBrewCan.title}</h1>
        <p className="border-b border-black py-sm text-md">
          {selectedVariant ? (
            <span className="flex">
              <Price currencyCode="usd" amount={selectedVariant?.price.amount} /> / PK
            </span>
          ) : (
            'Price not available'
          )}
        </p>
        <div className="flex justify-between py-sm">
          <CanVariantSelector options={coldBrewCan.options} variants={coldBrewCan.variants} />
          <AddToCart
            variants={coldBrewCan.variants}
            availableForSale={coldBrewCan.availableForSale}
          />
        </div>
        <div className="flex flex-col gap-3xs border-b border-black py-sm">
          <h2 className="text-md font-semibold uppercase">Details</h2>
          <p className="text-md leading-tight">{coldBrewCan.description}</p>
        </div>
        <div className="flex justify-between gap-sm border-b border-black py-sm">
          <div className="w-full">
            <h3 className="text-md font-semibold uppercase">Taste</h3>
            <p className="text-md leading-tight">{coldBrewCan.tasting_notes?.value}</p>
          </div>
          <div className="w-full">
            <h2 className="text-md font-semibold uppercase">Stats</h2>
            <div className="flex flex-col">
              <StatRating label="Caffeine" value={coldBrewCan.caffeine_level?.value} />
              <StatRating label="Sweetness" value={coldBrewCan.sweetness?.value} />
              <StatRating label="Boldness" value={coldBrewCan.boldness?.value} />
              <StatRating label="Complexity" value={coldBrewCan.complexity?.value} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
