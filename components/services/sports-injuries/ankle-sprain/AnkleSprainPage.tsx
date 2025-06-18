'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight, Phone, Mail, MapPin, Clock, CheckCircle, AlertTriangle, Heart, Shield, User, Menu, X, CalendarDays } from 'lucide-react';
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

const AnkleSprainPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('ankle-sprain');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'ankle-sprain': true,
    'assessment': true,
    'price-protocol': true,
    'treatment-stages': true,
    'strengthening': true,
    'functional-recovery': true,
    'prevention': true
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Create refs for each section - Fixed ref initialization
  const heroRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const ankleRef = useRef<HTMLDivElement>(null);
  const assessmentRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const treatmentRef = useRef<HTMLDivElement>(null);
  const strengthRef = useRef<HTMLDivElement>(null);
  const functionalRef = useRef<HTMLDivElement>(null);
  const preventionRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Use useInView hooks properly
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-100px" });
  const ankleInView = useInView(ankleRef, { once: true, margin: "-100px" });
  const assessmentInView = useInView(assessmentRef, { once: true, margin: "-100px" });
  const priceInView = useInView(priceRef, { once: true, margin: "-100px" });
  const treatmentInView = useInView(treatmentRef, { once: true, margin: "-100px" });
  const strengthInView = useInView(strengthRef, { once: true, margin: "-100px" });
  const functionalInView = useInView(functionalRef, { once: true, margin: "-100px" });
  const preventionInView = useInView(preventionRef, { once: true, margin: "-100px" });
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
    { id: 'ankle-sprain', title: 'ANKLE SPRAIN' },
    { id: 'assessment', title: 'Initial Assessment' },
    { id: 'price-protocol', title: 'PRICE Protocol' },
    { id: 'treatment-stages', title: 'Treatment Stages' },
    { id: 'strengthening', title: 'Strength & Balance Training' },
    { id: 'functional-recovery', title: 'Functional Recovery' },
    { id: 'prevention', title: 'Prevention & Education' }
  ];

  const priceSteps: CauseItem[] = [
    { 
      title: "Protection", 
      description: "Using support like a brace or taping to protect the injured ankle",
      icon: "🛡️"
    },
    { 
      title: "Rest", 
      description: "Allowing the ankle time to heal by minimizing weight-bearing activities",
      icon: "😴"
    },
    { 
      title: "Ice", 
      description: "Applying ice to reduce swelling and numb pain",
      icon: "🧊"
    },
    { 
      title: "Compression", 
      description: "Using compression bandages to control swelling",
      icon: "🩹"
    },
    { 
      title: "Elevation", 
      description: "Keeping the ankle elevated to reduce swelling",
      icon: "⬆️"
    }
  ];

  const treatmentStages: RiskFactor[] = [
    {
      title: "Pain Management",
      description: "With the help of ultrasound, electrical stimulation, or laser therapy, pain and inflammation can be managed effectively."
    },
    {
      title: "Range of Motion Exercises", 
      description: "Gentle exercises to maintain or regain ankle mobility without causing additional stress on the injured ligaments."
    },
    {
      title: "Gait Training",
      description: "Assessment and correction of any altered walking patterns to restore a normal gait and movement patterns."
    },
    {
      title: "Progressive Loading",
      description: "Gradual introduction of weight-bearing activities to help tissues adapt and strengthen during the healing process."
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
                src="/ankle-sprain.webp"
                alt="Ankle sprain rehabilitation"
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
              <h1 className="text-4xl text-blue-600 md:text-5xl font-bold mb-2">Ankle Sprain</h1>
              <p className="text-blue-600 text-lg">Expert Recovery & Rehabilitation</p>
            </motion.div>
          </motion.section>

          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Ankle Sprain Section - Animated */}
            <motion.section 
              id="ankle-sprain" 
              className="mb-16"
              ref={ankleRef}
              variants={fadeInUp}
              initial="hidden"
              animate={ankleInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">ANKLE SPRAIN</h2>
                <button 
                  onClick={() => toggleSection('ankle-sprain')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['ankle-sprain'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['ankle-sprain'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Dealing with an ankle sprain? We get it, and we're here to make the recovery journey as smooth as possible. Our friendly physiotherapy team is all about personalized care, helping you get rid of the discomfort to the curb, build strength, and get back on your feet.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The treatment of an ankle sprain through physiotherapy typically involves several stages, focusing on reducing pain, swelling, restoring normal function, and preventing re-injury. Our comprehensive approach ensures you receive the most effective treatment tailored to your specific needs and recovery goals.
                  </p>
                </motion.div>
              )}
            </motion.section>

            {/* Initial Assessment Section - Animated */}
            <motion.section 
              id="assessment" 
              className="mb-16"
              ref={assessmentRef}
              variants={fadeInUp}
              initial="hidden"
              animate={assessmentInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Initial Assessment</h2>
                <button 
                  onClick={() => toggleSection('assessment')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['assessment'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['assessment'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    A thorough assessment by a physiotherapist helps determine the severity of the sprain, identifying specific structures affected and assessing the range of motion, strength, and stability of the ankle.
                  </p>
                  <motion.div 
                    className="grid md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3">Assessment Components:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Range of motion evaluation</li>
                        <li>• Strength testing</li>
                        <li>• Stability assessment</li>
                        <li>• Pain level measurement</li>
                      </ul>
                    </motion.div>
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3">Diagnostic Focus:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Ligament damage severity</li>
                        <li>• Swelling patterns</li>
                        <li>• Functional limitations</li>
                        <li>• Recovery potential</li>
                      </ul>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </motion.section>

            {/* PRICE Protocol Section - Animated */}
            <motion.section 
              id="price-protocol" 
              className="mb-16"
              ref={priceRef}
              variants={fadeInUp}
              initial="hidden"
              animate={priceInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">PRICE Protocol</h2>
                <button 
                  onClick={() => toggleSection('price-protocol')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['price-protocol'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['price-protocol'] && (
                <>
                  <motion.div 
                    className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      The PRICE protocol is the gold standard for immediate ankle sprain management. This approach helps control inflammation, reduce pain, and create optimal conditions for healing during the acute phase of injury.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {priceSteps.map((step, index) => (
                      <motion.div 
                        key={index} 
                        className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex items-center space-x-4"
                        variants={staggerItem}
                      >
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </>
              )}
            </motion.section>

            {/* Treatment Stages Section - Animated */}
            <motion.section 
              id="treatment-stages" 
              className="mb-16"
              ref={treatmentRef}
              variants={fadeInUp}
              initial="hidden"
              animate={treatmentInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Treatment Stages</h2>
                <button 
                  onClick={() => toggleSection('treatment-stages')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['treatment-stages'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['treatment-stages'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Our treatment approach progresses through carefully structured stages, each designed to address specific aspects of your recovery while building upon previous achievements.
                  </p>
                  
                  <motion.div 
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {treatmentStages.map((stage, index) => (
                      <motion.div key={index} variants={staggerItem}>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          <span className="text-black">• {stage.title}</span>
                        </h4>
                        <p className="text-gray-700 ml-4">{stage.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </motion.section>

            {/* Strength & Balance Training Section - Animated */}
            <motion.section 
              id="strengthening" 
              className="mb-16"
              ref={strengthRef}
              variants={fadeInUp}
              initial="hidden"
              animate={strengthInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Strength & Balance Training</h2>
                <button 
                  onClick={() => toggleSection('strengthening')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['strengthening'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['strengthening'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <motion.div 
                    className="grid md:grid-cols-2 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-4">Strength Training:</h4>
                      <p className="text-gray-700 mb-4">Progressive exercises to strengthen the muscles around the ankle, improving stability and preventing re-injury.</p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Resistance band exercises</li>
                        <li>• Calf raises and variations</li>
                        <li>• Ankle strengthening in all directions</li>
                        <li>• Progressive weight-bearing exercises</li>
                      </ul>
                    </motion.div>
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-4">Proprioception & Balance:</h4>
                      <p className="text-gray-700 mb-4">Specific exercises to enhance proprioception (awareness of body position) and improve balance, reducing the risk of future sprains.</p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Single-leg balance exercises</li>
                        <li>• Wobble board training</li>
                        <li>• Dynamic balance challenges</li>
                        <li>• Sport-specific balance drills</li>
                      </ul>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </motion.section>

            {/* Functional Recovery Section - Animated */}
            <motion.section 
              id="functional-recovery" 
              className="mb-16"
              ref={functionalRef}
              variants={fadeInUp}
              initial="hidden"
              animate={functionalInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Functional Recovery</h2>
                <button 
                  onClick={() => toggleSection('functional-recovery')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['functional-recovery'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['functional-recovery'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <motion.div 
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3">Functional Activities</h4>
                      <p className="text-gray-700">Gradual introduction of activities that mimic daily movements and sports-specific tasks, ensuring the ankle can handle various demands.</p>
                    </motion.div>
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3">Gradual Return to Activity</h4>
                      <p className="text-gray-700">A phased approach to reintroduce sports or vigorous activities, ensuring the ankle is adequately prepared for increased demands.</p>
                    </motion.div>
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3">Bracing or Taping</h4>
                      <p className="text-gray-700">Recommending or teaching the proper application of braces or taping to support the ankle during activities.</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </motion.section>

            {/* Prevention & Education Section - Animated */}
            <motion.section 
              id="prevention" 
              className="mb-16"
              ref={preventionRef}
              variants={fadeInUp}
              initial="hidden"
              animate={preventionInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Prevention & Education</h2>
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
                    Education is a crucial component of ankle sprain recovery. We provide comprehensive guidance to help you understand your condition and prevent future injuries.
                  </p>
                  <motion.div 
                    className="grid md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3">Self-Management:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Home exercise programs</li>
                        <li>• Activity modification strategies</li>
                        <li>• Pain management techniques</li>
                        <li>• Progress monitoring</li>
                      </ul>
                    </motion.div>
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3">Injury Prevention:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Proper warm-up techniques</li>
                        <li>• Appropriate footwear selection</li>
                        <li>• Environmental awareness</li>
                        <li>• Strength maintenance programs</li>
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
                      Get back on your feet stronger than before! Ready for complete ankle recovery?
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

export default AnkleSprainPage;
