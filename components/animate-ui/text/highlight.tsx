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

// Define the props for the HighlightText component, EXCLUDING the 'ref' prop directly
type HighlightTextProps = HTMLMotionProps<'span'> & {
  text: string;
  color?: string;
  inView?: boolean;
  inViewMargin?: UseInViewOptions['margin'];
  inViewOnce?: boolean;
  transition?: Transition;
};

// Use React.forwardRef to properly receive the ref from parent components
const HighlightText = React.forwardRef<HTMLSpanElement, HighlightTextProps>(
  (
    {
      text,
      color = '#7c3aed',
      className,
      inView = true,
      inViewMargin = '-100px',
      inViewOnce = true,
      transition = { duration: 2, ease: 'easeInOut' },
      style,
      ...props
    },
    // The 'ref' is now the second argument provided by React.forwardRef
    forwardedRef // Renamed to avoid confusion with localRef
  ) => {
    // Create a local ref for useInView
    const localRef = React.useRef<HTMLSpanElement>(null);

    // Merge the forwarded ref with the local ref
    // This allows both useInView to monitor the element and the parent component
    // to attach its own ref to the same DOM element.
    const mergedRef = React.useCallback((node: HTMLSpanElement | null) => {
      // Assign the node to the local ref
      localRef.current = node;

      // Assign the node to the forwarded ref
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLSpanElement | null>).current = node;
      }
    }, [forwardedRef]); // Depend on forwardedRef to ensure it's up-to-date

    const inViewResult = useInView(localRef, { // use localRef for useInView
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
        // Pass the merged ref to the motion.span component
        ref={mergedRef}
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
);

// Assign a display name for easier debugging
HighlightText.displayName = 'HighlightText';

export { HighlightText, type HighlightTextProps };