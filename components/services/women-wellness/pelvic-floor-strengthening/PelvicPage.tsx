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

const PelvicFloorPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('pelvic-intro');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'pelvic-intro': true,
    'understanding-pelvic-floor': true,
    'pelvic-disorders': true,
    'causes': true,
    'therapy-approach': true,
    'pfmt': true,
    'lifestyle': true
  });

  // Section refs
  const heroRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const understandingRef = useRef<HTMLDivElement>(null);
  const disordersRef = useRef<HTMLDivElement>(null);
  const causesRef = useRef<HTMLDivElement>(null);
  const therapyRef = useRef<HTMLDivElement>(null);
  const pfmtRef = useRef<HTMLDivElement>(null);
  const lifestyleRef = useRef<HTMLDivElement>(null);
  const finalApproachRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // InView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-100px" });
  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const understandingInView = useInView(understandingRef, { once: true, margin: "-100px" });
  const disordersInView = useInView(disordersRef, { once: true, margin: "-100px" });
  const causesInView = useInView(causesRef, { once: true, margin: "-100px" });
  const therapyInView = useInView(therapyRef, { once: true, margin: "-100px" });
  const pfmtInView = useInView(pfmtRef, { once: true, margin: "-100px" });
  const lifestyleInView = useInView(lifestyleRef, { once: true, margin: "-100px" });
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
    { id: 'pelvic-intro', title: 'Pelvic Floor Strengthening' },
    { id: 'understanding-pelvic-floor', title: 'Understanding the Pelvic Floor' },
    { id: 'pelvic-disorders', title: 'Pelvic Floor Disorders' },
    { id: 'causes', title: 'Causes of Pelvic Floor Disorders' },
    { id: 'therapy-approach', title: 'Our Therapy Approach' },
    { id: 'pfmt', title: 'Pelvic Floor Muscle Training (PFMT)' },
    { id: 'lifestyle', title: 'Lifestyle & Self-Care' }
  ];

  const causesList = [
    "Pregnancy and childbirth (especially multiple or traumatic deliveries)",
    "Aging and menopause",
    "Chronic constipation or straining",
    "Heavy lifting or high-impact sports",
    "Obesity or being overweight",
    "Pelvic surgery or radiation",
    "Chronic coughing (e.g., due to smoking or lung disease)",
    "Genetic predisposition"
  ];

  const therapyMethods: TherapyMethod[] = [
    {
      title: "Physical Evaluation and Assessment",
      description: "In-depth analysis to understand your unique needs and challenges."
    },
    {
      title: "Pelvic Floor Muscle Training (PFMT)",
      description: "Targeted exercises to enhance the strength and endurance of pelvic floor muscles."
    },
    {
      title: "Bladder and Bowel Retraining",
      description: "Strategies to optimize control and function, promoting continence."
    },
    {
      title: "Manual Therapy & Myofascial Release",
      description: "Hands-on techniques addressing muscle tension and promoting flexibility."
    },
    {
      title: "Relaxation & Diaphragmatic Breathing",
      description: "Techniques fostering relaxation and enhancing breathing patterns."
    },
    {
      title: "Biofeedback/Electrical Stimulation",
      description: "Utilizing technology to provide feedback, enhancing awareness and control."
    },
    {
      title: "Lifestyle Modifications",
      description: "Guidance on lifestyle adjustments to support and maintain pelvic health."
    }
  ];

  const pfmtSteps: ApproachItem[] = [
    {
      title: "Kegel Exercises",
      description: "Contract and relax pelvic floor muscles to improve strength and endurance.",
      icon: "🏋️"
    },
    {
      title: "Functional Training",
      description: "Integrate pelvic floor activation into daily movements and posture.",
      icon: "🧘"
    },
    {
      title: "Breath Coordination",
      description: "Synchronize breathing with muscle engagement for optimal results.",
      icon: "🌬️"
    },
    {
      title: "Progressive Overload",
      description: "Gradually increase intensity and complexity for continued improvement.",
      icon: "📈"
    }
  ];

  const lifestyleTips = [
    "Maintain a healthy weight",
    "Avoid constipation and straining",
    "Practice good toilet habits",
    "Limit heavy lifting when possible",
    "Quit smoking to reduce chronic cough",
    "Stay physically active with low-impact exercises",
    "Seek help early for any symptoms"
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
                src="/pelvic-floor-strengthening-1.webp"
                alt="Pelvic Floor Strengthening"
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
              <h1 className="text-4xl text-blue-900 md:text-5xl font-bold mb-2">Pelvic Floor Strengthening</h1>
              <p className="text-blue-900 text-lg">Empowering You for Confident Living</p>
            </motion.div>
          </motion.section>

          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Pelvic Floor Intro */}
            <motion.section 
              id="pelvic-intro" 
              className="mb-16"
              ref={introRef}
              variants={fadeInUp}
              initial="hidden"
              animate={introInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Struggling from Pelvic Floor Discomfort?</h2>
                <button 
                  onClick={() => toggleSection('pelvic-intro')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['pelvic-intro'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['pelvic-intro'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Is the fear of bladder leakage troubling you? <br />
                    <span className="font-semibold text-blue-700">Don’t Suffer Any More!</span>
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Our expert physiotherapists specialize in pelvic floor rehabilitation, helping you regain control, confidence, and comfort in your daily life.
                  </p>
                </motion.div>
              )}
            </motion.section>

            {/* Understanding Pelvic Floor */}
            <motion.section 
              id="understanding-pelvic-floor"
              className="mb-16"
              ref={understandingRef}
              variants={fadeInUp}
              initial="hidden"
              animate={understandingInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Understanding Pelvic Floor: A Vital Support System</h2>
                <button 
                  onClick={() => toggleSection('understanding-pelvic-floor')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['understanding-pelvic-floor'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['understanding-pelvic-floor'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The pelvic floor is a crucial network of muscles and tissues that provides essential support to various pelvic organs, such as the bladder and bowel. In women, it extends its support to the uterus and vagina as well. These muscles play a pivotal role in maintaining the proper positioning and functionality of these organs. By offering structural support, the pelvic floor ensures the effective functioning and well-being of the pelvic region.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We specialize in addressing pelvic floor concerns and providing personalized care to optimize your pelvic health.
                  </p>
                </motion.div>
              )}
            </motion.section>

            {/* Pelvic Floor Disorders */}
            <motion.section 
              id="pelvic-disorders"
              className="mb-16"
              ref={disordersRef}
              variants={fadeInUp}
              initial="hidden"
              animate={disordersInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">What is Pelvic Floor Disorder?</h2>
                <button 
                  onClick={() => toggleSection('pelvic-disorders')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['pelvic-disorders'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['pelvic-disorders'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    A Pelvic Floor Disorder is a condition characterized by the weakening or injury of the muscles and connecting tissues within the pelvic floor. This often leads to discomfort and a range of issues, including urinary incontinence and pelvic organ prolapse. While both men and women can be affected, it’s more commonly observed in women.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Urinary Incontinence</h4>
                      <p className="text-gray-700 text-sm">A prevalent condition characterized by the involuntary leakage of urine, impacting daily life and activities.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Pelvic Organ Prolapse</h4>
                      <p className="text-gray-700 text-sm">Occurs when pelvic organs, such as the bladder, uterus, or rectum, descend into the vaginal canal due to weakened pelvic floor muscles.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Anal Incontinence</h4>
                      <p className="text-gray-700 text-sm">Involuntary loss of control over bowel movements, leading to fecal leakage or difficulty in maintaining continence.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.section>

            {/* Causes */}
            <motion.section 
              id="causes"
              className="mb-16"
              ref={causesRef}
              variants={fadeInUp}
              initial="hidden"
              animate={causesInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">What Causes Pelvic Floor Disorders?</h2>
                <button 
                  onClick={() => toggleSection('causes')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['causes'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['causes'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <motion.ul 
                    className="space-y-3 text-gray-700"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {causesList.map((item, idx) => (
                      <motion.li key={idx} variants={staggerItem}>• {item}</motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </motion.section>

            {/* Therapy Approach */}
            <motion.section 
              id="therapy-approach"
              className="mb-16"
              ref={therapyRef}
              variants={fadeInUp}
              initial="hidden"
              animate={therapyInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Pelvic Floor Therapy & Rehabilitation: Our Approach</h2>
                <button 
                  onClick={() => toggleSection('therapy-approach')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['therapy-approach'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['therapy-approach'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8"
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
                    {therapyMethods.map((method, index) => (
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

            {/* PFMT Section */}
            <motion.section 
              id="pfmt"
              className="mb-16"
              ref={pfmtRef}
              variants={fadeInUp}
              initial="hidden"
              animate={pfmtInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Pelvic Floor Muscle Training (PFMT)</h2>
                <button 
                  onClick={() => toggleSection('pfmt')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['pfmt'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['pfmt'] && (
                <>
                  <motion.div 
                    className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      Our physiotherapists guide you through evidence-based pelvic floor muscle training, including Kegel exercises and functional integration, to restore strength and control.
                    </p>
                  </motion.div>
                  <motion.div 
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {pfmtSteps.map((step, idx) => (
                      <motion.div 
                        key={idx}
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

            {/* Lifestyle Section */}
            <motion.section 
              id="lifestyle"
              className="mb-16"
              ref={lifestyleRef}
              variants={fadeInUp}
              initial="hidden"
              animate={lifestyleInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Lifestyle & Self-Care for Pelvic Health</h2>
                <button 
                  onClick={() => toggleSection('lifestyle')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['lifestyle'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['lifestyle'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Small lifestyle changes can make a big difference in your pelvic health. Our team provides practical advice and ongoing support to help you succeed.
                  </p>
                  <motion.ul 
                    className="space-y-2 text-gray-700"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {lifestyleTips.map((tip, idx) => (
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
                    alt="Mobiphysio pelvic floor approach"
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

export default PelvicFloorPage;
