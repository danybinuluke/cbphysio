'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bebas_Neue } from 'next/font/google';

// Configure the Bebas Neue font
const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    backgroundColor: 'rgba(135, 206, 250, 0.2)',
    flexDirection: 'column',
    alignItems: 'center', // Ensures horizontal centering of children
    justifyContent: 'center',
    fontFamily: 'sans-serif',
    position: 'relative',
    overflow: 'hidden',
  } as React.CSSProperties,
  logoContainer: {
    position: 'relative',
    zIndex: 2,
    marginBottom: 0, // Reduced margin to bring logo and text closer
    maxWidth: '80%',
    height: 'auto',
  } as React.CSSProperties,
  loadingTextWrapper: {
    position: 'relative',
    display: 'inline-block',
    fontSize: '3rem', // Made the font size smaller from 4rem
    fontWeight: 'bold',
    color: '#a0aec0',
    marginBottom: 20,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '200% 100%',
    backgroundPosition: '100% 0',
    backgroundImage: `linear-gradient(to right, #a0aec0 50%, #22c55e 50%)`,
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
          width={250} // Increased width for a slightly bigger logo
          height={120} // Increased height to maintain aspect ratio
        />
      </div>

      {/* Loading Text Fill Animation */}
      <motion.div
        style={styles.loadingTextWrapper}
        initial={{ backgroundPosition: '100% 0' }}
        animate={{ backgroundPosition: '0% 0' }}
        transition={{ duration: 7, ease: 'easeInOut' }}
        className={bebasNeue.className}
      >
        Loading...
      </motion.div>

      <motion.p
        style={styles.tagline}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={bebasNeue.className}
      >
        Healing through motion.
      </motion.p>
    </div>
  );
}
