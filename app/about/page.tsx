import Image from 'next/image';
import steven from 'public/images/steven.jpg';

export default function About() {
  return (
    <div className="mt-2xl w-full max-w-screen">
      <section className="flex-h-screen relative w-full flex-col">
        <Image src={steven} alt="Steven Yamane" className="w-2/3" />
        <div className="absolute right-md top-1/2 text-right text-3xl font-medium leading-tight">
          <p>Steven Yamane</p>
          <p className="text-2xl">Founder & CEO</p>
        </div>
      </section>
      <section className="flex h-screen w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center text-5xl font-medium ">
          <p>This coffee doesn't exist</p>
          <p>This brand doesn't exist</p>
          <p>It's NOT REAL.</p>
        </div>
      </section>
      <section className="h-screen bg-orange-500">we do not exist. we're NOT REAL.</section>
    </div>
  );
}
