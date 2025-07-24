'use client';

import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const backgroundImages = [
  'https://mobiphysio.in/assets/theme/img/slider/pain-management-treatment.webp',
  'https://mobiphysio.in/assets/theme/img/slider/cryotherapy-technique.webp',
  'https://mobiphysio.in/assets/theme/img/slider/sports-injury.webp',
  'https://mobiphysio.in/assets/theme/img/slider/women-wellness.webp',
  'https://mobiphysio.in/assets/theme/img/slider/lifestyle-management-1-1.webp'
];

const headingText = "Precision Care for Pain-free Mobility";
const paragraphText =
  "Transforming physiotherapy with AI-powered diagnosis and personalized treatment pathways delivering effective pain-relief & mobility care across Clinics, Homes & Tele-Rehab.";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [headingDisplay, setHeadingDisplay] = useState('');
  const [paragraphDisplay, setParagraphDisplay] = useState('');

  const prefersReducedMotion = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  }, []);

  const backgroundStyle = useMemo(() => ({
    backgroundImage: `url(${backgroundImages[currentIndex]})`,
  }), [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let paragraphTimeout: NodeJS.Timeout;

    const typeText = (
      text: string,
      setter: (val: string) => void,
      delay = 50,
      doneCallback?: () => void
    ) => {
      let i = 0;
      const type = () => {
        if (i <= text.length) {
          setter(text.slice(0, i));
          i++;
          setTimeout(type, delay);
        } else if (doneCallback) {
          doneCallback();
        }
      };
      type();
    };

    if (prefersReducedMotion) {
      setHeadingDisplay(headingText);
      setParagraphDisplay(paragraphText);
    } else {
      typeText(headingText, setHeadingDisplay, 40, () => {
        paragraphTimeout = setTimeout(() => {
          typeText(paragraphText, setParagraphDisplay, 25);
        }, 300);
      });
    }

    return () => clearTimeout(paragraphTimeout);
  }, [prefersReducedMotion]);

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-start text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.02 }}
            animate={prefersReducedMotion ? false : { opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={backgroundStyle}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-chart-3/80 to-black/60" />
      </div>

      <div className="text-left max-w-2xl px-4 ml-6 md:ml-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 inline-block">
          <span>{headingDisplay}</span>
          {!prefersReducedMotion && (
            <span className="inline-block w-[1ch] animate-blink align-baseline">|</span>
          )}
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 min-h-[96px]">
          {paragraphDisplay}
        </p>

        <div className="flex flex-col sm:flex-row items-start justify-start space-y-4 sm:space-y-0 sm:space-x-6">
          <Button variant={"interactive-hover"}>
            <CalendarDays className="mr-2 h-6 w-6" />
            Book Appointment
          </Button>
          <div>
            <Button variant={"interactive-hover"}>
              Request Callback
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
