'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight, Phone, Mail, MapPin, Clock, CheckCircle, AlertTriangle, Heart, Shield, User, Activity, Menu, X, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface CauseItem {
  title: string;
  description: string;
  icon: string;
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

const PostureCorrectionPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('posture-overview');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'posture-overview': true,
    'conditions': true,
    'treatment': true,
    'benefits': true
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Create refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const postureRef = useRef<HTMLDivElement>(null);
  const conditionsRef = useRef<HTMLDivElement>(null);
  const treatmentRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Use useInView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-100px" });
  const postureInView = useInView(postureRef, { once: true, margin: "-100px" });
  const conditionsInView = useInView(conditionsRef, { once: true, margin: "-100px" });
  const treatmentInView = useInView(treatmentRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const approachInView = useInView(approachRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

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
    { id: 'posture-overview', title: 'Understanding Posture' },
    { id: 'conditions', title: 'Common Causes' },
    { id: 'treatment', title: 'Treatment Methods' },
    { id: 'benefits', title: 'Who Will Benefit?' }
  ];

  const causes: CauseItem[] = [
    { 
      title: "Desk Work", 
      description: "Long hours at computers causing forward head posture",
      icon: "💻"
    },
    { 
      title: "Poor Ergonomics", 
      description: "Incorrectly positioned workstations and furniture",
      icon: "🪑"
    },
    { 
      title: "Muscle Weakness", 
      description: "Weak core and back muscles unable to support spine",
      icon: "💪"
    },
    { 
      title: "Prolonged Sitting", 
      description: "Extended periods of sitting without movement breaks",
      icon: "⏰"
    },
    { 
      title: "Tech Neck", 
      description: "Looking down at phones and devices frequently",
      icon: "📱"
    },
    { 
      title: "Stress & Tension", 
      description: "Mental stress manifesting as physical tension",
      icon: "😰"
    }
  ];

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
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
          className="hidden lg:block sticky top-6 h-fit w-80 ml-6 z-10"
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
          {/* Animated Hero Section with proper image sizing */}
          <motion.section 
            ref={heroRef}
            className="relative h-96 bg-gradient-to-r from-blue-700 to-indigo-800 flex items-center justify-center overflow-hidden"
            variants={fadeInUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <div className="absolute inset-0">
              <img 
                src="/posture-correction.png"
                alt="Posture correction treatment"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: 'center center',
                  backgroundSize: 'cover'
                }}
              />
            </div>
            <motion.div 
              className="relative z-10 text-center text-white"
              variants={scaleIn}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl text-blue-600 md:text-5xl font-bold mb-2">Posture Correction Treatment</h1>
              <p className="text-blue-600 text-lg">Comprehensive Alignment & Rehabilitation</p>
            </motion.div>
          </motion.section>

          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Understanding Posture Section - Animated (removed image placeholder) */}
            <motion.section 
              id="posture-overview" 
              className="mb-16"
              ref={postureRef}
              variants={fadeInUp}
              initial="hidden"
              animate={postureInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Understanding Poor Posture</h2>
                <button 
                  onClick={() => toggleSection('posture-overview')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['posture-overview'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['posture-overview'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    In our busy lives, where long hours at desks and extended commutes have become common, many of us find ourselves dealing with the consequences of poor posture. The aches, pains, and fatigue associated with slouching or sitting for a long time can impact our daily lives more than we realize.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Good posture not only looks nice but also prevents pain and injuries. In our sedentary lifestyles, it's crucial to maintain good posture, especially when our days are mostly spent sitting. Proper alignment supports your spine and reduces strain on muscles and joints.
                  </p>
                </motion.div>
              )}
            </motion.section>

            {/* Common Causes Section - Animated */}
            <motion.section 
              id="conditions" 
              className="mb-16"
              ref={conditionsRef}
              variants={fadeInUp}
              initial="hidden"
              animate={conditionsInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Common Causes of Poor Posture</h2>
                <button 
                  onClick={() => toggleSection('conditions')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['conditions'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['conditions'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Poor posture can develop from various lifestyle factors and work habits. Understanding these causes is the first step toward better alignment and pain relief.
                  </p>
                  
                  <motion.div 
                    className="grid gap-4 mb-8"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div 
                      className="bg-red-50 rounded-lg p-6 border-l-4 border-red-400"
                      variants={staggerItem}
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Sedentary Lifestyle</h4>
                      <p className="text-gray-700">Extended periods of sitting and lack of movement throughout the day</p>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-400"
                      variants={staggerItem}
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Modern Work Environment</h4>
                      <p className="text-gray-700">Computer work, desk jobs, and poorly designed workstations contributing to postural problems</p>
                    </motion.div>
                  </motion.div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Specific Contributing Factors:</h3>
                    <motion.div 
                      className="space-y-4"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      {causes.map((cause, index) => (
                        <motion.div 
                          key={index} 
                          className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4"
                          variants={staggerItem}
                        >
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg">
                            {cause.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900">{cause.title}</h4>
                            <p className="text-gray-600 text-sm">{cause.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Quick Tips Section */}
                  <motion.div 
                    className="mt-8 bg-blue-50 rounded-lg p-6"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Some Quick Tips to Consider</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Sit up straight in a chair with good back support</li>
                      <li>• Avoid low or tilting seats</li>
                      <li>• Don't cross your legs</li>
                      <li>• Make sure your computer setup is at the right height and position</li>
                    </ul>
                  </motion.div>
                </motion.div>
              )}
            </motion.section>

            {/* Treatment Methods Section - Animated */}
            <motion.section 
              id="treatment" 
              className="mb-16"
              ref={treatmentRef}
              variants={fadeInUp}
              initial="hidden"
              animate={treatmentInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">How We Treat Posture Corrections</h2>
                <button 
                  onClick={() => toggleSection('treatment')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['treatment'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['treatment'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    We create a personalized plan based on how you sit, stand, your daily routine, and what you need. The plan includes exercises to improve your posture, a home exercise program to make you more aware and mobile, and tips on sitting and standing right for your job or activities. We also check your workstation setup and suggest changes, teach techniques for moving things, and help modify activities to prevent future issues and encourage a healthy lifestyle.
                  </p>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Treatment Methods:</h3>
                    
                    <motion.div 
                      className="space-y-6"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.div 
                        className="bg-blue-50 rounded-lg p-6"
                        variants={staggerItem}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Postural Assessment & Analysis</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Comprehensive evaluation of your sitting, standing, and movement patterns</li>
                          <li>• Identification of muscle imbalances and alignment issues</li>
                        </ul>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-green-50 rounded-lg p-6"
                        variants={staggerItem}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Strengthening & Flexibility Exercises</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Targeted exercises to strengthen weak postural muscles</li>
                          <li>• Stretching programs to improve flexibility and reduce tension</li>
                        </ul>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-purple-50 rounded-lg p-6"
                        variants={staggerItem}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Ergonomic Assessment</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Workstation evaluation and optimization recommendations</li>
                          <li>• Proper positioning of monitors, keyboards, and seating arrangements</li>
                        </ul>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-yellow-50 rounded-lg p-6"
                        variants={staggerItem}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Movement Re-education</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Teaching proper body mechanics for daily activities</li>
                          <li>• Training in correct lifting, sitting, and movement techniques</li>
                          <li>• Developing body awareness and postural habits</li>
                        </ul>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </motion.section>

            {/* Who Will Benefit Section - Animated */}
            <motion.section 
              id="benefits" 
              className="mb-16"
              ref={benefitsRef}
              variants={fadeInUp}
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Who Will Benefit?</h2>
                <button 
                  onClick={() => toggleSection('benefits')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['benefits'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['benefits'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Posture correction therapy benefits individuals experiencing pain and discomfort from poor alignment and sedentary lifestyles:
                  </p>
                  <motion.div 
                    className="grid md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3">Ideal Candidates:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Office workers and desk professionals</li>
                        <li>• Students spending long hours studying</li>
                        <li>• Individuals with chronic neck/back pain</li>
                        <li>• People with forward head posture</li>
                        <li>• Those experiencing tension headaches</li>
                        <li>• Anyone seeking to improve their posture</li>
                      </ul>
                    </motion.div>
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3">Common Conditions:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Tech neck and forward head posture</li>
                        <li>• Rounded shoulders syndrome</li>
                        <li>• Lower back pain from sitting</li>
                        <li>• Muscle tension and stiffness</li>
                        <li>• Postural-related headaches</li>
                        <li>• Core weakness and instability</li>
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
                    alt="Mobiphysio posture approach"
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
                      Ready to improve your posture? Let's start your alignment journey!
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

export default PostureCorrectionPage;
