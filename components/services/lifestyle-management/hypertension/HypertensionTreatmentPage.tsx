'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Phone, CalendarDays } from 'lucide-react';
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

const HypertensionTreatmentPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hypertension-overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'hypertension-overview': true,
    'conditions': true,
    'treatment': true,
    'benefits': true
  });

  // Create refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const hypertensionRef = useRef<HTMLDivElement>(null);
  const conditionsRef = useRef<HTMLDivElement>(null);
  const treatmentRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Use useInView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-100px" });
  const hypertensionInView = useInView(hypertensionRef, { once: true, margin: "-100px" });
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
        });
      },
      { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
    );

    // Observe only section elements with ids
    const elements = document.querySelectorAll('section[id]');
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
    { id: 'hypertension-overview', title: 'Understanding Hypertension' },
    { id: 'conditions', title: 'Related Complications' },
    { id: 'treatment', title: 'Treatment Methods' },
    { id: 'benefits', title: 'Who Will Benefit?' }
  ];

  const complications: CauseItem[] = [
    { 
      title: "Cardiovascular Disease", 
      description: "Increased risk of heart attacks and heart failure",
      icon: "💓"
    },
    { 
      title: "Stroke Risk", 
      description: "Higher chance of stroke due to arterial damage",
      icon: "🧠"
    },
    { 
      title: "Kidney Damage", 
      description: "Chronic kidney disease from prolonged high pressure",
      icon: "🫘"
    },
    { 
      title: "Vision Problems", 
      description: "Retinal damage affecting eyesight over time",
      icon: "👁️"
    },
    { 
      title: "Arterial Stiffness", 
      description: "Reduced flexibility in blood vessels",
      icon: "🩸"
    },
    { 
      title: "Metabolic Issues", 
      description: "Increased risk of diabetes and obesity",
      icon: "⚖️"
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
        aria-label="Quick contact actions"
      >
        <motion.button 
          type="button"
          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Call us"
        >
          <Phone className="w-5 h-5" />
        </motion.button>
        <motion.a 
          href="#"
          className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-indigo-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Message"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
          </svg>
        </motion.a>
      </motion.div>

      <div className="flex">
        {/* Animated Sidebar */}
        <motion.aside 
          ref={sidebarRef}
          className="hidden lg:block sticky top-6 h-fit w-80 ml-6 z-10"
          variants={fadeInLeft}
          initial="hidden"
          animate={sidebarInView ? "visible" : "hidden"}
          aria-label="Table of contents"
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
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center text-left p-3 rounded-xl transition-all duration-200 ${
                        activeSection === item.id
                          ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100'
                          : 'text-gray-700 hover:bg-gray-50 hover:shadow-sm'
                      }`}
                      aria-current={activeSection === item.id ? 'true' : 'false'}
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
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          {/* Animated Hero Section with proper image sizing */}
          <motion.section 
            ref={heroRef}
            className="relative h-96 bg-gradient-to-r from-blue-700 to-blue-800 flex items-center justify-center overflow-hidden"
            variants={fadeInUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <div className="absolute inset-0">
              <img 
                src="/posture-correction.png"
                alt="Hypertension treatment and management"
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
              <h1 className="text-4xl text-blue-800 md:text-5xl font-bold mb-2">Hypertension Management Treatment</h1>
              <p className="text-blue-800 text-lg">Comprehensive Care & Blood Pressure Control</p>
            </motion.div>
          </motion.section>

          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Understanding Hypertension Section - Animated */}
            <motion.section 
              id="hypertension-overview" 
              className="mb-16"
              ref={hypertensionRef}
              variants={fadeInUp}
              initial="hidden"
              animate={hypertensionInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Understanding Hypertension</h2>
                <button 
                  type="button"
                  onClick={() => toggleSection('hypertension-overview')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['hypertension-overview'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  aria-label="Toggle Understanding Hypertension"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['hypertension-overview'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Hypertension, or high blood pressure, is a common condition where blood puts too much pressure on artery walls, raising the risk of heart disease. Blood pressure depends on how much blood the heart pumps and the resistance in arteries. When the heart pumps more blood into narrow arteries, it leads to high blood pressure.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Unfortunately, there are usually no symptoms, which is why hypertension is often called the "silent killer." However, it can harm blood vessels and increase the risk of serious issues like heart attacks, strokes, kidney disease, and other cardiovascular complications. Managing hypertension involves lifestyle modifications, regular monitoring, and often medication to keep blood pressure within healthy ranges.
                  </p>
                </motion.div>
              )}
            </motion.section>

            {/* Related Complications Section - Animated */}
            <motion.section 
              id="conditions" 
              className="mb-16"
              ref={conditionsRef}
              variants={fadeInUp}
              initial="hidden"
              animate={conditionsInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Hypertension-Related Complications</h2>
                <button 
                  type="button"
                  onClick={() => toggleSection('conditions')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['conditions'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  aria-label="Toggle Related Complications"
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
                    Uncontrolled hypertension can affect multiple organ systems, leading to serious complications that impact overall health and quality of life. Understanding these risks is crucial for effective prevention and management.
                  </p>
                  
                  <motion.div 
                    className="grid gap-4 mb-8"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div 
                      className="bg-red-50 rounded-lg p-6 border-l-4 border-blue-400"
                      variants={staggerItem}
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Cardiovascular Complications</h4>
                      <p className="text-gray-700">Heart disease, heart attacks, and heart failure from prolonged arterial pressure</p>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-orange-50 rounded-lg p-6 border-l-4 border-blue-400"
                      variants={staggerItem}
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Neurological Effects</h4>
                      <p className="text-gray-700">Stroke risk and cognitive impairment from damaged blood vessels in the brain</p>
                    </motion.div>
                  </motion.div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Specific Complications We Address:</h3>
                    <motion.div 
                      className="space-y-4"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      {complications.map((complication, index) => (
                        <motion.div 
                          key={index} 
                          className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4"
                          variants={staggerItem}
                        >
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg">
                            {complication.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900">{complication.title}</h4>
                            <p className="text-gray-600 text-sm">{complication.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Quick Tips Section */}
                  <motion.div 
                    className="mt-8 bg-red-50 rounded-lg p-6"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Management Tips</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Monitor blood pressure regularly at home</li>
                      <li>• Reduce sodium intake and maintain a heart-healthy diet</li>
                      <li>• Stay physically active with regular exercise</li>
                      <li>• Manage stress through relaxation techniques</li>
                      <li>• Take prescribed medications as directed</li>
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
                <h2 className="text-3xl font-bold text-gray-900">How a Physiotherapist Can Treat Hypertension</h2>
                <button 
                  type="button"
                  onClick={() => toggleSection('treatment')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['treatment'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  aria-label="Toggle Treatment Methods"
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
                    Physiotherapy can be a valuable component in managing hypertension. While it may not replace medications or other lifestyle modifications, physiotherapy can effectively complement existing treatments to help control blood pressure naturally.
                  </p>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Treatment Approaches:</h3>
                    
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
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Exercise Prescription</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Design personalized exercise programs to promote cardiovascular health</li>
                          <li>• Aerobic exercises such as brisk walking, swimming, or cycling to lower blood pressure</li>
                          <li>• Gradual progression to ensure safe and effective blood pressure reduction</li>
                        </ul>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-green-50 rounded-lg p-6"
                        variants={staggerItem}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Stress Management</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Mindfulness and breathing exercises to reduce stress-related blood pressure spikes</li>
                          <li>• Progressive muscle relaxation techniques for overall stress reduction</li>
                          <li>• Guided relaxation sessions to promote cardiovascular health</li>
                        </ul>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-purple-50 rounded-lg p-6"
                        variants={staggerItem}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Weight Management</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Maintaining a healthy weight is crucial for controlling blood pressure</li>
                          <li>• Customized fitness programs to support sustainable weight loss</li>
                          <li>• Nutritional guidance and lifestyle modifications for long-term success</li>
                        </ul>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-yellow-50 rounded-lg p-6"
                        variants={staggerItem}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Cardiovascular Rehabilitation</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Gradual, monitored exercises to improve heart function</li>
                          <li>• Overall cardiovascular health enhancement through structured programs</li>
                          <li>• Safe exercise protocols for individuals with existing heart conditions</li>
                        </ul>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-indigo-50 rounded-lg p-6"
                        variants={staggerItem}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Lifestyle Counseling</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Adopting a heart-healthy lifestyle to positively impact blood pressure</li>
                          <li>• Education on dietary modifications and healthy eating habits</li>
                          <li>• Sleep hygiene and stress management strategies</li>
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
                  type="button"
                  onClick={() => toggleSection('benefits')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['benefits'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  aria-label="Toggle Who Will Benefit"
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
                    Hypertension management through physiotherapy benefits individuals at various stages of the condition, from those with prehypertension to those managing established high blood pressure:
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
                        <li>• Newly diagnosed hypertensive patients</li>
                        <li>• Individuals with prehypertension (borderline high BP)</li>
                        <li>• People with family history of heart disease</li>
                        <li>• Those with sedentary lifestyles</li>
                        <li>• Patients seeking natural blood pressure management</li>
                        <li>• Anyone wanting to improve cardiovascular health</li>
                      </ul>
                    </motion.div>
                    <motion.div variants={staggerItem}>
                      <h4 className="font-semibold text-gray-900 mb-3">Specific Conditions:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Essential (primary) hypertension</li>
                        <li>• Secondary hypertension management support</li>
                        <li>• Stress-related blood pressure elevation</li>
                        <li>• Obesity-related hypertension</li>
                        <li>• Pre-existing cardiovascular conditions</li>
                        <li>• Metabolic syndrome components</li>
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
                    alt="Mobiphysio hypertension management approach"
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
                      Ready to take control of your blood pressure? Let's start your wellness journey!
                    </p>
                    <br></br>
                    <br></br>
                    <motion.div 
                      className='mb-16 text-center'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                        <a href='/book-appointment' aria-label="Book an appointment">
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
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href='/services'><span className="relative z-10">Check Other Services</span></a>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.button>
              </div>
            </motion.section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HypertensionTreatmentPage;