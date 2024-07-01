import Image from 'next/image';

import logo from 'public/not-real-logo.svg';

import Link from 'next/link';
import Cart from '../cart';
import NavMenu from './nav-menu';

export interface NavMenuItem {
  title: string;
  route: string;
}

const navList: NavMenuItem[] = [
  {
    title: 'Home',
    route: '/'
  },
  {
    title: 'Products',
    route: '/products'
  },
  {
    title: 'About',
    route: '/about'
  },
  {
    title: 'Contact',
    route: '/contact'
  },
  {
    title: 'Locations',
    route: '/locations'
  }
];

export default function Navbar() {
  return (
    <nav className="fixed z-50 flex h-2xl w-full max-w-screen items-center justify-between px-sm py-sm">
      <Link href="/" className="flex items-center bg-glass pill">
        <span className="text-lg font-semibold tracking-tight">NOT REAL*</span>
        {/* <Image src={logo} alt="logo" className="h-[34px]" /> */}
      </Link>
      {/* <div className="flex items-center justify-end gap-xs"> */}
      <NavMenu options={navList} />
      <Cart />
      {/* </div> */}
    </nav>
  );
}
