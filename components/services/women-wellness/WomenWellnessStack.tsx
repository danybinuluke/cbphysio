'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const womenWellness = [
  {
    title: 'Pelvic Floor Strengthening',
    image: '/pelvic-floor-strengthening-1.webp',
    href: '/services/women-wellness/pelvic-floor-strengthening',
  },
  {
    title: 'Urinary Incontinence',
    image: '/urinary-discomfort-1.webp',
    href: '/services/women-wellness/urinary-incontinence',
  },
  {
    title: 'PCOD - Polycystic Ovarian Disease',
    image: '/pcod.webp',
    href: '/services/women-wellness/pcod',
  },
  {
    title: 'Diastasis Recti',
    image: '/diastasis-recti-1.webp',
    href: '/services/women-wellness/diastasis-recti',
  },
  {
    title: 'Menstrual Pain',
    image: '/menstrual-pain-1.webp',
    href: '/services/women-wellness/menstrual-pain',
  },
];

const WomenWellnessStack = () => {
  return (
    <section className="w-full bg-white py-14 px-4 md:px-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Women’s Wellness Care
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Empowering women with focused physiotherapy solutions for a healthier and more comfortable life.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {womenWellness.map((topic, idx) => (
          <Link href={topic.href} key={idx}>
            <div className="group relative w-full h-48 md:h-56 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Image
                src={topic.image}
                alt={topic.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-lg md:text-xl font-semibold text-center px-2 z-10">
                  {topic.title}
                </h3>
              </div>
              {/* Hover Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <ArrowUpRight className="text-white bg-black/60 rounded-full p-1 w-6 h-6" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WomenWellnessStack;
