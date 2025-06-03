'use client';

import * as React from 'react';
import {
  motion,
  useInView,
  type HTMLMotionProps,
  type Transition,
  type UseInViewOptions,
} from 'motion/react';

import { cn } from '@/lib/utils';

type HighlightTextProps = HTMLMotionProps<'span'> & {
  text: string;
  color?: string;
  inView?: boolean;
  inViewMargin?: UseInViewOptions['margin'];
  inViewOnce?: boolean;
  transition?: Transition;
};

function HighlightText({
  ref,
  text,
  color = '#7c3aed',
  className,
  inView = true,
  inViewMargin = '-100px',
  inViewOnce = true,
  transition = { duration: 2, ease: 'easeInOut' },
  style,
  ...props
}: HighlightTextProps) {
  const localRef = React.useRef<HTMLSpanElement>(null);
  React.useImperativeHandle(ref, () => localRef.current as HTMLSpanElement);

  const inViewResult = useInView(localRef, {
    once: inViewOnce,
    margin: inViewMargin,
  });
  
  // Fixed logic: only animate when scroll-triggered AND in view
  const shouldAnimate = inView ? inViewResult : false;

  // Create dynamic background based on color prop
  const getBackgroundStyle = (color: string) => {
    // If it's a hex color, create a gradient with opacity variations
    if (color.startsWith('#')) {
      const baseColor = color;
      const lightColor = baseColor + '40'; // Add 40 for 25% opacity
      return `linear-gradient(120deg, ${lightColor} 0%, ${baseColor} 100%)`;
    }
    // Default fallback
    return `linear-gradient(120deg, ${color}40 0%, ${color} 100%)`;
  };

  return (
    <motion.span
      ref={localRef}
      data-slot="highlight-text"
      initial={{
        backgroundSize: '0% 100%',
      }}
      animate={shouldAnimate ? { backgroundSize: '100% 100%' } : { backgroundSize: '0% 100%' }}
      transition={transition}
      style={{
        backgroundImage: getBackgroundStyle(color),
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
        ...style,
      }}
      className={cn(
        'relative inline-block px-2 py-1 rounded-lg',
        className,
      )}
      {...props}
    >
      {text}
    </motion.span>
  );
}

export { HighlightText, type HighlightTextProps };