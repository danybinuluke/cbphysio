'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const lifestylePains = [
  {
    title: 'Posture Correction',
    image: '/posture-correction-1.webp',
    href: '/services/lifestyle-management/posture-correction',
  },
  {
    title: 'Weight Management',
    image: '/weight-management-1.webp',
    href: '/services/lifestyle-management/weight-management',
  },
  {
    title: 'Diabetes',
    image: '/diabetes-1.webp',
    href: '/services/lifestyle-management/diabetes',
  },
  {
    title: 'Hypertension',
    image: '/hypertension-1.webp',
    href: '/services/lifestyle-management/hypertension',
  },
];

const LifestyleManagementGrid = () => {
  return (
    <section className="w-full bg-white py-14 px-4 md:px-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Lifestyle-Related Pain Management
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Modern routines can trigger chronic pain. Our tailored solutions help manage and reverse pain from poor posture, tech overuse, and more.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lifestylePains.map((pain, idx) => (
          <Link href={pain.href} key={idx}>
            <div
              className="group relative aspect-[3/4] w-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer rounded-xl"
            >
              <Image
                src={pain.image}
                alt={pain.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-lg md:text-xl font-semibold text-center px-2 z-10">
                  {pain.title}
                </h3>
              </div>
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

export default LifestyleManagementGrid;
