'use client'; // This component needs to be a Client Component for useState and useEffect

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './LoadingScreen'; // Assuming LoadingScreen is in src/components
import './globals.css'; // Keep your global styles import
import { Inter } from 'next/font/google'; // Import Inter font

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showReveal, setShowReveal] = useState(false);

  useEffect(() => {
    const loadingDuration = 5000; // 5 seconds

    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowReveal(true);
    }, loadingDuration);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && !showReveal) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isLoading, showReveal]);

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* SVG Gooey Filter Definition */}
        <svg
          className="absolute w-0 h-0 pointer-events-none"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="goo" x="0" y="0" width="200%" height="200%" colorInterpolationFilters="sRGB">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 20 -10"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        {/* Loading Screen */}
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

        {/* Reveal Animation Overlay */}
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

        {/* Main Content */}
        {!isLoading && children}
      </body>
    </html>
  );
}
