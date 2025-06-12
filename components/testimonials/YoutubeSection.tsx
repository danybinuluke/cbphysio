'use client';

import React from 'react';
import { motion } from 'framer-motion';

const YoutubeSection = () => {
  // Array of YouTube video IDs (the part after 'v=' in YouTube URLs)
  const testimonials = [
    { id: 'vksBToIByaY', title: 'Happy Patient #1' },
    { id: 'UgnFf0nRQBg', title: 'Happy Patient #2' },
    { id: '8x3IsXAOgFM', title: 'Happy Patient #3' },
    { id: '69pEALK7emE', title: 'Happy Patient #4' },
    { id: '00xDxsM1Pu4', title: 'Happy Patient #5' },
    { id: 'FC-tf92gf28', title: 'Happy Patient #6' }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Function to open YouTube channel
  const openYoutubeChannel = () => {
    window.open('https://www.youtube.com/channel/UCMR1IHxgYm1XT-1Cgfv-Vkg', '_blank');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Patient Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear directly from our patients about their healing journeys
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${testimonial.id}?modestbranding=1&rel=0`}
                  title={testimonial.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-gray-900 mb-2">
                  {testimonial.title}
                </h3>
                <button
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${testimonial.id}`, '_blank')}
                  className="text-blue-600 hover:text-amber-700 font-medium text-sm flex items-center"
                >
                  Watch on YouTube
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <button 
            onClick={openYoutubeChannel}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 inline-flex items-center"
          >
            View More Testimonials
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;