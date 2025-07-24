'use client';

import React, { useMemo, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/ui/reveal';
import RotatingText, { RotatingTextRef } from '@/components/ui/rotatingtext';

const ServicesSection = () => {
  const rotatingTextRef = useRef<RotatingTextRef>(null);

  // Motion preference detection (accessibility)
  const prefersReducedMotion = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  }, []);

  // Words for rotating text
  const rotatingWords = useMemo(
    () => ['Specialized Services', 'Tailored Treatments', 'Expert Care'],
    []
  );

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading + Rotating Text */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex justify-center flex-wrap gap-2">
              <span>Our</span>
              {!prefersReducedMotion ? (
                <RotatingText
                  ref={rotatingTextRef}
                  texts={rotatingWords}
                  splitBy="words"
                  auto
                  loop
                  staggerDuration={0.05}
                  mainClassName="inline-block"
                  splitLevelClassName="ml-2"
                  elementLevelClassName="text-primary"
                />
              ) : (
                <span className="text-primary ml-2">Services</span>
              )}
            </h2>
            <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of physiotherapy treatments tailored to your
              specific needs, helping you achieve optimal physical health and wellbeing.
            </p>
          </div>
        </Reveal>

        {/* CTA Button */}
        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Button
              variant="ghost"
              size="lg"
              className="border-chart-2 text-chart-1 font-bold hover:bg-chart-2 hover:text-white transition-colors will-change-transform"
            >
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicesSection;
