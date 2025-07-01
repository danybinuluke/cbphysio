'use client';

import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <section
      className="relative w-full h-[220px] md:h-[270px] bg-cover bg-center text-white"
      style={{ 
        backgroundImage: 'url("/women-wellness-banner.jpeg")',
        backgroundPosition: 'center 30%'
      }}
    >
      <div className="absolute inset-0 bg-black/30 flex items-end pb-6 md:pb-8 justify-start px-4 sm:px-6 md:px-16">
        <div className="mb-2 max-w-full sm:max-w-[90%] md:max-w-[60%]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 leading-tight">
            PCOD - Polycystic Ovarian Disease
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white/90 break-words">
            <Link href="/" className="underline hover:text-white transition-colors">Home</Link>
            &nbsp;&gt;&nbsp;
            <Link href="/services" className="underline hover:text-white transition-colors">Services</Link>
            &nbsp;&gt;&nbsp;
            <Link href="/services/women-wellness" className="underline hover:text-white transition-colors">Women Wellness</Link>
            &nbsp;&gt;&nbsp;
            <span className="text-white">PCOD - Polycystic Ovarian Disease</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
