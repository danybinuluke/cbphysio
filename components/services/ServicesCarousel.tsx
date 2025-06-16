'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ArrowUpRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

const services = [
  {
    title: 'Lifestyle Management',
    image: 'https://mobiphysio.in/assets/theme/img/services/posture-correction-1.webp',
    href: '/services/lifestyle-management',
  },
  {
    title: 'Sports Injuries',
    image: 'https://www.mytorontophysio.com/wp-content/uploads/2018/11/Sports-Injuries.jpg',
    href: '/services/sports-injuries',
  },
  {
    title: 'Pain Management',
    image: 'https://www.shutterstock.com/image-photo/office-syndrome-worker-concept-female-600nw-2474792075.jpg',
    href: '/services/pain-management',
  },
  {
    title: 'Cryotherapy',
    image: 'https://st3.depositphotos.com/10000366/13746/i/450/depositphotos_137468500-stock-photo-liquid-nitrogen-cryotherapy-procedure.jpg',
    href: '/services/cryotherapy',
  },
  {
    title: 'Women Wellness',
    image: 'https://drmonishamallik.com/wp-content/uploads/2025/04/Pregman4-1.webp',
    href: '/services/women-wellness',
  },
];

const ServicesCarousel = () => {
  return (
    <section className="w-full bg-white py-14 px-4 md:px-16 relative">
      {/* Heading and Description */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Explore Our Specialized Services
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          At MobiPhysio, we offer a wide range of treatments tailored to help you recover, rejuvenate, and thrive.
          Whether you're an athlete, a new mother, or managing chronic pain, our expert care is designed for you.
        </p>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-[52%] -left-4 z-10">
        <div className="swiper-button-prev cursor-pointer bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-lg" />
      </div>
      <div className="absolute top-[52%] -right-4 z-10">
        <div className="swiper-button-next cursor-pointer bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-lg" />
      </div>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="w-full"
      >
        {services.map((service, idx) => (
          <SwiperSlide key={idx}>
            <Link href={service.href} passHref>
              <div className="group relative w-full h-48 md:h-56 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-lg md:text-xl font-semibold text-center px-2 z-10">
                    {service.title}
                  </h3>
                </div>
                {/* Hover Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <ArrowUpRight className="text-white bg-black/60 rounded-full p-1 w-6 h-6" />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesCarousel;
