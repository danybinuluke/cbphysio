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

const ElbowPainPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('elbow-pain');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'elbow-pain': true,
    'tennis-elbow': true,
    'causes': true,
    'physiotherapy-treatment': true,
    'common-exercises': true
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
    { id: 'elbow-pain', title: 'Understanding Elbow Pain' },
    { id: 'tennis-elbow', title: 'Tennis Elbow' },
    { id: 'causes', title: 'Causes of Elbow Pain' },
    { id: 'physiotherapy-treatment', title: 'Physiotherapy Treatment' },
    { id: 'common-exercises', title: 'Common Exercises' }
  ];

  const causes: CauseItem[] = [
    {
      title: "Ligament Sprains",
      description: "Damage to the tough bands of tissue connecting bones.",
      icon: "🔗"
    },
    {
      title: "Arthritis",
      description: "Inflammation of the elbow joint causing pain and stiffness.",
      icon: "🦴"
    },
    {
      title: "Muscle Strain or Tendinopathy",
      description: "Overstretching or tearing of muscles/tendons around the elbow.",
      icon: "💪"
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
        {/* Styled Sidebar - Box with rounded corners */}
        <div className="hidden lg:block sticky top-6 h-fit w-80 ml-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-900">Contents</h2>
            </div>
            <nav className="p-4">
              <ul className="space-y-1">
                {tableOfContents.map((item, index) => (
                  <li key={item.id}>
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
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Hero Section - Matching NeckPainPage style */}
          <section className="relative h-96 bg-gradient-to-r from-blue-700 to-indigo-800 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/elbow-pain.webp"
                alt="Person experiencing elbow pain"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 text-center text-blue-600">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Elbow Pain</h1>
              <p className="text-blue-600 text-lg">Comprehensive Care & Treatment</p>
            </div>
          </section>

          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Understanding Elbow Pain Section */}
            <section id="elbow-pain" className="mb-16">
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Understanding Elbow Pain</h2>
                <button 
                  onClick={() => toggleSection('elbow-pain')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['elbow-pain'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['elbow-pain'] && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The elbow is a small yet intricate joint that lets us do many things with our arms and hands, like playing sports or opening a can. Elbows can get hurt from accidents, doing the same movement a lot, or having bad posture. This pain can affect how you reach, grip, lift, and use your arms.
                  </p>
                </div>
              )}
            </section>

            {/* Tennis Elbow Section */}
            <section id="tennis-elbow" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Tennis Elbow (Lateral Epicondylitis)</h2>
                <button 
                  onClick={() => toggleSection('tennis-elbow')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['tennis-elbow'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              {expandedSections['tennis-elbow'] && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Tennis elbow happens when the outside of your elbow gets inflamed from repetitive stress. The pain is on the outer side and may go down your forearm, especially when you straighten your arm.
                  </p>
                </div>
              )}
            </section>

            {/* Causes Section */}
            <section id="causes" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Causes of Elbow Pain</h2>
                <button 
                  onClick={() => toggleSection('causes')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['causes'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              {expandedSections['causes'] && (
                <div className="space-y-4">
                  {causes.map((cause, index) => (
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
              )}
            </section>

            {/* Physiotherapy Treatment Section */}
            <section id="physiotherapy-treatment" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">How to Treat Elbow Pain with Physiotherapy</h2>
                <button 
                  onClick={() => toggleSection('physiotherapy-treatment')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['physiotherapy-treatment'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              {expandedSections['physiotherapy-treatment'] && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Physiotherapists diagnose elbow pain using X-rays or MRI, followed by targeted treatments like shockwave therapy, acupuncture, and dry needling. Manual therapy improves joint motion, and personalized exercise programs focus on strength, flexibility, and motor control for elbow pain. Massage therapy may also be included for soft tissue release.
                  </p>
                </div>
              )}
            </section>

            {/* Common Exercises Section */}
            <section id="common-exercises" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Common Exercises</h2>
                <button 
                  onClick={() => toggleSection('common-exercises')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['common-exercises'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              {expandedSections['common-exercises'] && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Some of the common exercises practiced include:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Wrist Turn</li>
                    <li>• Wrist Curls</li>
                    <li>• Towel Twists</li>
                  </ul>
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
                      A lot more awaits you! Ready to live an elbow-pain free life?
                    </p>
                    <br></br>
                    <br></br>
                    <div className='mb-16 text-center'>
                        <a href='/book-appointment'>
                        <Button variant={"interactive-hover"}>
                          <CalendarDays className="mr-2 h-6 w-6" />
                          Book Appointment
                        </Button>
                        </a>
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

export default ElbowPainPage;
