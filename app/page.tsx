import { getProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import medium from 'public/images/medium-v2.png';

export const metadata = {
  description: "Not Real Coffee. It simply doesn't exist"
};

export default async function HomePage() {
  return (
    <>
      <Image src={medium} alt="medium image" className="h-full w-full object-cover" />
      <section className="flex h-screen w-full flex-col items-center justify-center">
        <div className="w-1/2 text-5xl">fuck you</div>
        <div className="w-1/2 text-3xl">you wish you could try this coffee</div>
      </section>
    </>
  );
}
