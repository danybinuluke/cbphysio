'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Phone, Mail, MapPin, Clock, CheckCircle, AlertTriangle, Heart, Shield, User, Menu, X, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface CauseItem {
  title: string;
  description: string;
  icon: string;
}

interface RiskFactor {
  title: string;
  description: string;
}

// Animation variants for different elements
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Custom hook for scroll animations
const useScrollAnimation = (): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return [ref, isInView];
};

const ACLInjuryPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('acl-injury');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'acl-injury': true,
    'causes': true,
    'risk-factors': true,
    'prevention': true,
    'pre-surgery': true,
    'post-surgery': true,
    'physiotherapy': true
  });

  // Animation refs for each section
  const [heroRef, heroInView] = useScrollAnimation();
  const [sidebarRef, sidebarInView] = useScrollAnimation();
  const [aclRef, aclInView] = useScrollAnimation();
  const [causesRef, causesInView] = useScrollAnimation();
  const [riskRef, riskInView] = useScrollAnimation();
  const [preventionRef, preventionInView] = useScrollAnimation();
  const [preSurgeryRef, preSurgeryInView] = useScrollAnimation();
  const [postSurgeryRef, postSurgeryInView] = useScrollAnimation();
  const [physioRef, physioInView] = useScrollAnimation();
  const [approachRef, approachInView] = useScrollAnimation();
  const [servicesRef, servicesInView] = useScrollAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px' }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const tableOfContents: TableOfContentsItem[] = [
    { id: 'acl-injury', title: 'ACL INJURY' },
    { id: 'causes', title: 'Causes Of ACL Injury' },
    { id: 'risk-factors', title: 'Risk Factors That Are Ass...' },
    { id: 'prevention', title: 'Prevention Of ACL Injuries' },
    { id: 'pre-surgery', title: 'Pre-Surgery Physiotherapy' },
    { id: 'post-surgery', title: 'Post-Surgery Rehabilitation' },
    { id: 'physiotherapy', title: 'Physiotherapy Treatment ...' }
  ];

  const causes: CauseItem[] = [
    { 
      title: "Sudden Direction Change", 
      description: "Quick pivoting or cutting movements during sports activities",
      icon: "🔄"
    },
    { 
      title: "Direct Impact", 
      description: "Direct blow to the knee from contact sports or accidents",
      icon: "⚡"
    },
    { 
      title: "Landing Injuries", 
      description: "Improper landing from jumps with knee hyperextension",
      icon: "🦵"
    },
    { 
      title: "Deceleration", 
      description: "Sudden stopping movements during high-speed activities",
      icon: "🛑"
    },
    { 
      title: "Non-Contact Injuries", 
      description: "Most common type involving pivoting with a planted foot",
      icon: "🏃"
    },
    { 
      title: "Muscle Imbalance", 
      description: "Weakness in surrounding muscles leading to instability",
      icon: "⚖️"
    }
  ];

  const riskFactors: RiskFactor[] = [
    {
      title: "Age and Gender",
      description: "Female athletes are 2-8 times more likely to sustain ACL injuries, especially between ages 15-25."
    },
    {
      title: "Sports Participation", 
      description: "High-risk sports include soccer, basketball, football, skiing, and gymnastics."
    },
    {
      title: "Previous Injury",
      description: "History of ACL injury increases the risk of re-injury or injury to the opposite knee."
    },
    {
      title: "Muscle Weakness",
      description: "Weakness in quadriceps, hamstrings, or hip muscles can contribute to ACL injury risk."
    },
    {
      title: "Poor Conditioning",
      description: "Inadequate fitness level and poor neuromuscular control increase injury susceptibility."
    },
    {
      title: "Anatomical Factors",
      description: "Factors such as narrow intercondylar notch, increased Q-angle, and joint laxity may predispose to injury."
    }
  ];

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contact Buttons - Animated */}
      <motion.div 
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.button 
          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone className="w-5 h-5" />
        </motion.button>
        <motion.button 
          className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-indigo-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
          </svg>
        </motion.button>
      </motion.div>

      <div className="flex">
        {/* Animated Sidebar */}
        <motion.div 
          ref={sidebarRef}
          className="hidden lg:block sticky top-6 h-fit w-80 ml-6"
          variants={fadeInLeft}
          initial="hidden"
          animate={sidebarInView ? "visible" : "hidden"}
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-900">Contents</h2>
            </div>
            <nav className="p-4">
              <motion.ul 
                className="space-y-1"
                variants={staggerContainer}
                initial="hidden"
                animate={sidebarInView ? "visible" : "hidden"}
              >
                {tableOfContents.map((item, index) => (
                  <motion.li key={item.id} variants={staggerItem}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center text-left p-3 rounded-xl transition-all duration-200 ${
                        activeSection === item.id
                          ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100'
                          : 'text-gray-700 hover:bg-gray-50 hover:shadow-sm'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center text-white text-sm font-medium shadow-sm ${
                        activeSection === item.id ? 'bg-blue-600' : 'bg-gray-400'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="font-medium text-sm leading-tight">{item.title}</span>
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Animated Hero Section */}
          <motion.section 
            ref={heroRef}
            className="relative h-96 bg-gradient-to-r from-blue-700 to-indigo-800 flex items-center justify-center overflow-hidden"
            variants={fadeInUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <div className="absolute inset-0">
              <img 
                src="/acl.webp"
                alt="ACL injury rehabilitation"
                className="w-full h-full object-fill"
              />
            </div>
            <motion.div 
              className="relative z-10 text-center text-white"
              variants={scaleIn}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl text-blue-600 md:text-5xl font-bold mb-2">ACL Injury</h1>
              <p className="text-blue-600 text-lg">Comprehensive Rehabilitation & Recovery</p>
            </motion.div>
          </motion.section>

          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* ACL Injury Section - Animated */}
            <motion.section 
              id="acl-injury" 
              className="mb-16"
              ref={aclRef}
              variants={fadeInUp}
              initial="hidden"
              animate={aclInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">ACL INJURY</h2>
                <button 
                  onClick={() => toggleSection('acl-injury')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['acl-injury'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['acl-injury'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Physiotherapy plays a crucial role in the treatment and rehabilitation of an ACL (Anterior Cruciate Ligament) injury. While physiotherapy cannot replace the need for surgical intervention in many cases, it is an integral part of both pre-surgery and post-surgery care.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    From reducing pre-surgery discomfort to guiding the return to activities post-surgery, our experts are dedicated to empowering individuals with the tools and exercises essential for an ACL recovery. The ACL is one of the major ligaments in the knee that provides stability during rotational movements and prevents the tibia from sliding forward relative to the femur.
                  </p>
                </motion.div>
              )}
            </motion.section>

            {/* Causes Section - Animated */}
            <motion.section 
              id="causes" 
              className="mb-16"
              ref={causesRef}
              variants={fadeInUp}
              initial="hidden"
              animate={causesInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Causes Of ACL Injury</h2>
                <button 
                  onClick={() => toggleSection('causes')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['causes'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['causes'] && (
                <>
                  <motion.div 
                    className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      ACL injuries commonly occur during sports activities that involve sudden changes in direction, jumping, and direct contact. Understanding the mechanisms of injury can help in prevention and proper treatment planning.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Non-contact pivoting injuries (most common)</li>
                      <li>• Direct contact or collision injuries</li>
                      <li>• Hyperextension injuries</li>
                      <li>• Deceleration injuries</li>
                      <li>• Combination injuries with other knee structures</li>
                      <li>• Landing mechanics failures</li>
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {causes.slice(0, 3).map((cause, index) => (
                      <motion.div 
                        key={index} 
                        className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex items-center space-x-4"
                        variants={staggerItem}
                      >
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                          {cause.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{cause.title}</h3>
                          <p className="text-gray-600">{cause.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </>
              )}
            </motion.section>

            {/* Risk Factors Section - Animated */}
            <motion.section 
              id="risk-factors" 
              className="mb-16"
              ref={riskRef}
              variants={fadeInUp}
              initial="hidden"
              animate={riskInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Risk Factors That Are Associated With ACL Injury</h2>
                <button 
                  onClick={() => toggleSection('risk-factors')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['risk-factors'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['risk-factors'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Understanding risk factors is essential for injury prevention and identifying individuals who may benefit from targeted prevention programs. Several intrinsic and extrinsic factors contribute to ACL injury risk.
                  </p>
                  
                  <motion.div 
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {riskFactors.map((factor, index) => (
                      <motion.div key={index} variants={staggerItem}>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          <span className="text-black">• {factor.title}.</span>
                        </h4>
                        <p className="text-gray-700 ml-4">{factor.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </motion.section>

            {/* Prevention Section - Animated */}
            <motion.section 
              id="prevention" 
              className="mb-16"
              ref={preventionRef}
              variants={fadeInUp}
              initial="hidden"
              animate={preventionInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Prevention Of ACL Injuries</h2>
                <button 
                  onClick={() => toggleSection('prevention')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['prevention'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['prevention'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Prevention programs have been shown to significantly reduce ACL injury rates, particularly in female athletes. A comprehensive approach targeting multiple risk factors is most effective.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Implement neuromuscular training programs focusing on proper landing mechanics</li>
                    <li>• Strengthen hip, thigh, and core muscles to improve lower extremity control</li>
                    <li>• Practice proper cutting and pivoting techniques during sport-specific activities</li>
                    <li>• Improve balance and proprioception through targeted exercises</li>
                    <li>• Maintain proper conditioning throughout the sports season</li>
                    <li>• Use appropriate protective equipment and ensure proper field/court conditions</li>
                    <li>• Address any previous injuries or muscle imbalances before returning to sport</li>
                  </ul>
                </motion.div>
              )}
            </motion.section>

            {/* Pre-Surgery Section - Animated */}
            <motion.section 
              id="pre-surgery" 
              className="mb-16"
              ref={preSurgeryRef}
              variants={fadeInUp}
              initial="hidden"
              animate={preSurgeryInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Pre-Surgery Physiotherapy</h2>
                <button 
                  onClick={() => toggleSection('pre-surgery')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['pre-surgery'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['pre-surgery'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Pre-surgery physiotherapy, also known as "prehabilitation," is crucial for optimizing outcomes following ACL reconstruction surgery. The goals include:
                  </p>
                  
                  <motion.div 
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3 text-xl">Reduce Swelling and Inflammation</h4>
                      <p className="text-gray-700 ml-4">Techniques such as ice therapy, compression, and elevation help manage swelling and inflammation in the knee.</p>
                    </motion.div>
                    
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3 text-xl">Restore Range of Motion</h4>
                      <p className="text-gray-700 ml-4">Gentle exercises and stretches are employed to regain normal knee range of motion, ensuring flexibility before surgery.</p>
                    </motion.div>
                    
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3 text-xl">Strengthen Surrounding Muscles</h4>
                      <p className="text-gray-700 ml-4">Focusing on strengthening the muscles around the knee, especially the quadriceps and hamstrings, helps provide stability and support.</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </motion.section>

            {/* Post-Surgery Section - Animated */}
            <motion.section 
              id="post-surgery" 
              className="mb-16"
              ref={postSurgeryRef}
              variants={fadeInUp}
              initial="hidden"
              animate={postSurgeryInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Post-Surgery Rehabilitation</h2>
                <button 
                  onClick={() => toggleSection('post-surgery')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['post-surgery'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['post-surgery'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Post-surgery rehabilitation is a progressive process that typically takes 6-12 months. The program is divided into several phases:
                  </p>
                  
                  <motion.div 
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      { title: "Early Mobilization", desc: "Initiate gentle movement and weight-bearing exercises to promote circulation and prevent stiffness." },
                      { title: "Muscle Strengthening", desc: "Gradual progression of exercises to strengthen the quadriceps, hamstrings, and other leg muscles is crucial for knee stability." },
                      { title: "Balance and Proprioception Training", desc: "Specific exercises to improve balance and proprioception (the body's sense of joint position) help prevent future injuries." },
                      { title: "Functional Exercises", desc: "Integration of functional exercises that mimic real-life movements and sports-specific activities." },
                      { title: "Agility Training", desc: "Incorporation of agility drills and exercises to enhance dynamic stability and coordination." },
                      { title: "Sport-Specific Rehabilitation", desc: "Exclusive programs for athletes, focusing on returning to sport safely and effectively." }
                    ].map((item, index) => (
                      <motion.div key={index} variants={staggerItem}>
                        <h4 className="font-semibold text-gray-900 mb-2">• {item.title}</h4>
                        <p className="text-gray-700 ml-4">{item.desc}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </motion.section>

            {/* Physiotherapy Section - Animated */}
            <motion.section 
              id="physiotherapy" 
              className="mb-16"
              ref={physioRef}
              variants={fadeInUp}
              initial="hidden"
              animate={physioInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Physiotherapy Treatment For ACL Injury</h2>
                <button 
                  onClick={() => toggleSection('physiotherapy')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['physiotherapy'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['physiotherapy'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Our comprehensive physiotherapy approach for ACL injury includes specialized techniques and progressive rehabilitation protocols:
                  </p>
                  
                  <motion.div 
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      { title: "Gradual Return to Activity", desc: "A progressive plan for returning to sports or activities, ensuring that the knee is ready for the demands of specific movements." },
                      { title: "Education and Home Exercise Program", desc: "Providing guidance on proper biomechanics, injury prevention, and a personalized home exercise program to maintain progress outside of therapy sessions." },
                      { title: "Monitoring and Adjustments", desc: "Regular assessment and adjustment of the rehabilitation plan based on the individual's progress and response to treatment." }
                    ].map((item, index) => (
                      <motion.div key={index} variants={staggerItem}>
                        <h4 className="font-semibold text-gray-900 mb-2">• {item.title}</h4>
                        <p className="text-gray-700 ml-4">{item.desc}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.div 
                    className="grid md:grid-cols-2 gap-6 mt-8"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3">Treatment Modalities:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Manual therapy techniques</li>
                        <li>• Therapeutic ultrasound</li>
                        <li>• Electrical stimulation</li>
                        <li>• Cryotherapy and thermotherapy</li>
                      </ul>
                    </motion.div>
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3">Exercise Protocols:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Progressive strength training</li>
                        <li>• Neuromuscular re-education</li>
                        <li>• Plyometric exercises</li>
                        <li>• Sport-specific drills</li>
                      </ul>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </motion.section>

            {/* Our Approach Section - Animated */}
            <motion.section 
              className="mb-16"
              ref={approachRef}
              variants={scaleIn}
              initial="hidden"
              animate={approachInView ? "visible" : "hidden"}
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
                    animate={approachInView ? "visible" : "hidden"}
                    transition={{ delay: 0.3 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      <strong>Our Approach at Mobiphysio</strong>
                    </h2>
                    <p className="text-xl md:text-2xl">
                      A lot more awaits you! Ready to get back to your active lifestyle?
                    </p>
                    <br></br>
                    <br></br>
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

            {/* Explore More Services Section - Animated */}
            <motion.section 
              className="mb-16 text-center"
              ref={servicesRef}
              variants={fadeInUp}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
            >
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <p className="text-gray-700 text-lg mb-6">
                  Discover our comprehensive range of physiotherapy services designed to help you achieve optimal health and wellness.
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
        </div>
      </div>
    </div>
  );
};

export default ACLInjuryPage;
