'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bebas_Neue } from 'next/font/google'; // Import the font

// Configure the Bebas Neue font
const bebasNeue = Bebas_Neue({
  weight: ['400'], // Bebas Neue usually only has one weight or very few
  subsets: ['latin'],
  display: 'swap', // This helps with font loading performance
});

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    backgroundColor: 'rgba(135, 206, 250, 0.2)', // Updated background to lightsky/20
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif', // Fallback font
    position: 'relative',
    overflow: 'hidden', // Ensure no overflow from text fill animation
  } as React.CSSProperties,
  logoContainer: {
    position: 'relative',
    zIndex: 2,
    marginBottom: 40, // Increased margin for better spacing
    maxWidth: '80%',
    height: 'auto',
  } as React.CSSProperties,
  loadingTextWrapper: {
    position: 'relative',
    display: 'inline-block',
    fontSize: '4rem', // Large font size for the loading text
    fontWeight: 'bold',
    // The base text color should be the 'unfilled' color
    color: '#a0aec0', // Light gray for the base text
    marginBottom: 20,
    // For the filling effect, we'll use a background gradient and mask
    WebkitBackgroundClip: 'text', // Clip background to text
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent', // Make text transparent to show background
    backgroundSize: '200% 100%', // Double the size for animation
    // Initial background position to hide the 'filled' part
    backgroundPosition: '100% 0',
    backgroundImage: `linear-gradient(to right, #a0aec0 50%, #22c55e 50%)`, // Gradient for fill
    // Note: The actual animation will be applied via motion.div
  } as React.CSSProperties,
  tagline: {
    marginTop: 30,
    color: '#065f46',
    fontWeight: '500',
    fontSize: '1.1rem',
  } as React.CSSProperties,
};

export default function LoadingScreen() {
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <Image
          src="/cb.png"
          alt="Clinic Logo"
          width={400} // Adjust based on your logo's actual aspect ratio
          height={100} // Adjust based on your logo's actual aspect ratio
        />
      </div>

      {/* Loading Text Fill Animation */}
      <motion.div
        style={styles.loadingTextWrapper}
        initial={{ backgroundPosition: '100% 0' }} // Start with fill hidden
        animate={{ backgroundPosition: '0% 0' }}   // Animate to reveal fill
        transition={{ duration: 5, ease: 'easeInOut' }} // Matches layout.tsx duration
        className={bebasNeue.className} // Apply the font here
      >
        Loading...
      </motion.div>

      <motion.p
        style={styles.tagline}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={bebasNeue.className} // Apply the font here
      >
        Healing through motion.
      </motion.p>
    </div>
  );
}
