'use client'
import React, { useRef } from 'react';
import { CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const DiastasisRectiCaseStudy: React.FC = () => {
  const finalApproachRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const finalApproachInView = useInView(finalApproachRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8 max-w-4xl mx-auto">
      {/* Case Study Content */}
      <motion.section
        className="mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Physiotherapy for Diastasis Recti Abdominis</h1>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Diastasis recti happens when the left and right abdominal muscles weaken and stretch to the side during pregnancy. While it’s very common, many expectant or new mothers don’t even know what it is, let alone whether or not they have it.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          XYZ, from Coimbatore says that she found out about her Diastasis Recti only years after she had given birth to her second son. She says she knew something wasn’t right but thought it was part of pregnancy and would go away with time. Only after a gynaecologist diagnosed her with the condition did she come to MobiPhysio to start her rehabilitation journey. She was able to get the appropriate medical attention for diastasis recti only 12 years after her second delivery.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          According to her, the biggest struggle were the body image issues she faced. She says when she stood up straight, she still looked very much pregnant even though she had two sons who were all grown up. She had people who came up to her to ask when the next baby was due.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          All of that has slowly changed with her two year journey at MobiPhysio. The separation of the abdominal muscles has reduced considerably, there is a marked increase in her muscle tone and the skin around the area is no longer saggy. When she came to us in 2022, she also had a deviated umbilicus due to the abdominal wall separation which we were able to correct successfully. She has been determined and very cooperative with our team which has led to the results we see in the images below. Some of the treatment methods used were Dynamic Neuromuscular Stabilisation (DNS) exercises, correction of breathing pattern, exercises to improve core and pelvic floor muscle coordination and stability exercises.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          She still has a long road ahead but has now become a better version of herself. She is stronger than most 45 year old women and is able to have a healthier lifestyle too.
        </p>
      </motion.section>

      {/* Final Approach / CTA */}
      <motion.section 
        className="mb-16"
        ref={finalApproachRef}
        variants={scaleIn}
        initial="hidden"
        animate={finalApproachInView ? "visible" : "hidden"}
      >
        <div className="relative h-80 rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/bg-img.png"
              alt="Mobiphysio approach"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <motion.div 
              className="text-center text-white px-6"
              variants={fadeInUp}
              initial="hidden"
              animate={finalApproachInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-3xl font-semibold mb-4">
                <strong>Our Approach at Mobiphysio</strong>
              </h2>
              <p className="text-xl md:text-xl">
                Ready to get back to peak performance? Let's start your recovery journey!
              </p>
              <br />
              <motion.div 
                className='mb-16 text-center'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href='/book-appointment'>
                  <Button variant={"interactive-hover"}>
                    <CalendarDays className="mr-2 h-6 w-6" />
                    Book Appointment
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Explore More Services */}
      <motion.section 
        className="mb-16 text-center"
        ref={servicesRef}
        variants={fadeInUp}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
      >
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <p className="text-gray-700 text-lg mb-6">
            Explore our full range of physiotherapy services for holistic health and well-being.
          </p>
          <motion.button 
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href='/services'><span className="relative z-10">Check Other Services</span></a>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default DiastasisRectiCaseStudy;
