'use client';

import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <section
      className="relative w-full h-[220px] md:h-[250px] bg-cover bg-center text-white"
      style={{ 
        backgroundImage: 'url("/women-wellness-banner.jpeg")',
        backgroundPosition: 'center 30%'
      }}
    >
      <div className="absolute inset-0 bg-black/30 flex items-end pb-8 justify-start px-4 md:px-16">
        <div className="mb-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Diastasis Recti</h1>
          <p className="text-sm md:text-base text-white/90">
            <Link href="/" className="underline hover:text-white transition-colors">Home</Link>
            &nbsp;&gt;&nbsp;
            <Link href="/services" className="underline hover:text-white transition-colors">Services</Link>
            &nbsp;&gt;&nbsp;
            <Link href="/services/women-wellness" className="underline hover:text-white transition-colors">Women Wellness</Link>
            &nbsp;&gt;&nbsp;
            <span className="text-white">Diastasis Recti</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;