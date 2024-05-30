import Image from 'next/image';

import logo from 'public/not-real-logo.svg';

import Link from 'next/link';
import Cart from '../cart';
import NavMenu from './nav-menu';

const navList = [
  {
    title: 'Home',
    route: '/'
  },
  {
    title: 'Shop',
    route: '/products'
  },
  {
    title: 'About',
    route: '/about'
  },
  {
    title: 'Contact',
    route: '/contact'
  }
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <Image src={logo} alt="logo" className="w-[116px]" />
      </Link>
      <div className="gap-fluid-4 flex items-center justify-end">
        <NavMenu options={navList} />
        <Cart />
      </div>
    </nav>
  );
}
