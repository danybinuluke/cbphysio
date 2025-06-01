'use client';

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const backgroundImages = [
  'https://images.pexels.com/photos/5473177/pexels-photo-5473177.jpeg',
  'https://images.unsplash.com/photo-1706353399656-210cca727a33?q=80&w=1470&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1648638810931-60d2d55d052e?q=80&w=1470&auto=format&fit=crop',
];

const headingText = "Precision Care for Pain-free Mobility";
const paragraphText = "Transforming physiotherapy with AI-powered diagnosis and personalized treatment pathways --- delivering effective pain-relief & mobility care across Clinics, Homes & Tele-Rehab.";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [headingDisplay, setHeadingDisplay] = useState('');
  const [paragraphDisplay, setParagraphDisplay] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let paragraphTimeout: NodeJS.Timeout;

    const typeText = (text: string, setter: (val: string) => void, delay = 50, doneCallback?: () => void) => {
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

    typeText(headingText, setHeadingDisplay, 40, () => {
      paragraphTimeout = setTimeout(() => {
        typeText(paragraphText, setParagraphDisplay, 25);
      }, 300);
    });

    return () => {
      clearTimeout(paragraphTimeout);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-chart-3/80 to-black/60" />
      </div>

      <div className="text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 inline-block">
          <span>{headingDisplay}</span>
          <span className="inline-block w-[1ch] animate-blink align-baseline">|</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 min-h-[96px]">
          {paragraphDisplay}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button>
            <CalendarDays className="mr-2 h-5 w-5" />
            Book Appointment
          </Button>
          <div className="text-center"> {/* Add text-center to the parent div */}
             <Button>
                Request Callback <ArrowRight className="ml-2" /> {/* Consider adjusting ml-10 to ml-2 or ml-3 */}
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
