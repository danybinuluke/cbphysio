'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from '@/app/LoadingScreen';

// This will persist across all navigation
declare global {
  interface Window {
    __LOADING_SHOWN__: boolean;
  }
}

export default function OneTimeLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showReveal, setShowReveal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Check if loading has already been shown
    if (window.__LOADING_SHOWN__) {
      return; // Don't show loading again
    }

    // First time - show loading
    setIsLoading(true);
    window.__LOADING_SHOWN__ = true;

    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowReveal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [mounted]);

  useEffect(() => {
    if (isLoading || showReveal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading, showReveal]);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
            className="fixed inset-0 z-50"
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showReveal && (
          <motion.div
            key="reveal-animation"
            initial={{
              clipPath: 'circle(0% at 50% 50%)',
              backgroundColor: 'rgb(249, 250, 251)',
            }}
            animate={{
              clipPath: 'circle(150% at 50% 50%)',
              backgroundColor: 'rgba(249, 250, 251, 0)',
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            onAnimationComplete={() => {
              setTimeout(() => setShowReveal(false), 300);
            }}
            className="fixed inset-0 z-40"
          />
        )}
      </AnimatePresence>

      {children}
    </>
  );
}