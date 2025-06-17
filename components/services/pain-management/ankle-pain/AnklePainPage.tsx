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

const AnklePainPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('ankle-overview');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'ankle-overview': true,
    'conditions': true,
    'treatment': true,
    'benefits': true
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
    { id: 'ankle-overview', title: 'Understanding Ankle Pain' },
    { id: 'conditions', title: 'Common Causes' },
    { id: 'treatment', title: 'Treatment Methods' },
    { id: 'benefits', title: 'Who Will Benefit?' }
  ];

  const causes: CauseItem[] = [
    { 
      title: "Twisted Ankle", 
      description: "Sudden injuries from rolling or twisting the ankle joint",
      icon: "🔄"
    },
    { 
      title: "Ligament Sprains", 
      description: "Stretching or tearing of ankle ligaments during activity",
      icon: "🔗"
    },
    { 
      title: "Broken Ankle", 
      description: "Fractures in ankle bones from trauma or impact",
      icon: "💥"
    },
    { 
      title: "Overuse Injuries", 
      description: "Gradual damage from repetitive stress and activity",
      icon: "🔄"
    },
    { 
      title: "Sports Injuries", 
      description: "Activity-related trauma during running or sports",
      icon: "⚽"
    },
    { 
      title: "Instability Issues", 
      description: "Weakness in supporting muscles and ligaments",
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
                src="/ankle-pain.webp"
                alt="Person experiencing ankle pain"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 text-center text-blue-600">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Ankle Pain</h1>
              <p className="text-blue-600 text-lg">Comprehensive Care & Treatment</p>
            </div>
          </section>

          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Understanding Ankle Pain Section */}
            <section id="ankle-overview" className="mb-16">
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Understanding Ankle Pain</h2>
                <button 
                  onClick={() => toggleSection('ankle-overview')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['ankle-overview'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['ankle-overview'] && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The ankle joint is important and often gets injured. It helps us move during activities like walking, running, and sports by transferring loads from our body to the ground. This relies on a complex network of muscles, tendons, bones, and ligaments for stability on different surfaces.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ankle pain can significantly impact your daily activities and quality of life. Understanding the causes and getting proper treatment is essential for recovery and preventing future injuries.
                  </p>
                </div>
              )}
            </section>

            {/* Common Causes Section */}
            <section id="conditions" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Common Causes of Ankle Pain</h2>
                <button 
                  onClick={() => toggleSection('conditions')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['conditions'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['conditions'] && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The pain in your ankles may be due to following conditions:
                  </p>
                  
                  <div className="grid gap-4 mb-8">
                    <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-400">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Sudden Injuries</h4>
                      <p className="text-gray-700">Sudden injuries like a twisted ankle or a broken ankle, often referred to as ligament sprains</p>
                    </div>
                    
                    <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-400">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Gradual Overuse</h4>
                      <p className="text-gray-700">Gradual overuse injuries that develop over time</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Specific Conditions Include:</h3>
                    <div className="space-y-4">
                      {causes.map((cause, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg">
                            {cause.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900">{cause.title}</h4>
                            <p className="text-gray-600 text-sm">{cause.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Treatment Methods Section */}
            <section id="treatment" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Treating Ankle Pain with Physiotherapy</h2>
                <button 
                  onClick={() => toggleSection('treatment')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['treatment'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['treatment'] && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Early management is critical for the acute type of injuries. First, check if any bones are broken. A physiotherapist or doctor can decide if an x-ray is needed to find fractures, and this is a priority. It's wise to avoid running or playing sports on the injured ankle to let it heal. Using ice, compression, and elevating the ankle can help reduce pain at the beginning.
                  </p>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Treatment Methods:</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-blue-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Manual Therapy</h4>
                        <p className="text-gray-700">
                          Hands-on techniques such as massage and joint mobilization, can improve flexibility and reduce pain.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Ultrasound Therapy</h4>
                        <p className="text-gray-700">
                          The use of ultrasound waves to stimulate healing and reduce inflammation in the affected area.
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Stretching Routines</h4>
                        <p className="text-gray-700">
                          Gentle stretches to improve flexibility and relieve tension in the ankle.
                        </p>
                      </div>
                      
                      <div className="bg-yellow-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Gait Training</h4>
                        <p className="text-gray-700">
                          Helping individuals walk properly to avoid putting excessive strain on the ankle.
                        </p>
                      </div>
                      
                      <div className="bg-teal-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Balance Training</h4>
                        <p className="text-gray-700">
                          Exercises to enhance overall balance and stability, reducing the risk of future injuries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Who Will Benefit Section */}
            <section id="benefits" className="mb-16">
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
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Ankle physiotherapy benefits a wide range of individuals experiencing ankle pain and related conditions:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Ideal Candidates:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Athletes with sports injuries</li>
                        <li>• Individuals with ankle sprains</li>
                        <li>• People with chronic ankle instability</li>
                        <li>• Post-surgical patients</li>
                        <li>• Workers with standing jobs</li>
                        <li>• Anyone with balance issues</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Common Conditions:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Ankle sprains and strains</li>
                        <li>• Achilles tendon injuries</li>
                        <li>• Ankle fractures (post-healing)</li>
                        <li>• Chronic ankle pain</li>
                        <li>• Ankle arthritis</li>
                        <li>• Preventive care needs</li>
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
                      A lot more awaits you! Ready to live an ankle-pain free life?
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
                  <a href='/services'> <span className="relative z-10">Check Other Services</span> </a>
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

export default AnklePainPage;
