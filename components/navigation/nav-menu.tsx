'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

export default function NavMenu({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const linkRefs = useRef([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setIsOpen(false);
  };

  // Set initial state of menuRef
  useGSAP(() => {
    if (menuRef.current) {
      gsap.set(menuRef.current, { x: '-100%' });
    }
    // if (linkRefs.current.length) {
    //   gsap.set(linkRefs.current, { y: 100, opacity: 0 });
    // }
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useGSAP(
    () => {
      if (isOpen) {
        gsap.to(menuRef.current, {
          duration: 0.4,
          // y: '0%',
          x: '0%',
          display: 'flex',
          ease: 'power3.in',
          onComplete: () => {
            gsap.fromTo(
              linkRefs.current,
              { y: '-100%', opacity: 0 },
              { y: 0, opacity: 1, duration: 0.2, stagger: 0.1 }
            );
          }
        });
      } else {
        gsap.to(linkRefs.current, {
          y: '-100%',
          opacity: 0,
          stagger: 0.1,
          onStart: () => {
            gsap.to(menuRef.current, {
              x: '-100%',
              duration: 0.4,
              ease: 'power3.in'
            });
          }
        });
      }
    },
    { dependencies: [isOpen] }
  );

  return (
    <div className="md:hidden">
      <div className="relative inline-block">
        <button
          className="rounded-2xl border border-black px-fluid-12 py-[0px]"
          onClick={handleToggle}
        >
          Menu
        </button>
        <div
          ref={menuRef}
          className="py-fluid-6 bg-grey fixed left-0 top-0 z-10 flex h-screen w-screen justify-between px-fluid-12 text-black"
        >
          <ul className="text-fluid-2xl mt-[64px] flex flex-col overflow-hidden font-semibold uppercase">
            {options.map((o, index) => (
              <Link
                ref={(el) => (linkRefs.current[index] = el)}
                key={index}
                className="overflow-hidden"
                onClick={() => handleSelect(o)}
                href={o.route}
              >
                <span className="opacity-80 hover:opacity-100">{o.title}</span>
              </Link>
            ))}
          </ul>
          <div onClick={handleToggle} className="cursor-pointer ">
            x
          </div>
        </div>
      </div>
    </div>
  );
}
