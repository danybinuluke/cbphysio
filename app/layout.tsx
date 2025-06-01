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
    // Simulate the loading duration. This should match or slightly exceed
    // the duration of your LoadingScreen's progress bar animation (5 seconds).
    const loadingDuration = 5000; // 5000ms = 5 seconds

    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the loading screen
      setShowReveal(true);  // Start the reveal animation
    }, loadingDuration);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  // After the loading screen, remove the overflow-hidden class to allow scrolling
  useEffect(() => {
    if (!isLoading && !showReveal) {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading, showReveal]);

  return (
    <html lang="en">
      {/* Apply Inter font to the body */}
      <body className={`${inter.className} ${isLoading ? 'overflow-hidden' : ''}`}>
        {/* Loading Screen */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              key="loading-screen"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
              className="fixed inset-0 z-50" // High z-index to cover everything
            >
              <LoadingScreen /> {/* Render your LoadingScreen component */}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reveal Animation Overlay */}
        <AnimatePresence>
          {showReveal && (
            <motion.div
              key="reveal-animation"
              initial={{
                clipPath: 'circle(0% at 50% 50%)', // Start as a tiny circle in the center
                backgroundColor: 'rgb(249, 250, 251)', // Match your HomePage's background color (bg-gray-50)
              }}
              animate={{
                clipPath: 'circle(150% at 50% 50%)', // Expand beyond screen to reveal
                backgroundColor: 'rgba(249, 250, 251, 0)', // Fade out background color
              }}
              exit={{ opacity: 0 }} // In case it needs to exit later (e.g. if you navigate away)
              transition={{
                duration: 1.5, // Duration of the reveal animation
                ease: "easeInOut"
              }}
              onAnimationComplete={() => {
                // Delay hiding the reveal overlay to let the fade finish smoothly
                setTimeout(() => {
                  setShowReveal(false);
                }, 300);
              }}
              className="fixed inset-0 z-40" // Below loading screen, above content
            />
          )}
        </AnimatePresence>

        {/* Main Content (HomePage and other pages) */}
        {/* Only show children after the reveal animation has started */}
        {!isLoading && children}
      </body>
    </html>
  );
}
