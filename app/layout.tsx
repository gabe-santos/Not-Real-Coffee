import Navbar from 'components/navigation/navbar';
import { ReactNode } from 'react';
import localFont from 'next/font/local';
import './globals.css';

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
        <Navbar />
        {children}
        <footer className="h-screen w-full bg-black">testing</footer>
      </body>
    </html>
  );
}
