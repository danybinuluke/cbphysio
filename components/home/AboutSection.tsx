'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HighlightText } from '@/components/animate-ui/text/highlight';
import { ArrowRight, Users, Clock } from 'lucide-react';
import Reveal from '@/components/ui/reveal';

const AboutSection = () => {
  const features = [
    'Personalized Treatment Plans',
    'State-of-the-Art Equipment',
    'Experienced Certified Therapists',
    'Comprehensive Care Programs',
  ];

  const CounterBlock = ({ inView }: { inView: boolean }) => {
    const [yearsCount, setYearsCount] = useState(0);
    const [patientsCount, setPatientsCount] = useState(0);

    useEffect(() => {
      if (inView && yearsCount < 25) {
        const timer = setTimeout(() => setYearsCount((prev) => prev + 1), 80);
        return () => clearTimeout(timer);
      }
    }, [inView, yearsCount]);

    useEffect(() => {
      if (inView && patientsCount < 3000) {
        const increment = Math.ceil(3000 / 50);
        const timer = setTimeout(() => {
          setPatientsCount((prev) => Math.min(prev + increment, 3000));
        }, 20);
        return () => clearTimeout(timer);
      }
    }, [inView, patientsCount]);

    return (
      <div className="grid grid-cols-2 gap-6 pt-6">
        <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 mb-3">
            <Clock className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-1">{yearsCount}+</div>
          <div className="text-sm text-gray-600">Years of Experience</div>
        </div>

        <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 mb-3">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-1">{patientsCount}+</div>
          <div className="text-sm text-gray-600">Happy Patients</div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50/50 to-white relative">
      {/* Background Image for Mobile */}
      <div className="absolute inset-0 lg:hidden z-0">
        <Image
          src="https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg"
          alt="Physiotherapy treatment session"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-md"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-blue-100/50 border border-blue-200 rounded-3xl shadow-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image (Only for Desktop) */}
            <div className="relative order-2 lg:order-1 hidden lg:block">
              <Reveal>
                <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg"
                    alt="Physiotherapy treatment session"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-200/20 rounded-full blur-2xl"></div>
                </div>
              </Reveal>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-200 space-y-8">
                <Reveal delay={0.1}>
                  <div className="space-y-6">
                    <div className="inline-block">
                      <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">
                        About Mobiphysio
                      </span>
                    </div>

                    <Reveal delay={0.15}>
                      <div className="flex flex-col gap-1">
                        <HighlightText
                          text="Seeking"
                          className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                          color="#7c3aed"
                        />
                        <HighlightText
                          text="individualized care"
                          className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                          color="#7c3aed"
                        />
                        <HighlightText
                          text="for exceptional results?"
                          className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                          color="#7c3aed"
                        />
                      </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                      <p className="text-lg text-gray-600 leading-relaxed pt-2">
                        Then you are at the right place!
                      </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                      <p className="text-gray-600 leading-relaxed">
                        Your Personalized Road to Wellness is all here and we prioritize your unique needs and well-being,
                        guiding you towards long-lasting health and mobility. Our comprehensive approach combines
                        cutting-edge techniques with compassionate care.
                      </p>
                    </Reveal>
                  </div>
                </Reveal>

                <Reveal delay={0.4}>
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <Reveal key={index} delay={0.5 + index * 0.1}>
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-green-600"></div>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.6}>{({ inView }) => <CounterBlock inView={inView} />}</Reveal>

                <Reveal delay={0.8}>
                  <div className="flex justify-center pt-4">
                    <a
                      href="about"
                      className="group relative inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:shadow-blue-500/40 hover:bg-gray-700 active:scale-95 active:shadow-inner"
                    >
                      <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-blue-700 to-green-700 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"></span>
                      Know More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={0.9}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-green-400 border-2 border-white"
                          ></div>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">Trusted by 3000+ patients</span>
                    </div>

                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-600 ml-1">5.0 Rating</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
