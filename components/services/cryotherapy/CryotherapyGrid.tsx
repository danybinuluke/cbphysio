'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const cryotherapyServices = [
  {
    title: 'Cryo Aesthetics',
    image: '/cryo-aesthetics.webp',
    href: '/services/cryotherapy/cryo-aesthetics',
  },
  {
    title: 'Cryo Facials',
    image: '/cryo-facials.webp',
    href: '/services/cryotherapy/cryo-facials',
  },
  {
    title: 'Body Sculpting',
    image: '/body-sculpting-1.webp',
    href: '/services/cryotherapy/body-sculpting',
  },
  {
    title: 'Cryotherapy Pain Management',
    image: '/cryo-pain-management.webp',
    href: '/services/cryotherapy/cryotherapy-pain-management',
  },
];

const CryotherapyGrid = () => {
  return (
    <section className="w-full bg-white py-14 px-4 md:px-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Cryotherapy Treatments
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Discover our range of cryotherapy treatments that help rejuvenate your body, enhance aesthetics, and manage pain naturally.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cryotherapyServices.map((service, idx) => (
          <Link href={service.href} key={idx}>
            <div
              className="group relative aspect-[3/4] w-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer rounded-xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-lg md:text-xl font-semibold text-center px-2 z-10">
                  {service.title}
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

export default CryotherapyGrid;
