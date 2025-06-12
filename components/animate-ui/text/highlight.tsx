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

// Define the props for the HighlightText component.
// We explicitly OMIT the 'ref' property from HTMLMotionProps<'span'> because
// React.forwardRef will handle the ref prop separately as the second argument.
type HighlightTextProps = Omit<HTMLMotionProps<'span'>, 'ref'> & {
  text: string;
  color?: string;
  inView?: boolean;
  inViewMargin?: UseInViewOptions['margin'];
  inViewOnce?: boolean;
  transition?: Transition;
};

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
    // The ref from the parent component, passed as the second argument by React.forwardRef.
    // Its type is React.Ref<HTMLSpanElement>.
    forwardedRef: React.Ref<HTMLSpanElement>
  ) => {
    // Create an internal ref to be used by the useInView hook.
    const localRef = React.useRef<HTMLSpanElement | null>(null) as React.MutableRefObject<HTMLSpanElement | null>;

    // Create a single callback ref that merges both the localRef and the forwardedRef.
    // This ensures both the useInView hook and any parent refs correctly receive the DOM element.
    const mergedRefs = React.useCallback(
      (node: HTMLSpanElement | null) => {
        // Assign the DOM node to our internal ref for useInView.
        localRef.current = node;

        // Handle the forwarded ref from the parent.
        if (typeof forwardedRef === 'function') {
          // If forwardedRef is a callback function, call it with the node.
          forwardedRef(node);
        } else if (forwardedRef && typeof forwardedRef === 'object' && 'current' in forwardedRef) {
          // If forwardedRef is an object ref (like one created by useRef),
          // we need to explicitly cast it to React.MutableRefObject to assign to 'current',
          // as React.RefObject's 'current' property is read-only.
          (forwardedRef as React.MutableRefObject<HTMLSpanElement | null>).current = node;
        }
        // String refs are generally deprecated and React.forwardRef usually doesn't pass them
        // directly as the second argument. If they were to be passed, the initial error from
        // motion.span suggests it wouldn't accept them anyway.
      },
      [forwardedRef] // Re-create this callback if the forwardedRef changes.
    );

    const inViewResult = useInView(localRef, {
      once: inViewOnce,
      margin: inViewMargin,
    });

    // Determine if animation should run (based on `inView` prop and scroll visibility).
    const shouldAnimate = inView ? inViewResult : false;

    // Helper function to generate background style based on color.
    const getBackgroundStyle = (color: string) => {
      if (color.startsWith('#')) {
        const baseColor = color;
        const lightColor = baseColor + '40'; // Add 40 for ~25% opacity
        return `linear-gradient(120deg, ${lightColor} 0%, ${baseColor} 100%)`;
      }
      // Fallback for non-hex colors (or if you want a simpler gradient).
      return `linear-gradient(120deg, ${color}40 0%, ${color} 100%)`;
    };

    return (
      <motion.span
        ref={mergedRefs} // Pass the merged callback ref to the motion.span component.
        data-slot="highlight-text"
        initial={{
          backgroundSize: '0% 100%',
        }}
        // Animate backgroundSize based on whether it should animate.
        animate={shouldAnimate ? { backgroundSize: '100% 100%' } : { backgroundSize: '0% 100%' }}
        transition={transition}
        style={{
          backgroundImage: getBackgroundStyle(color),
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
          display: 'inline',
          ...style, // Allow external style overrides
        }}
        className={cn(
          'relative inline-block px-2 py-1 rounded-lg',
          className, // Allow external className overrides
        )}
        {...props} // Pass any other props to the span element.
      >
        {text}
      </motion.span>
    );
  }
);

HighlightText.displayName = 'HighlightText'; // Helpful for debugging in React DevTools.

export { HighlightText, type HighlightTextProps };