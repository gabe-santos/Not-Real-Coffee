import { getProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

// export const metadata = {
//   description: "Not Real Coffee. It simply doesn't exist"
// };

export default async function HomePage() {
  const products = await getProducts({});

  return (
    <>
      <h1 className="text-8xl">Home Page</h1>
      <div className="flex w-full justify-between">
        {products.map((p) => {
          return (
            <Link href={'/product/' + p.handle} key={p.id}>
              <Image
                src={p.featuredImage.url}
                alt={p.featuredImage.altText}
                width={200}
                height={200}
                className="w-full"
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
