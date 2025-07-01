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

const CryoFacialPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('cf-intro');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'cf-intro': true,
    'cf-expect': true,
    'cf-benefits': true,
    'cf-faq': true
  });

  // Section refs
  const heroRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const expectRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const finalApproachRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // InView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-100px" });
  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const expectInView = useInView(expectRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });
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
    { id: 'cf-intro', title: 'Cryotherapy Facial Overview' },
    { id: 'cf-expect', title: 'What Can You Expect?' },
    { id: 'cf-benefits', title: 'Key Benefits' },
    { id: 'cf-faq', title: 'FAQs' }
  ];

  const benefitsList: ApproachItem[] = [
    {
      title: "Reduces Wrinkles on the Face",
      description: "Cryotherapy reduces wrinkles by boosting collagen production, keeping your skin firm and youthful. Unlike botox and herbal supplements, it’s a gentler yet highly effective treatment.",
      icon: "✨"
    },
    {
      title: "Reduces Pigmentation",
      description: "Cryotherapy is like a refreshing reset for your skin! It works wonders in reducing pigmentation issues such as age spots, acne, sun damage, and puffiness.",
      icon: "🌙"
    },
    {
      title: "Gives You a Radiant Glow",
      description: "During the facial, your body redirects blood flow to its core, but when it’s over, nutrient-packed blood rushes back, refreshing your face and leaving you with a glowing complexion.",
      icon: "🌟"
    }
  ];

  const faqList = [
    {
      q: "How long does a cryotherapy facial take?",
      a: "The treatment itself takes only 2–3 minutes, but the entire session, including prep and aftercare, is typically completed in about 15 minutes."
    },
    {
      q: "Is a cryotherapy facial safe?",
      a: "Yes! The procedure is safe when performed by trained professionals using certified equipment."
    },
    {
      q: "How does it feel?",
      a: "You’ll feel a cool, refreshing mist on your face. Most people find it invigorating and relaxing."
    },
    {
      q: "Is there downtime?",
      a: "No downtime! You can return to your daily routine immediately after your session."
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
                src="/cryo-facials.webp"
                alt="Cryotherapy Facial"
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
              <h1 className="text-4xl text-blue-600 md:text-5xl font-bold mb-2">Cryotherapy Facial</h1>
              <p className="text-blue-600 text-lg">Glow, Tighten, and Refresh in Minutes</p>
            </motion.div>
          </motion.section>

          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Intro */}
            <motion.section 
              id="cf-intro" 
              className="mb-16"
              ref={introRef}
              variants={fadeInUp}
              initial="hidden"
              animate={introInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">What is a Cryotherapy Facial?</h2>
                <button 
                  onClick={() => toggleSection('cf-intro')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['cf-intro'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['cf-intro'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    A cryotherapy facial is the one in which your face is enveloped in a refreshing mist of liquid nitrogen for a soothing 2 to 3 minutes. This innovative treatment aims to enhance the skin’s radiance, promoting a youthful and even complexion. The cryotherapy facial offers a unique way to rejuvenate your skin, leaving you with a glowing and refreshed appearance.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    In just 15 minutes, a cryotherapy facial helps you to brighten your skin, tighten pores, and potentially minimize fine lines or age spots.
                  </p>
                </motion.div>
              )}
            </motion.section>

            {/* What Can You Expect */}
            <motion.section 
              id="cf-expect"
              className="mb-16"
              ref={expectRef}
              variants={fadeInUp}
              initial="hidden"
              animate={expectInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">What Can You Expect?</h2>
                <button 
                  onClick={() => toggleSection('cf-expect')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['cf-expect'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['cf-expect'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Cryotherapy stimulates the production of collagen, a vital protein that maintains the firmness, suppleness, and elasticity of your skin. With age, collagen levels decrease naturally, leading to drier skin and the formation of lines and wrinkles.
                  </p>
                </motion.div>
              )}
            </motion.section>

            {/* Key Benefits */}
            <motion.section 
              id="cf-benefits"
              className="mb-16"
              ref={benefitsRef}
              variants={fadeInUp}
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Key Benefits</h2>
                <button 
                  onClick={() => toggleSection('cf-benefits')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['cf-benefits'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['cf-benefits'] && (
                <motion.div 
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {benefitsList.map((benefit, idx) => (
                    <motion.div 
                      key={idx}
                      className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex items-center space-x-4"
                      variants={staggerItem}
                    >
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.section>

            {/* FAQ Section */}
            <motion.section 
              id="cf-faq"
              className="mb-16"
              ref={faqRef}
              variants={fadeInUp}
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
            >
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <button 
                  onClick={() => toggleSection('cf-faq')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['cf-faq'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['cf-faq'] && (
                <motion.div 
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  {faqList.map((faq, idx) => (
                    <div key={idx} className="mb-6">
                      <h4 className="font-semibold text-blue-700 mb-2">{faq.q}</h4>
                      <p className="text-gray-700">{faq.a}</p>
                    </div>
                  ))}
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
                    alt="Mobiphysio cryo facial"
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
                  Explore our full range of physiotherapy and wellness services for holistic health and beauty.
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

export default CryoFacialPage;
