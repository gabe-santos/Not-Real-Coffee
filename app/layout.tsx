import Navbar from 'components/navigation/navbar';
import { ReactNode } from 'react';
import localFont from 'next/font/local';
import './globals.css';
import Lenis from 'lenis';
import SmoothScrolling from 'providers/smooth-scrolling';

const { SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  }
};

const overusedGrotesk = localFont({
  src: '../fonts/OverusedGrotesk-VF.woff2',
  display: 'swap',
  variable: '--font-overusedGrotesk'
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${overusedGrotesk.className} flex flex-col items-center text-md`}>
        <SmoothScrolling>
          <Navbar />
          {children}
          <footer className="flex h-screen w-full items-center justify-center bg-black text-white">
            <div className="h-1/4 w-1/4 rounded-xl border  bg-glass"> bitch</div>
          </footer>
        </SmoothScrolling>
      </body>
    </html>
  );
}
