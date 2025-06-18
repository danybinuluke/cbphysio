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

const WeightManagementPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('weight-overview');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'weight-overview': true,
    'conditions': true,
    'treatment': true,
    'benefits': true
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Create refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const weightRef = useRef<HTMLDivElement>(null);
  const conditionsRef = useRef<HTMLDivElement>(null);
  const treatmentRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Use useInView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-100px" });
  const weightInView = useInView(weightRef, { once: true, margin: "-100px" });
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
    { id: 'weight-overview', title: 'Understanding Obesity' },
    { id: 'conditions', title: 'Challenges & Factors' },
    { id: 'treatment', title: 'Physiotherapy Methods' },
    { id: 'benefits', title: 'Who Will Benefit?' }
  ];

  const causes: CauseItem[] = [
    { 
      title: "Health Conditions", 
      description: "Medical conditions affecting metabolism and weight regulation",
      icon: "🏥"
    },
    { 
      title: "Genetic Factors", 
      description: "Hereditary predisposition to weight management challenges",
      icon: "🧬"
    },
    { 
      title: "Stress & Lifestyle", 
      description: "Chronic stress leading to emotional eating and weight gain",
      icon: "😰"
    },
    { 
      title: "Limited Diet Access", 
      description: "Lack of access to balanced, nutritious food options",
      icon: "🥗"
    },
    { 
      title: "Sedentary Lifestyle", 
      description: "Reduced physical activity leading to weight accumulation",
      icon: "🪑"
    },
    { 
      title: "Metabolic Issues", 
      description: "Slower metabolism affecting energy expenditure",
      icon: "⚡"
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
          {/* Animated Hero Section with Blurred Image */}
          <motion.section 
            ref={heroRef}
            className="relative h-96 bg-gradient-to-r from-blue-700 to-indigo-800 flex items-center justify-center overflow-hidden"
            variants={fadeInUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <div className="absolute inset-0">
              <img 
                src="/weight-management.png"
                alt="Weight management treatment"
                className="w-full h-full object-cover"
                style={{
                  filter: 'blur(2px)',
                  transform: 'scale(1.05)'
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            <motion.div 
              className="relative z-10 text-center text-white"
              variants={scaleIn}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl text-white md:text-5xl font-bold mb-2 drop-shadow-lg">Weight Management</h1>
              <p className="text-white text-lg drop-shadow-md">Comprehensive Health & Wellness Approach</p>
            </motion.div>
          </motion.section>

          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Understanding Obesity Section - Animated */}
            <motion.section 
              id="weight-overview" 
              className="mb-16"
              ref={weightRef}
              variants={fadeInUp}
              initial="hidden"
              animate={weightInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Understanding Obesity</h2>
                <button 
                  onClick={() => toggleSection('weight-overview')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['weight-overview'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['weight-overview'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Obesity is having too much body fat, harmful to health. Managing weight is crucial for well-being, as uncontrolled weight can lead to serious health issues like high blood pressure, heart disease, and diabetes. Obesity makes daily activities challenging, lowers quality of life, and increases the risk of early death.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    It's a global problem affecting people of all ages and backgrounds. While balancing weight can be challenging due to various factors, proper physiotherapy intervention can help manage weight comfortably with medical supervision to avoid health complications.
                  </p>
                </motion.div>
              )}
            </motion.section>

            {/* Challenges & Factors Section - Animated */}
            <motion.section 
              id="conditions" 
              className="mb-16"
              ref={conditionsRef}
              variants={fadeInUp}
              initial="hidden"
              animate={conditionsInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Challenges & Factors in Weight Management</h2>
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
                    Balancing weight can be challenging due to factors such as health conditions, genetics, stress, and limited access to a balanced diet. Understanding these factors is essential for developing an effective weight management strategy.
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
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Medical Supervision Required</h4>
                      <p className="text-gray-700">Losing weight requires medical supervision to avoid health issues and ensure safe, sustainable progress</p>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-400"
                      variants={staggerItem}
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Complex Contributing Factors</h4>
                      <p className="text-gray-700">Multiple interconnected factors including genetics, lifestyle, stress, and environmental conditions</p>
                    </motion.div>
                  </motion.div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Contributing Factors:</h3>
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
                </motion.div>
              )}
            </motion.section>

            {/* Physiotherapy Methods Section - Animated */}
            <motion.section 
              id="treatment" 
              className="mb-16"
              ref={treatmentRef}
              variants={fadeInUp}
              initial="hidden"
              animate={treatmentInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">How Physiotherapy Helps in Weight Management</h2>
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
                    Physiotherapy contributes significantly to successful weight management by offering exclusive exercise and lifestyle plans. Through a holistic approach, physiotherapists help individuals achieve their weight goals, addressing both physical and mental aspects. The emphasis on personalized strategies ensures a sustainable and effective journey towards a healthier weight, enhancing overall well-being.
                  </p>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Comprehensive Approach:</h3>
                    
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
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Personalized Exercise Plans</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Exercises tailored to your medical condition and fitness level</li>
                          <li>• Progressive routines that adapt to your body's capabilities and performance levels</li>
                          <li>• Safe and effective movements designed for sustainable weight management</li>
                        </ul>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-green-50 rounded-lg p-6"
                        variants={staggerItem}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Diet Management</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Personalized meal plans focused on nutrition and essential vitamins</li>
                          <li>• Guidance on portion control and healthy eating habits</li>
                          <li>• Education on foods that support your weight management goals</li>
                        </ul>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-purple-50 rounded-lg p-6"
                        variants={staggerItem}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Holistic Lifestyle Approach</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Addressing both physical and mental aspects of weight management</li>
                          <li>• Stress management techniques to prevent emotional eating</li>
                          <li>• Behavioral modifications for long-term success</li>
                        </ul>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-yellow-50 rounded-lg p-6"
                        variants={staggerItem}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Medical Supervision & Safety</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Professional guidance to ensure safe weight loss without side effects</li>
                          <li>• Regular monitoring and adjustments to your program</li>
                          <li>• Coordination with healthcare providers for comprehensive care</li>
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
                    Weight management physiotherapy benefits a wide range of individuals seeking safe and effective weight control:
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
                        <li>• Individuals with obesity-related health conditions</li>
                        <li>• People struggling with traditional weight loss methods</li>
                        <li>• Those with mobility limitations affecting exercise</li>
                        <li>• Individuals requiring medically supervised weight loss</li>
                        <li>• People with stress-related weight gain</li>
                        <li>• Those needing sustainable lifestyle changes</li>
                      </ul>
                    </motion.div>
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3">Common Conditions:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• High blood pressure related to obesity</li>
                        <li>• Type 2 diabetes management</li>
                        <li>• Heart disease risk factors</li>
                        <li>• Joint pain from excess weight</li>
                        <li>• Metabolic syndrome</li>
                        <li>• Low self-esteem and quality of life issues</li>
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
                    alt="Mobiphysio weight management approach"
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
                      Ready to start your weight management journey? Let's achieve your health goals together!
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

export default WeightManagementPage;
