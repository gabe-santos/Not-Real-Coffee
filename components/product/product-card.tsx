import Price from 'components/price';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.handle}`} className="group flex flex-col gap-xs">
      <div className="aspect-square w-full overflow-hidden rounded-2xl">
        <Image
          className="aspect-square h-auto w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          src={product.featuredImage.url}
          width={1000}
          height={1000}
          alt={product.featuredImage.altText}
        />
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/10 p-3xs opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"> */}
        {/*   <h3 className=" font- ">{product.title}</h3> */}
        {/* </div> */}
      </div>
    </Link>
  );
}
