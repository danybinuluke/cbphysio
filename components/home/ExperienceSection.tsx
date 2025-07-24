'use client';

import React, { useMemo } from "react";
import MorphingText from "@/components/ui/morphingtext";
import { FancyTestimonialsSlider } from "@/components/ui/testimonialslider";
import { Button } from "@/components/ui/button";

export default function ExperienceSection() {
  const morphWords = useMemo(
    () => ["What", "our", "customers", "has", "to", "say"],
    []
  );

  const testimonials = useMemo(() => [
    {
      img: "https://images.unsplash.com/photo-1618245472177-2a74ad3b994a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMHdvbWFufGVufDB8fDB8fHww",
      quote:
        "Mobiphysio Clinic provided exceptional care with a personal touch. I felt supported every step of my recovery",
      name: "Muthulakshmi",
    },
    {
      img: "https://randomuser.me/api/portraits/men/50.jpg",
      quote:
        "Professional, punctual, and deeply caring – Mobiphysio made a huge difference in my healing journey.",
      name: "Sai Kumar",
    },
    {
      img: "https://images.pexels.com/photos/1624727/pexels-photo-1624727.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote:
        "From the first session, I knew I was in safe hands. Mobiphysio delivers quality care with compassion.",
      name: "Vineeth",
    },
  ], []);

  // For accessibility and low-performance devices
  const prefersReducedMotion = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  }, []);

  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20">
      <div className="flex flex-col items-center justify-center text-center gap-12">

        {/* Morphing Text */}
        {!prefersReducedMotion ? (
          <MorphingText texts={morphWords} className="max-w-screen-md" />
        ) : (
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">What our customers have to say</h2>
        )}

        {/* Testimonial Slider */}
        <div className="mx-auto w-full max-w-4xl rounded-xl border bg-background p-8 shadow-lg">
          <FancyTestimonialsSlider testimonials={testimonials} />
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-600 leading-relaxed">
            Want to hear more?
          </h3>
          <a href="/testimonials">
            <Button
              variant="link"
              className="bg-blue-700 text-white hover:bg-blue-400 font-sans-semibold transition will-change-transform"
            >
              View here
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
