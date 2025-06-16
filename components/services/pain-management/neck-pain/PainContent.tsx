'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Phone, Mail, MapPin, Clock, CheckCircle, AlertTriangle, Heart, Shield, User, Menu, X, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

const NeckPainPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('neck-pain');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'neck-pain': true,
    'causes': true,
    'risk-factors': true,
    'prevention': true,
    'medical-help': true,
    'treatment': true,
    'physiotherapy': true
  });

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
    { id: 'neck-pain', title: 'NECK PAIN' },
    { id: 'causes', title: 'Causes Of Neck Pain' },
    { id: 'risk-factors', title: 'Risk Factors That Are Ass...' },
    { id: 'prevention', title: 'Preventive Measures For A...' },
    { id: 'medical-help', title: 'When To Seek Medical Help...' },
    { id: 'treatment', title: 'Treatment Overview' },
    { id: 'physiotherapy', title: 'Physiotherapy Treatment ...' }
  ];

  const causes: CauseItem[] = [
    { 
      title: "Poor Posture", 
      description: "Working at desk for long hours without changing position",
      icon: "👤"
    },
    { 
      title: "Muscle Strain", 
      description: "Tension and strain in neck and upper back muscles",
      icon: "📈"
    },
    { 
      title: "Injuries", 
      description: "Whiplash, falls, or contact sports injuries",
      icon: "⚠️"
    },
    { 
      title: "Cervical Spondylosis", 
      description: "Age-related wear and tear of cervical vertebrae",
      icon: "⏰"
    },
    { 
      title: "Sleeping Position", 
      description: "Uncomfortable or awkward sleeping positions",
      icon: "🛡️"
    },
    { 
      title: "Herniated Discs", 
      description: "Pinching of nerves from cervical vertebrae",
      icon: "💗"
    }
  ];

  const riskFactors: RiskFactor[] = [
    {
      title: "Age",
      description: "Neck pain is more common as you get older, starting around age 30 or 40."
    },
    {
      title: "Poor posture", 
      description: "Working at a desk for too long without changing position can often lead to neck pain."
    },
    {
      title: "Diseases",
      description: "Some types of arthritis and cancer can contribute to neck pain."
    },
    {
      title: "Sudden jerks",
      description: "Sudden jerks to your neck while doing some exercise can be one the contributing factors for you neck pain."
    },
    {
      title: "Sleeping postures",
      description: "People having awkward sleeping postures are prone to have a greater risk of back pain."
    },
    {
      title: "Smoking",
      description: "Smokers have increased rates of neck pain. This may occur because smoking prompts more coughing, which can lead to herniated disks."
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
      {/* Contact Buttons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors">
          <Phone className="w-5 h-5" />
        </button>
        <button className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-indigo-600 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
          </svg>
        </button>
      </div>

      <div className="flex">
        {/* Sidebar - Always visible on desktop, hidden on mobile/tablet */}
        <div className="hidden lg:block fixed lg:static inset-y-0 left-0 z-30 w-80 bg-white shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Contents</h2>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              {tableOfContents.map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center text-left p-3 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center text-white text-sm font-medium ${
                      activeSection === item.id ? 'bg-blue-600' : 'bg-gray-400'
                    }`}>
                      {index + 1}
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Hero Section */}
          <section className="relative h-96 bg-gradient-to-r from-blue-700 to-indigo-800 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/neck-pain.webp"
                alt="Person experiencing neck pain"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 text-center text-white">
              <h1 className="text-4xl text-blue-600 md:text-5xl font-bold mb-2">Neck Pain</h1>
              <p className="text-blue-600 text-lg">Comprehensive Care & Treatment</p>
            </div>
          </section>

          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Neck Pain Section */}
            <section id="neck-pain" className="mb-16">
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">NECK PAIN</h2>
                <button 
                  onClick={() => toggleSection('neck-pain')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['neck-pain'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['neck-pain'] && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Neck pain, also known as cervicalgia, is a common problem, with two-thirds of the population having neck pain at some point in their lives. Neck pain, although felt in the neck, can be caused by numerous other spinal problems. Neck pain may arise due to muscular tightness in both the neck and upper back, and pinching of the nerves emanating from the cervical vertebrae. Joint disruption in the neck creates pain, as does joint disruption in the upper back. The bones, ligaments, and muscles of your neck support your head and allow for motion. Any abnormalities, inflammation, or injury can cause neck pain or stiffness. Many people experience neck pain or stiffness occasionally.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    In many cases, it's due to poor posture or overuse. Sometimes, neck pain is caused by injury from a fall, contact sports, or whiplash. Most of the time, neck pain isn't a serious condition and can be relieved within a few days. But in some cases, neck pain can indicate serious injury or illness and require a doctor's care.
                  </p>
                </div>
              )}
            </section>

            {/* Causes Section */}
            <section id="causes" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Causes Of Neck Pain</h2>
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
                  <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8">
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      In many cases, it's due to poor posture or overuse. Sometimes, neck pain is caused by injury from a fall, contact sports, or whiplash. Most of the time, neck pain isn't a serious condition and can be relieved within a few days. But in some cases, neck pain can indicate serious injury or illness and require a doctor's care.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Cervical Spondylosis</li>
                      <li>• Meningitis</li>
                      <li>• Rheumatoid arthritis </li>
                      <li>• Osteoporosis </li>
                      <li>• Fibromyalgia </li>
                      <li>• Herniated cervical disk </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    {causes.slice(0, 3).map((cause, index) => (
                      <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                          {cause.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{cause.title}</h3>
                          <p className="text-gray-600">{cause.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </section>

            {/* Risk Factors Section */}
            <section id="risk-factors" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Risk Factors That Are Associated With Neck Pain</h2>
                <button 
                  onClick={() => toggleSection('risk-factors')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['risk-factors'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['risk-factors'] && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Understanding risk factors can help identify high-risk patients and improve their neck pain management. Since older adults usually face both age-related physical and psychosocial issues, comprehensive assessments and treatments are needed to effectively manage neck pain. Some common risk factor considering back pain management are as:
                  </p>
                  
                  <div className="space-y-6">
                    {riskFactors.map((factor, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          <span className="text-black">• {factor.title}.</span>
                        </h4>
                        <p className="text-gray-700 ml-4">{factor.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Prevention Section */}
            <section id="prevention" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Preventive Measures For A Healthy Neck</h2>
                <button 
                  onClick={() => toggleSection('prevention')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['prevention'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['prevention'] && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Most neck pain is associated with poor posture combined with age-related wear and tear. To help prevent neck pain, keep your head centered over your spine. Some simple changes in your daily routine may help. Consider trying to:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Use good posture. When standing and sitting, be sure your shoulders are in a straight line over your hips and your ears are directly over your shoulders.</li>
                    <li>• Take frequent breaks. If you travel long distances or work long hours at your computer, get up, move around and stretch your neck and shoulders.</li>
                    <li>• Adjust your desk, chair and computer so that the monitor is at eye level. Knees should be slightly lower than hips. Use your chair's armrests.</li>
                    <li>• Avoid tucking the phone between your ear and shoulder when you talk. Use a headset or speakerphone instead.</li>
                    <li>• If you smoke, quit. Smoking can put you at higher risk of developing neck pain.</li>
                    <li>• Avoid carrying heavy bags with straps over your shoulder. The weight can strain your neck.</li>
                    <li>• Sleep in a good position. Your head and neck should be aligned with your body. Use a small pillow under your neck.</li>
                  </ul>
                </div>
              )}
            </section>

            {/* Medical Help Section */}
            <section id="medical-help" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">When To Seek Medical Help For Neck Pain</h2>
                <button 
                  onClick={() => toggleSection('medical-help')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['medical-help'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['medical-help'] && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Most neck pain improves gradually with home treatment. If not, see your doctor. Seek immediate care if severe neck pain results from an injury, such as a motor vehicle accident, diving accident or fall. You should also see a doctor if you have:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• severe neck pain without apparent cause</li>
                    <li>• lump in your neck</li>
                    <li>• fever</li>
                    <li>• headache</li>
                    <li>• swollen glands</li>
                    <li>• nausea</li>
                    <li>• vomiting</li>
                    <li>• trouble swallowing or breathing</li>
                    <li>• weakness</li>
                    <li>• numbness</li>
                    <li>• tingling</li>
                    <li>• pain that radiates down your arms or legs</li>
                    <li>• inability to move your arms or hands</li>
                    <li>• inability to touch your chin to your chest</li>
                  </ul>
                </div>
              )}
            </section>

            {/* Treatment Section */}
            <section id="treatment" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Treatment Overview</h2>
                <button 
                  onClick={() => toggleSection('treatment')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['treatment'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['treatment'] && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Your doctor will perform a physical exam and take your complete medical history. Treatment for neck pain depends on the diagnosis. In addition to a thorough history and physical exam by your doctor, you may also need imaging studies and tests. Treatment for neck pain may include:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <li>• Ice and heat therapy</li>
                    <li>• Exercise, stretching, and physical therapy</li>
                    <li>• Pain medication</li>
                    <li>• Corticosteroid injections</li>
                    <li>• Muscle relaxants</li>
                    <li>• Neck collar</li>
                    <li>• Traction</li>
                    <li>• Antibiotics if you have an infection</li>
                  </ul>
                </div>
              )}
            </section>

            {/* Physiotherapy Section */}
            <section id="physiotherapy" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Physiotherapy Treatment For Neck Pain</h2>
                <button 
                  onClick={() => toggleSection('physiotherapy')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['physiotherapy'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['physiotherapy'] && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Physiotherapy is highly effective for neck pain management. Our comprehensive approach includes:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Active Treatments:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Therapeutic exercises</li>
                        <li>• Stretching programs</li>
                        <li>• Strengthening routines</li>
                        <li>• Posture correction</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Passive Treatments:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Manual therapy</li>
                        <li>• Ultrasound therapy</li>
                        <li>• TENS therapy</li>
                        <li>• Heat and cold therapy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Our Approach Section with Text Overlay */}
            <section className="mb-16">
              <div className="relative h-80 rounded-lg overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                  <img 
                    src="/bg-img.png"
                    alt="Mobiphysio approach"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Text overlay with semi-transparent background */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      <strong>Our Approach at Mobiphysio</strong>
                    </h2>
                    <p className="text-xl md:text-2xl">
                      A lot more awaits you! Ready to live a neck-pain free life?
                    </p>
                    <br></br>
                    <br></br>
                    <div className='mb-16 text-center'>
                        <Button variant={"interactive-hover"}>
                          <CalendarDays className="mr-2 h-6 w-6" />
                          Book Appointment
                        </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Explore More Services Section */}
            <section className="mb-16 text-center">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <p className="text-gray-700 text-lg mb-6">
                  Discover our comprehensive range of physiotherapy services designed to help you achieve optimal health and wellness.
                </p>
                <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                  <a href='/services'><span className="relative z-10">Check Other Services</span></a>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeckPainPage;
