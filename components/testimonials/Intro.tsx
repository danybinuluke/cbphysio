'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Intro = () => {
  // Animation variants only for the new description section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Your EXISTING BANNER - completely unchanged */}
      <section
        className="relative w-full h-[200px] md:h-[250px] bg-cover bg-center text-white"
        style={{ 
          backgroundImage: 'url("/testimg.png")',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-black/30 flex items-end pb-8 justify-start px-4 md:px-16">
          <div className="mb-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Testimonials</h1>
            <p className="text-sm md:text-base text-white/90">
              <Link href="/" className="underline hover:text-white transition-colors">Home</Link>
              &nbsp;&gt;&nbsp;
              <span className="text-white">Testimonials</span>
            </p>
          </div>
        </div>
      </section>

      {/* NEW DESCRIPTION SECTION - added below your existing banner */}
      <motion.div 
        className="max-w-6xl mx-auto px-6 py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Your Personalized Road to Wellness
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>

        <div className="grid gap-8">
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 leading-relaxed font-serif">
            Mobiphysio, being the <span className="font-semibold text-amber-600">Best Physiotherapy Clinic in Coimbatore</span>, 
            is your Personalized Road to Wellness, and we prioritize your unique needs and well-being, 
            guiding you towards long-lasting health and mobility.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 leading-relaxed font-serif">
            We believe in the power of holistic care. That's why we offer a comprehensive range of 
            <span className="font-semibold"> Physio services</span>, including manual therapy, exercise prescription, 
            electrotherapy, and more. Our goal is not only to reduce your symptoms but also to address 
            the underlying causes of your discomfort.
          </motion.p>

          <motion.div variants={itemVariants} className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
            <p className="text-lg italic text-gray-800 font-serif">
              "It's not just about Physio Treatment; it's a comforting journey toward a healthier you."
            </p>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 leading-relaxed font-serif">
            With a focus on patient-centered care, our Physiotherapist prioritizes open communication 
            and collaboration. Whether you're recovering from an injury, managing a chronic condition, 
            or seeking to enhance your athletic performance, we're here to support you.
          </motion.p>
        </div>
      </motion.div>
    </>
  );
};

export default Intro;