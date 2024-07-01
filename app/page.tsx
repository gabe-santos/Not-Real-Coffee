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
          <h1 className="text-3xl uppercase">lol</h1>
          <h2 className="text-pretty text-xl">
            Bro you <span className="uppercase">Wish</span> you could try this cold brew
          </h2>
          <p className="flex-1 text-md leading-normal">
            The fact of the matter is, it's just too cool for you. Sorry. But not really. The
            coffee's for closers. For movers. For people that get sh*t done. Do you really think you
            belong here? There's a reason why this coffee is the most gatekept coffee in the US.
            It's literally adderall. It makes you superhuman. That said, if you can't already tell,
            its not for everyone. I'm looking at you. Don't get it twisted. I don't care if you're
            Elon Musk or Peyton Manning. You're literally not good enough for this coffee. Give up.
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
