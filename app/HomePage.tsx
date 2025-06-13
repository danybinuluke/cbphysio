'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Menu, Phone, X, Calendar, ArrowRight, MapPin, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu } from '@/components/ui/navigation-menu';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import PainSection from '@/components/home/PainSection';
import ChooseSection from '@/components/home/ChooseSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import ServicesMarquee from '@/components/home/ServicesMarquee';
import ExperienceSection from '@/components/home/ExperienceSection';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">

      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ServicesMarquee />
        <AboutSection />
        <PainSection />
        <ChooseSection />
        <ContactSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;