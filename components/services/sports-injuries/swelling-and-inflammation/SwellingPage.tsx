'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight, Phone, Mail, MapPin, Clock, CheckCircle, AlertTriangle, Heart, Shield, User, Menu, X, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface ApproachItem {
  title: string;
  description: string;
  icon: string;
}

interface TreatmentMethod {
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

const SwellingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('sports-injury');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'sports-injury': true,
    'our-approach': true,
    'rice-method': true,
    'compression': true,
    'exercises': true,
    'lymphatic-drainage': true,
    'cryotherapy': true
  });

  // Create refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sportsRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const riceRef = useRef<HTMLDivElement>(null);
  const compressionRef = useRef<HTMLDivElement>(null);
  const exercisesRef = useRef<HTMLDivElement>(null);
  const lymphaticRef = useRef<HTMLDivElement>(null);
  const cryotherapyRef = useRef<HTMLDivElement>(null);
  const finalApproachRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Use useInView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-100px" });
  const sportsInView = useInView(sportsRef, { once: true, margin: "-100px" });
  const approachInView = useInView(approachRef, { once: true, margin: "-100px" });
  const riceInView = useInView(riceRef, { once: true, margin: "-100px" });
  const compressionInView = useInView(compressionRef, { once: true, margin: "-100px" });
  const exercisesInView = useInView(exercisesRef, { once: true, margin: "-100px" });
  const lymphaticInView = useInView(lymphaticRef, { once: true, margin: "-100px" });
  const cryotherapyInView = useInView(cryotherapyRef, { once: true, margin: "-100px" });
  const finalApproachInView = useInView(finalApproachRef, { once: true, margin: "-100px" });
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
    { id: 'sports-injury', title: 'Swelling and Inflammation' },
    { id: 'our-approach', title: 'Our Approach' },
    { id: 'rice-method', title: 'R.I.C.E. Method' },
    { id: 'compression', title: 'Compression & Support' },
    { id: 'exercises', title: 'Anti-Inflammatory Exercises' },
    { id: 'lymphatic-drainage', title: 'Manual Lymphatic Drainage' },
    { id: 'cryotherapy', title: 'Cryotherapy Treatment' }
  ];

  const riceComponents: ApproachItem[] = [
    { 
      title: "Rest", 
      description: "Allow your body the necessary time to heal and recover from injury",
      icon: "🛌"
    },
    { 
      title: "Ice", 
      description: "Our therapists employ ice therapies to alleviate swelling and inflammation effectively",
      icon: "🧊"
    },
    { 
      title: "Compression", 
      description: "Strategic compression techniques are utilized to control swelling",
      icon: "🔄"
    },
    { 
      title: "Elevation", 
      description: "Elevating the injured area aids in reducing fluid build-up",
      icon: "⬆️"
    }
  ];

  const treatmentMethods: TreatmentMethod[] = [
    {
      title: "Therapeutic Assessment",
      description: "Comprehensive evaluation of your injury and current condition to develop personalized treatment plans."
    },
    {
      title: "Pain Management", 
      description: "Advanced techniques to reduce pain and discomfort while promoting natural healing processes."
    },
    {
      title: "Inflammation Control",
      description: "Specialized methods to effectively manage and reduce inflammation at the injury site."
    },
    {
      title: "Recovery Monitoring",
      description: "Continuous assessment of progress to ensure optimal healing and prevent re-injury."
    },
    {
      title: "Performance Restoration",
      description: "Gradual return to athletic activities with focus on maintaining peak performance levels."
    },
    {
      title: "Injury Prevention",
      description: "Education and techniques to minimize the risk of future sports-related injuries."
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
                src="/swelling.png"
                alt="Sports injury rehabilitation"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              className="relative z-10 text-center text-white"
              variants={scaleIn}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl text-blue-600 md:text-5xl font-bold mb-2">Swelling and Inflammation</h1>
              <p className="text-blue-600 text-lg">Comprehensive Rehabilitation & Recovery</p>
            </motion.div>
          </motion.section>

          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Sports Injury Section - Animated */}
            <motion.section 
              id="sports-injury" 
              className="mb-16"
              ref={sportsRef}
              variants={fadeInUp}
              initial="hidden"
              animate={sportsInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Swelling and Inflammation</h2>
                <button 
                  onClick={() => toggleSection('sports-injury')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['sports-injury'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['sports-injury'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    We recognize the challenges that sports injuries pose to your athletic performance and overall health. Our committed team of physiotherapists is here to lead you through a holistic strategy for addressing swelling and inflammation, ensuring a seamless journey towards recovery.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Sports injuries can significantly impact your ability to perform at your best and affect your daily activities. Our comprehensive approach focuses on reducing inflammation, managing pain, and restoring function through evidence-based treatment methods tailored to each athlete's specific needs.
                  </p>
                </motion.div>
              )}
            </motion.section>

            {/* Our Approach Section - Animated */}
            <motion.section 
              id="our-approach" 
              className="mb-16"
              ref={approachRef}
              variants={fadeInUp}
              initial="hidden"
              animate={approachInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">What's Our Approach?</h2>
                <button 
                  onClick={() => toggleSection('our-approach')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['our-approach'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['our-approach'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Our comprehensive treatment methodology combines traditional physiotherapy techniques with modern therapeutic approaches to ensure optimal recovery outcomes for all types of sports injuries.
                  </p>
                  
                  <motion.div 
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {treatmentMethods.map((method, index) => (
                      <motion.div key={index} variants={staggerItem}>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          <span className="text-black">• {method.title}</span>
                        </h4>
                        <p className="text-gray-700 ml-4">{method.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </motion.section>

            {/* R.I.C.E. Method Section - Animated */}
            <motion.section 
              id="rice-method" 
              className="mb-16"
              ref={riceRef}
              variants={fadeInUp}
              initial="hidden"
              animate={riceInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Restoring Balance with R.I.C.E.</h2>
                <button 
                  onClick={() => toggleSection('rice-method')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['rice-method'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['rice-method'] && (
                <>
                  <motion.div 
                    className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      The R.I.C.E. method is a proven approach for immediate sports injury management. This systematic protocol helps control inflammation, reduce pain, and create optimal conditions for healing during the acute phase of injury.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {riceComponents.map((component, index) => (
                      <motion.div 
                        key={index} 
                        className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex items-center space-x-4"
                        variants={staggerItem}
                      >
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                          {component.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{component.title}</h3>
                          <p className="text-gray-600">{component.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </>
              )}
            </motion.section>

            {/* Compression Section - Animated */}
            <motion.section 
              id="compression" 
              className="mb-16"
              ref={compressionRef}
              variants={fadeInUp}
              initial="hidden"
              animate={compressionInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Compression Garments and Support</h2>
                <button 
                  onClick={() => toggleSection('compression')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['compression'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['compression'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    We recommend and provide compression garments to offer consistent pressure that helps in the reduction of swelling. Our specialists will guide you in selecting the appropriate compression level and type for your specific injury.
                  </p>
                  <motion.ul 
                    className="space-y-2 text-gray-700"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      "Professional fitting and selection of compression garments",
                      "Graduated compression for optimal fluid management",
                      "Support for various body parts including joints and muscles",
                      "Education on proper application and care",
                      "Integration with overall treatment plan",
                      "Regular monitoring and adjustment as needed"
                    ].map((item, index) => (
                      <motion.li key={index} variants={staggerItem}>• {item}</motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </motion.section>

            {/* Anti-Inflammatory Exercises Section - Animated */}
            <motion.section 
              id="exercises" 
              className="mb-16"
              ref={exercisesRef}
              variants={fadeInUp}
              initial="hidden"
              animate={exercisesInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Anti-Inflammatory Exercises</h2>
                <button 
                  onClick={() => toggleSection('exercises')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['exercises'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['exercises'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Our physiotherapists design exercises to strengthen muscles, enhance stability, and reduce the risk of re-injury. These carefully structured programs promote healing while preventing future complications.
                  </p>
                  <motion.div 
                    className="grid md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3">Strengthening Exercises:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Progressive resistance training</li>
                        <li>• Core stabilization exercises</li>
                        <li>• Sport-specific movements</li>
                        <li>• Functional strength building</li>
                      </ul>
                    </motion.div>
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3">Mobility & Flexibility:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Range of motion exercises</li>
                        <li>• Gentle stretching routines</li>
                        <li>• Joint mobilization techniques</li>
                        <li>• Balance and coordination training</li>
                      </ul>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </motion.section>

            {/* Manual Lymphatic Drainage Section - Animated */}
            <motion.section 
              id="lymphatic-drainage" 
              className="mb-16"
              ref={lymphaticRef}
              variants={fadeInUp}
              initial="hidden"
              animate={lymphaticInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Manual Lymphatic Drainage (MLD)</h2>
                <button 
                  onClick={() => toggleSection('lymphatic-drainage')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['lymphatic-drainage'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['lymphatic-drainage'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Our skilled therapists use gentle manual techniques to stimulate the lymphatic system, promoting efficient fluid drainage and reducing swelling. This specialized treatment is particularly effective for post-injury inflammation management.
                  </p>
                  <motion.ul 
                    className="grid md:grid-cols-2 gap-4 text-gray-700"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      "Gentle, rhythmic massage techniques",
                      "Stimulation of lymphatic flow",
                      "Reduction of post-injury swelling",
                      "Enhanced tissue healing",
                      "Improved circulation",
                      "Pain and tension relief",
                      "Accelerated recovery process",
                      "Non-invasive treatment approach"
                    ].map((item, index) => (
                      <motion.li key={index} variants={staggerItem}>• {item}</motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </motion.section>

            {/* Cryotherapy Section - Animated */}
            <motion.section 
              id="cryotherapy" 
              className="mb-16"
              ref={cryotherapyRef}
              variants={fadeInUp}
              initial="hidden"
              animate={cryotherapyInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Cryotherapy Treatment</h2>
                <button 
                  onClick={() => toggleSection('cryotherapy')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['cryotherapy'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['cryotherapy'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    <strong>Cryotherapy involves the application of cold temperatures to the body, offering therapeutic benefits for pain management.</strong> This non-invasive technique can help reduce inflammation, alleviate pain, and enhance the body's natural healing processes.
                  </p>
                  <motion.ul 
                    className="space-y-3 text-gray-700"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      "Reduces inflammation and swelling at the injury site",
                      "Provides immediate pain relief through numbing effect",
                      "Decreases metabolic activity to prevent secondary tissue damage",
                      "Enhances recovery time when applied correctly",
                      "Safe and non-invasive treatment option",
                      "Can be combined with other therapeutic modalities"
                    ].map((item, index) => (
                      <motion.li key={index} variants={staggerItem}>• {item}</motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </motion.section>

            {/* Our Approach Section - Animated */}
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
                    alt="Mobiphysio sports injury approach"
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      <strong>Our Approach at Mobiphysio</strong>
                    </h2>
                    <p className="text-xl md:text-2xl">
                      Ready to get back to peak performance? Let's start your recovery journey!
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

export default SwellingPage;
