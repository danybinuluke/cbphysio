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

const MenstrualPainPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('mp-intro');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'mp-intro': true,
    'understanding-mp': true,
    'causes': true,
    'our-approach': true,
    'treatment-methods': true,
    'lifestyle-tips': true
  });

  // Section refs
  const heroRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const understandingRef = useRef<HTMLDivElement>(null);
  const causesRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const treatmentRef = useRef<HTMLDivElement>(null);
  const lifestyleRef = useRef<HTMLDivElement>(null);
  const finalApproachRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // InView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-100px" });
  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const understandingInView = useInView(understandingRef, { once: true, margin: "-100px" });
  const causesInView = useInView(causesRef, { once: true, margin: "-100px" });
  const approachInView = useInView(approachRef, { once: true, margin: "-100px" });
  const treatmentInView = useInView(treatmentRef, { once: true, margin: "-100px" });
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
    { id: 'mp-intro', title: 'Menstrual Pain Overview' },
    { id: 'understanding-mp', title: 'Understanding Dysmenorrhea' },
    { id: 'causes', title: 'What Causes It?' },
    { id: 'our-approach', title: 'Our Approach' },
    { id: 'treatment-methods', title: 'Treatment Methods' },
    { id: 'lifestyle-tips', title: 'Lifestyle & Self-Care' }
  ];

  const causesList: ApproachItem[] = [
    {
      title: "Hormonal Imbalances",
      description: "Fluctuations in hormones, particularly prostaglandins, can trigger uterine contractions, initiating an inflammatory response in the uterus. This process can reduce blood flow to the uterus and ovaries, resulting in the discomfort associated with menstrual cramps.",
      icon: "⚖️"
    },
    {
      title: "Fibroids",
      description: "Noncancerous growths in the uterus that may cause pain and discomfort during menstrual periods.",
      icon: "🔴"
    },
    {
      title: "Intrauterine Device (IUD)",
      description: "Some contraceptive devices, like IUDs, can contribute to cramps and heightened menstrual discomfort.",
      icon: "🔧"
    },
    {
      title: "Cervical Stenosis",
      description: "A condition where the cervix's opening is too small, causing the accumulation of menstrual blood and subsequent pain.",
      icon: "🚪"
    }
  ];

  const treatmentApproaches: ApproachItem[] = [
    {
      title: "Therapeutic Exercises",
      description: "Regular exercise plays a pivotal role in reducing menstrual pain. Incorporating various physical activities such as stretching, aerobic exercises, yoga, and pelvic floor (kegel) exercises can effectively address primary dysmenorrhea.",
      icon: "🏃‍♀️"
    },
    {
      title: "Relaxation Techniques",
      description: "Stress can intensify menstrual discomfort. Learn relaxation methods like deep breathing, meditation, and mindfulness from our physiotherapists to diminish stress and pain.",
      icon: "🧘‍♀️"
    },
    {
      title: "Thermotherapy for Pain Relief",
      description: "Heat therapy effectively diminishes pain, boosting muscle tension relief and promoting the relaxation of abdominal muscles. Our physiotherapists can advise on optimal heat therapy methods.",
      icon: "🔥"
    },
    {
      title: "Manual Therapy",
      description: "Manual therapy employs hands-on techniques, including myofascial release, trigger point therapy, joint mobilization, and massage, to reduce muscle tension and pain.",
      icon: "👐"
    }
  ];

  const additionalTreatments: TherapyMethod[] = [
    {
      title: "Comprehensive Assessment",
      description: "Detailed evaluation of your menstrual health, pain patterns, and lifestyle factors to create a personalized treatment plan."
    },
    {
      title: "Pelvic Floor Strengthening",
      description: "Targeted exercises to strengthen pelvic floor muscles, which can help reduce menstrual pain and improve overall pelvic health."
    },
    {
      title: "Postural Correction",
      description: "Addressing postural imbalances that may contribute to menstrual discomfort and pelvic tension."
    },
    {
      title: "Breathing Techniques",
      description: "Teaching proper breathing patterns to help manage pain and reduce stress during menstrual cycles."
    },
    {
      title: "Education & Self-Management",
      description: "Providing knowledge about menstrual health and teaching self-management techniques for long-term pain relief."
    },
    {
      title: "Lifestyle Modification Guidance",
      description: "Comprehensive advice on diet, exercise, stress management, and sleep to support menstrual health."
    }
  ];

  const lifestyleTips = [
    "Maintain regular physical activity throughout your cycle",
    "Practice stress management techniques like yoga or meditation",
    "Apply heat therapy during painful periods (heating pads, warm baths)",
    "Stay hydrated and maintain a balanced, anti-inflammatory diet",
    "Get adequate sleep (7-9 hours) to support hormonal balance",
    "Track your menstrual cycle to identify patterns and triggers",
    "Avoid excessive caffeine and alcohol during menstruation",
    "Consider gentle massage or self-massage techniques",
    "Practice good posture to reduce pelvic tension",
    "Seek professional help if pain severely impacts daily activities"
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
                src="/menstrual-pain-1.webp"
                alt="Menstrual Pain Treatment"
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
              <h1 className="text-4xl text-blue-600 md:text-5xl font-bold mb-2">Menstrual Pain Relief</h1>
              <p className="text-blue-600 text-lg">Comprehensive Care for Dysmenorrhea</p>
            </motion.div>
          </motion.section>

          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Menstrual Pain Intro */}
            <motion.section 
              id="mp-intro" 
              className="mb-16"
              ref={introRef}
              variants={fadeInUp}
              initial="hidden"
              animate={introInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Menstrual Pain: Finding Relief & Comfort</h2>
                <button 
                  onClick={() => toggleSection('mp-intro')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['mp-intro'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['mp-intro'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Menstrual pain doesn't have to control your life. Our specialized physiotherapy approach offers effective, natural solutions to help you manage dysmenorrhea and reclaim your comfort during menstruation.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Through expert guidance and personalized care, we aim to redefine your experience, providing not just relief from discomfort but fostering a journey toward menstrual health and vitality.
                  </p>
                </motion.div>
              )}
            </motion.section>

            {/* Understanding Dysmenorrhea */}
            <motion.section 
              id="understanding-mp"
              className="mb-16"
              ref={understandingRef}
              variants={fadeInUp}
              initial="hidden"
              animate={understandingInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Understanding Dysmenorrhea</h2>
                <button 
                  onClick={() => toggleSection('understanding-mp')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['understanding-mp'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['understanding-mp'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Dysmenorrhea, commonly known as painful menstrual cramps, is a condition characterized by discomfort occurring before or during the menstrual cycle. This discomfort arises from the contraction of uterine muscles, exerting pressure on the uterine lining.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    As the most prevalent gynecological condition, dysmenorrhea significantly contributes to depression and limits daily activities in women. While the exact cause of menstrual cramps remains unknown, various factors can contribute to the pain, making it a complex and multifaceted condition.
                  </p>
                </motion.div>
              )}
            </motion.section>

            {/* Causes Section */}
            <motion.section 
              id="causes"
              className="mb-16"
              ref={causesRef}
              variants={fadeInUp}
              initial="hidden"
              animate={causesInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">What causes it?</h2>
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
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {causesList.map((cause, idx) => (
                    <motion.div 
                      key={idx}
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
              )}
            </motion.section>

            {/* Our Approach */}
            <motion.section 
              id="our-approach"
              className="mb-16"
              ref={approachRef}
              variants={fadeInUp}
              initial="hidden"
              animate={approachInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Our Approach to Menstrual Cramps</h2>
                <button 
                  onClick={() => toggleSection('our-approach')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['our-approach'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['our-approach'] && (
                <>
                  <motion.div 
                    className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      Here is how we make it happen!
                    </p>
                  </motion.div>
                  <motion.div 
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {treatmentApproaches.map((approach, idx) => (
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

            {/* Treatment Methods */}
            <motion.section 
              id="treatment-methods"
              className="mb-16"
              ref={treatmentRef}
              variants={fadeInUp}
              initial="hidden"
              animate={treatmentInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Additional Treatment Methods</h2>
                <button 
                  onClick={() => toggleSection('treatment-methods')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['treatment-methods'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['treatment-methods'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Our comprehensive approach combines multiple evidence-based techniques to provide effective relief from menstrual pain and improve your overall quality of life.
                  </p>
                  <motion.div 
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {additionalTreatments.map((method, index) => (
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

            {/* Lifestyle & Self-Care */}
            <motion.section 
              id="lifestyle-tips"
              className="mb-16"
              ref={lifestyleRef}
              variants={fadeInUp}
              initial="hidden"
              animate={lifestyleInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Lifestyle & Self-Care for Menstrual Health</h2>
                <button 
                  onClick={() => toggleSection('lifestyle-tips')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['lifestyle-tips'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['lifestyle-tips'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Incorporating healthy lifestyle habits can significantly reduce menstrual pain and improve your overall well-being throughout your cycle.
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
                    alt="Mobiphysio menstrual pain approach"
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

export default MenstrualPainPage;
