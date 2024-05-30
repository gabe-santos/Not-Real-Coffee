import Price from 'components/price';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.handle}`} className="gap-fluid-8 flex flex-col">
      <div className="aspect-square w-full">
        <Image
          className="aspect-square h-auto w-full rounded-2xl object-cover"
          src={product.featuredImage.url}
          width="286"
          height="286"
          alt={product.featuredImage.altText}
        />
      </div>
      <div className="px-fluid-8 flex justify-between">
        <div className="font-medium">{product.title}</div>
        <div>
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
    </Link>
  );
}
