'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Menu, Phone, X, Calendar, ArrowRight, MapPin, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu } from '@/components/ui/navigation-menu';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import TeamSection from '@/components/home/TeamSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import LatestNewsSection from '@/components/home/LatestNewsSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import ServicesMarquee from '@/components/home/ServicesMarquee';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ServicesMarquee />
        <TeamSection />
        <TestimonialsSection />
        <LatestNewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;