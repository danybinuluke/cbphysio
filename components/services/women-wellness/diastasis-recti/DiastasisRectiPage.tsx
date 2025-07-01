'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Phone, CalendarDays } from 'lucide-react';
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
interface TherapyMethod {
  title: string;
  description: string;
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};
const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const DiastasisRectiPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('dr-intro');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'dr-intro': true,
    'understanding-dr': true,
    'symptoms': true,
    'physio-help': true,
    'treatment-approaches': true,
    'recovery-tips': true
  });

  // Section refs
  const heroRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const understandingRef = useRef<HTMLDivElement>(null);
  const symptomsRef = useRef<HTMLDivElement>(null);
  const physioHelpRef = useRef<HTMLDivElement>(null);
  const treatmentRef = useRef<HTMLDivElement>(null);
  const recoveryRef = useRef<HTMLDivElement>(null);
  const finalApproachRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // InView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-100px" });
  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const understandingInView = useInView(understandingRef, { once: true, margin: "-100px" });
  const symptomsInView = useInView(symptomsRef, { once: true, margin: "-100px" });
  const physioHelpInView = useInView(physioHelpRef, { once: true, margin: "-100px" });
  const treatmentInView = useInView(treatmentRef, { once: true, margin: "-100px" });
  const recoveryInView = useInView(recoveryRef, { once: true, margin: "-100px" });
  const finalApproachInView = useInView(finalApproachRef, { once: true, margin: "-100px" });
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
      { threshold: 0.3, rootMargin: '-100px 0px' }
    );
    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const tableOfContents: TableOfContentsItem[] = [
    { id: 'dr-intro', title: 'Diastasis Recti Overview' },
    { id: 'understanding-dr', title: 'Understanding Diastasis Recti' },
    { id: 'symptoms', title: 'Symptoms & Impact' },
    { id: 'physio-help', title: 'How Physiotherapy Helps' },
    { id: 'treatment-approaches', title: 'Treatment Approaches' },
    { id: 'recovery-tips', title: 'Recovery & Prevention' }
  ];

  const symptomsList = [
    "Hip Pain",
    "Low Back Pain", 
    "Pelvic Girdle Pain",
    "Urinary or Fecal Incontinence",
    "Abdominal Discomfort",
    "Protruding belly or 'doming' of abdominal muscles",
    "Weakened core stability",
    "Difficulty with functional movements"
  ];

  const physiotherapyApproaches: ApproachItem[] = [
    {
      title: "Targeted Strengthening",
      description: "A trained physiotherapist ensures the development of individualized and progressive strengthening programs, incorporating a variety of challenging exercises to facilitate the natural healing process.",
      icon: "💪"
    },
    {
      title: "Posture and Breathing",
      description: "Making subtle adjustments to body posture, movements, and breathing patterns can significantly impact how the deep core functions and how intra-abdominal pressure is managed.",
      icon: "🧘‍♀️"
    },
    {
      title: "Pelvic Floor Assessment",
      description: "The condition of the pelvic floor plays a crucial role in influencing the rest of the deep core and may contribute to symptoms associated with diastasis rectus abdominis.",
      icon: "🔍"
    }
  ];

  const treatmentMethods: TherapyMethod[] = [
    {
      title: "Comprehensive Assessment",
      description: "Thorough evaluation of abdominal separation, core function, and related symptoms to develop a personalized treatment plan."
    },
    {
      title: "Core Stabilization Exercises",
      description: "Progressive exercises designed to strengthen deep core muscles and improve overall stability without worsening the separation."
    },
    {
      title: "Functional Movement Training",
      description: "Teaching proper body mechanics for daily activities to reduce strain on the abdominal muscles and promote healing."
    },
    {
      title: "Breathing Technique Education",
      description: "Proper diaphragmatic breathing patterns to optimize core function and manage intra-abdominal pressure effectively."
    },
    {
      title: "Postural Correction",
      description: "Addressing postural imbalances that may contribute to or result from diastasis recti, promoting optimal alignment."
    },
    {
      title: "Manual Therapy Techniques",
      description: "Hands-on treatment to address muscle tension, fascial restrictions, and improve tissue quality around the core."
    }
  ];

  const recoveryTips = [
    "Avoid traditional crunches and sit-ups that can worsen the separation",
    "Focus on gentle, progressive core strengthening exercises",
    "Practice proper lifting techniques and body mechanics",
    "Maintain good posture throughout daily activities",
    "Use supportive garments when recommended by your physiotherapist",
    "Be patient with the healing process - recovery takes time",
    "Stay consistent with your exercise program",
    "Seek professional guidance before returning to high-intensity activities"
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
        {/* Sidebar */}
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
          {/* Hero Section with Glass/Blur Effect */}
          <motion.section 
            ref={heroRef}
            className="relative h-96 bg-gradient-to-r from-blue-700 to-indigo-800 flex items-center justify-center overflow-hidden"
            variants={fadeInUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <div className="absolute inset-0">
              <img 
                src="/diastasis-recti-1.webp"
                alt="Diastasis Recti Treatment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-md" />
            </div>
            <motion.div 
              className="relative z-10 text-center text-white"
              variants={scaleIn}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl text-blue-600 md:text-5xl font-bold mb-2">Diastasis Recti</h1>
              <p className="text-blue-600 text-lg">Restoring Core Strength & Function</p>
            </motion.div>
          </motion.section>

          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Diastasis Recti Intro */}
            <motion.section 
              id="dr-intro" 
              className="mb-16"
              ref={introRef}
              variants={fadeInUp}
              initial="hidden"
              animate={introInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Diastasis Recti: Core Separation Recovery</h2>
                <button 
                  onClick={() => toggleSection('dr-intro')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['dr-intro'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['dr-intro'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Diastasis Recti is a common condition that can significantly impact your core strength and overall well-being. Our specialized physiotherapy approach is designed to help you restore core function and regain confidence in your body.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Whether you're dealing with postpartum abdominal separation or core weakness from other causes, our expert team is here to guide you through a comprehensive recovery journey.
                  </p>
                </motion.div>
              )}
            </motion.section>

            {/* Understanding Diastasis Recti */}
            <motion.section 
              id="understanding-dr"
              className="mb-16"
              ref={understandingRef}
              variants={fadeInUp}
              initial="hidden"
              animate={understandingInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Understanding Diastasis Recti</h2>
                <button 
                  onClick={() => toggleSection('understanding-dr')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['understanding-dr'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['understanding-dr'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Diastasis Recti, a common condition often occurring during pregnancy or postpartum, refers to the separation of the abdominal muscles. This separation creates a gap, impacting the core's stability and potentially leading to various issues. It occurs when the connective tissue between the abdominal muscles stretches and weakens, causing the muscles to separate.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This separation can result in a noticeable gap, leading to a protruding belly and weakened core muscles. While commonly associated with pregnancy, it can also affect men and women who engage in improper abdominal exercises or experience significant weight fluctuations.
                  </p>
                </motion.div>
              )}
            </motion.section>

            {/* Symptoms Section */}
            <motion.section 
              id="symptoms"
              className="mb-16"
              ref={symptomsRef}
              variants={fadeInUp}
              initial="hidden"
              animate={symptomsInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Symptoms & Impact</h2>
                <button 
                  onClick={() => toggleSection('symptoms')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['symptoms'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['symptoms'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Possible symptoms connected to diastasis recti can include:
                  </p>
                  <motion.ul 
                    className="grid md:grid-cols-2 gap-3 text-gray-700"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {symptomsList.map((symptom, idx) => (
                      <motion.li key={idx} variants={staggerItem}>• {symptom}</motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </motion.section>

            {/* How Physiotherapy Helps */}
            <motion.section 
              id="physio-help"
              className="mb-16"
              ref={physioHelpRef}
              variants={fadeInUp}
              initial="hidden"
              animate={physioHelpInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">How can Physiotherapy help?</h2>
                <button 
                  onClick={() => toggleSection('physio-help')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['physio-help'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['physio-help'] && (
                <>
                  <motion.div 
                    className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      We understand the unique challenges that Diastasis Recti presents, and our specialized physiotherapy approach is exclusively for you to guide you towards a strong and healthy core.
                    </p>
                  </motion.div>
                  <motion.div 
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {physiotherapyApproaches.map((approach, idx) => (
                      <motion.div 
                        key={idx}
                        className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex items-center space-x-4"
                        variants={staggerItem}
                      >
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                          {approach.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{approach.title}</h3>
                          <p className="text-gray-600">{approach.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </>
              )}
            </motion.section>

            {/* Treatment Approaches */}
            <motion.section 
              id="treatment-approaches"
              className="mb-16"
              ref={treatmentRef}
              variants={fadeInUp}
              initial="hidden"
              animate={treatmentInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Our Treatment Approaches</h2>
                <button 
                  onClick={() => toggleSection('treatment-approaches')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['treatment-approaches'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['treatment-approaches'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Our comprehensive approach to diastasis recti treatment combines evidence-based techniques with personalized care to restore your core strength and function effectively.
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

            {/* Recovery & Prevention */}
            <motion.section 
              id="recovery-tips"
              className="mb-16"
              ref={recoveryRef}
              variants={fadeInUp}
              initial="hidden"
              animate={recoveryInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Recovery & Prevention Tips</h2>
                <button 
                  onClick={() => toggleSection('recovery-tips')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['recovery-tips'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['recovery-tips'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Successful recovery from diastasis recti requires patience, consistency, and proper guidance. Here are essential tips for your healing journey:
                  </p>
                  <motion.ul 
                    className="space-y-2 text-gray-700"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {recoveryTips.map((tip, idx) => (
                      <motion.li key={idx} variants={staggerItem}>• {tip}</motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
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
                    alt="Mobiphysio diastasis recti approach"
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
                    <br></br>
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
        </div>
      </div>
    </div>
  );
};

export default DiastasisRectiPage;
