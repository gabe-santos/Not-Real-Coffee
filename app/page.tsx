import Marquee from 'components/ui/marquee';
import Image from 'next/image';
import hero from 'public/images/light-v2.png';
import running from 'public/images/running.jpg';
import coffeeSip from 'public/images/coffee-sip.jpg';

export const metadata = {
  description: "Not Real Coffee. It simply doesn't exist"
};

export default async function HomePage() {
  return (
    <div className="flex h-full w-full max-w-screen flex-col gap-sm px-sm">
      <div id="top" className="mt-3xl w-full max-w-screen overflow-hidden rounded-3xl">
        <Image src={hero} alt="medium image" className="h-full w-full object-cover" />
      </div>
      <Marquee speed={3} className="flex w-full rounded-3xl bg-black text-3xl text-white">
        This coffee doesn't exist * It's NOT REAL *
      </Marquee>
      <section className="flex h-screen w-full flex-col items-start justify-center gap-sm md:flex-row">
        <div className="h-full w-full flex-1">
          <Image src={running} alt="running" className="h-full rounded-3xl object-cover" />
        </div>
        <div className="flex h-full w-full flex-1 flex-col gap-xs rounded-3xl border bg-glass p-sm">
          <h2 className="text-pretty text-3xl leading-none">The Void of Perfect Brew</h2>
          <p className="flex-1 text-xl leading-tight">
            You've just stumbled upon the event horizon of caffeine consciousness. NOT REAL Coffee
            isn't just a brand—it's an abstract concept, a quantum superposition of flavor and
            fantasy.
          </p>
          <p className="text-xl">
            The perfect coffee brand doesn't exist.
            <br />
            It's <span className="font-medium underline">NOT REAL</span>*.
          </p>
        </div>
      </section>
    </div>
  );
}
