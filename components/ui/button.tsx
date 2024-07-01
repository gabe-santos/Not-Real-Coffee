import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from 'lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: 'glass';
}

const buttonVariants = cva('flex items-center gap-xs text-lg pill', {
  variants: {
    variant: {
      glass: 'bg-glass'
    }
  }
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant, className }))} ref={ref} {...props} />;
  }
);

Button.displayName = 'Button';
