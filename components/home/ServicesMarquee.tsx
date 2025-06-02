'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Reveal from '@/components/ui/reveal';

const marqueeItems = [
  {
    title: 'Sports Injuries',
    image: 'https://www.mytorontophysio.com/wp-content/uploads/2018/11/Sports-Injuries.jpg',
    link: '/services/sports-injuries',
  },
  {
    title: 'Cryotherapy',
    image: 'https://st3.depositphotos.com/10000366/13746/i/450/depositphotos_137468500-stock-photo-liquid-nitrogen-cryotherapy-procedure.jpg',
    link: '/services/cryotherapy',
  },
  {
    title: 'Women Wellness',
    image: 'https://drmonishamallik.com/wp-content/uploads/2025/04/Pregman4-1.webp',
    link: '/services/women-wellness',
  },
  {
    title: 'Lifestyle Management',
    image: 'https://mobiphysio.in/assets/theme/img/services/posture-correction-1.webp',
    link: '/services/lifestyle-management',
  },
  {
    title: 'Pain Management',
    image: 'https://www.shutterstock.com/image-photo/office-syndrome-worker-concept-female-600nw-2474792075.jpg',
    link: '/services/pain-management',
  },
];

const marqueeLoopItems = [...marqueeItems, ...marqueeItems];

const ServicesMarquee = () => {
  return (
    <section className="bg-background py-10 overflow-hidden">
      <Reveal>
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 50,
            ease: 'linear',
          }}
        >
          {marqueeLoopItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="group flex flex-col items-center min-w-[220px] relative"
            >
              <div
                className="relative w-[220px] h-[220px] rounded-2xl overflow-hidden bg-cover bg-center shadow-sm"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition duration-300 flex items-center justify-center">
                  <ArrowRight className="text-white w-6 h-6 -rotate-45" />
                </div>
              </div>
              <p className="mt-2 text-center text-sm font-semibold text-muted-foreground w-[220px]">
                {item.title}
              </p>
            </Link>
          ))}
        </motion.div>
      </Reveal>
    </section>
  );
};

export default ServicesMarquee;
