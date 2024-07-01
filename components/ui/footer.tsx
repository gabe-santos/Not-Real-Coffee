import Image from 'next/image';
import Link from 'next/link';
import notRealBig from 'public/NOT REAL.svg';
import arrow from 'public/arrow-up.svg';

export default function Footer() {
  return (
    <footer className="flex h-[75vh] w-full flex-col items-center justify-between rounded-t-3xl bg-black px-md pb-sm text-white">
      <div className="flex w-full flex-1 items-start justify-between">
        <div className="flex flex-col">
          <h3>Browse</h3>
          <ul className="flex flex-col text-grey">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3>About</h3>
          <ul className="flex flex-col text-grey">
            <Link href="/contact">Contact</Link>
            <Link href="faqs">FAQs</Link>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3>Socials</h3>
          <ul className="flex flex-col text-grey">
            <Link href="https://www.instagram.com/notreal.coffee">Instagram</Link>
            <Link href="https://www.linkedin.com/in/gabesantoscodes/">LinkedIn</Link>
            <Link href="https://github.com/gabe-santos">Github</Link>
            <Link href="https://gabesantos.dev">Portfolio</Link>
          </ul>
        </div>

        <div className="flex w-1/4 flex-col gap-sm">
          <label className="text-lg" htmlFor="email">
            Sign up to stay up to date with news and new releases
          </label>
          <input type="text" className="border border-grey bg-glass text-grey pill" name="email" />
        </div>
      </div>
      <Image className="w-screen " src={notRealBig} alt="not real big logo" />
      <div className="flex w-full justify-between pt-sm text-sm">
        <p>
          Made with 🫶🏽 by <Link href="https://gabesantos.dev">Gabe Santos</Link>
        </p>
        <p>
          <Link href="#top">Back to top</Link>
        </p>
        <p>NOT REAL Coffee ©</p>
      </div>
    </footer>
  );
}
