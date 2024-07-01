'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { cn } from 'lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export default function Marquee({
  children,
  direction = 'left',
  speed = 1,
  className = ''
}: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const marquee = marqueeRef.current;
      const content = contentRef.current;

      if (!marquee || !content) return;

      marquee.innerHTML = '';
      marquee.appendChild(content);
      const clone = content.cloneNode(true);
      marquee.appendChild(clone);

      const directionMultiplier = direction === 'left' ? -1 : 1;
      const contentWidth = content.offsetWidth;

      gsap.to([content, clone], {
        x: directionMultiplier * contentWidth,
        duration: contentWidth / (100 * speed),
        ease: 'none',
        repeat: -1
      });
    },
    { scope: marqueeRef, dependencies: [direction, speed] }
  );

  return (
    <div
      ref={marqueeRef}
      className={cn('flex items-center overflow-hidden whitespace-nowrap', className)}
    >
      <div ref={contentRef} className="inline-block">
        {children}
      </div>
    </div>
  );
}
