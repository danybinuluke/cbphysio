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

const ShoulderPainPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('shoulder-pain');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'shoulder-pain': true,
    'how-it-works': true,
    'conditions': true,
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
    { id: 'shoulder-pain', title: 'What Is Musculoskeletal Physiotherapy?' },
    { id: 'how-it-works', title: 'How Does It Work?' },
    { id: 'conditions', title: 'Conditions Treated' },
    { id: 'benefits', title: 'Who Will Benefit?' }
  ];

  const causes: CauseItem[] = [
    { 
      title: "Weak Shoulder Blades and Muscles", 
      description: "Inadequate strength in shoulder stabilizing muscles",
      icon: "💪"
    },
    { 
      title: "Dislocation", 
      description: "Joint displacement causing severe pain and instability",
      icon: "⚠️"
    },
    { 
      title: "Sprain", 
      description: "Ligament injury from overstretching or tearing",
      icon: "🔗"
    },
    { 
      title: "Frozen Shoulder", 
      description: "Stiffness and pain that limits shoulder movement",
      icon: "🧊"
    },
    { 
      title: "Injuries, Falls, or Accidents", 
      description: "Trauma-related damage to shoulder structures",
      icon: "🚑"
    },
    { 
      title: "Heart Attack", 
      description: "Referred pain from cardiac events",
      icon: "❤️"
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
                    <span className="font-medium text-sm">{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Hero Section - Matching NeckPainPage style */}
          <section className="relative h-96 bg-gradient-to-r from-blue-700 to-indigo-800 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/shoulder-pain.webp"
                alt="Person experiencing shoulder pain"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 text-center text-blue-600">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Shoulder Pain</h1>
              <p className="text-blue-600 text-lg">Comprehensive Care & Treatment</p>
            </div>
          </section>

          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* What Is Musculoskeletal Physiotherapy Section */}
            <section id="shoulder-pain" className="mb-16">
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">What Is Musculoskeletal Physiotherapy?</h2>
                <button 
                  onClick={() => toggleSection('shoulder-pain')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['shoulder-pain'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['shoulder-pain'] && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Musculoskeletal physiotherapy is a specialist physical therapy treatment for patients who are exhibiting the symptoms of a musculoskeletal disorder or who are undergoing treatment for a musculoskeletal disorder. Musculoskeletal physiotherapy aims to help the patient recover from their condition more quickly through regular treatment sessions and to develop coping strategies to aid the patient during the recovery process and prevent secondary problems from occurring.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Musculoskeletal Physiotherapy involves the treatment of disorders that affect how you move – how your muscles and joints work together. Whether it's your feet, ankles and legs, your hands, arms, and shoulders, or your backs and necks an injury that makes it painful or difficult to move can have a big impact on your life.
                  </p>
                </div>
              )}
            </section>

            {/* How Does It Work Section */}
            <section id="how-it-works" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">How Does It Work?</h2>
                <button 
                  onClick={() => toggleSection('how-it-works')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['how-it-works'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              {expandedSections['how-it-works'] && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Treatment is tailored to the individual based on their initial assessment. Exercise plans and advice are routinely given following treatment and the number of treatments will vary depending on the patient's progress in recovery. Musculoskeletal physiotherapists are specialists in assessing and treating patients with musculoskeletal disorders such as tendonitis or carpal tunnel syndrome.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Musculoskeletal physiotherapists have advanced training in treatments and techniques specifically applicable to musculoskeletal disorders. Most musculoskeletal physiotherapists find their patients suffer specifically from muscle and joint problems, often causing pain in the back and neck. Some treatment options can include:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li>• Manipulation and manual therapy </li>
                    <li>• Massage </li>
                    <li>• Exercise therapy</li>
                    <li>• Electrotherapy</li>
                  </ul>
                </div>
              )}
            </section>

            {/* Conditions Treated Section */}
            <section id="conditions" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Treating Shoulder Pain with Physiotherapy</h2>
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
                    Physiotherapy stands out as the top choice for treating shoulder pain, offering various approaches based on the severity of the pain. From massages and tissue mobilization exercises to wax therapy and electrotherapy, these treatments work together to treat shoulder pain effectively.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Experiencing shoulder pain can have various causes. It's crucial to identify the root cause for accurate diagnosis and effective treatment.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Physiotherapy for shoulder pain begins with a thorough diagnosis. After assessing your medical history and the condition's origin and severity, a customized treatment plan is created. The aim is to reduce pain, stiffness, and tension, improving overall functionality. You'll also gain insights into at-home practices, lifestyle adjustments, and your physical well-being.
                  </p>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Some common reasons include:</h3>
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

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Treatment Methods:</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-blue-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Heat and Cold Therapy</h4>
                        <p className="text-gray-700">
                          Heat and cold therapy, alternating between hot and cold packs, offers quick relief by reducing pain, stiffness, and inflammation, helping in healing easily.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Exercise and Small Stretches</h4>
                        <p className="text-gray-700">
                          Exercises such as gentle stretching, weight-bearing, and resistance exercises help reduce pain and enhance physical strength and functionality. These exercises aim to improve posture, strengthen the upper body, and increase overall motion.
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Joint Mobilization</h4>
                        <p className="text-gray-700">
                          Techniques like glides, rotations, diagonal patterns, and superior/inferior movements are applied to enhance range of motion, reduce pain and inflammation, and minimize the risk of future injuries.
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
                    Musculoskeletal physiotherapy benefits a wide range of individuals experiencing shoulder pain and related conditions:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Ideal Candidates:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Office workers with postural issues</li>
                        <li>• Athletes with sports injuries</li>
                        <li>• Individuals with chronic shoulder pain</li>
                        <li>• Post-surgical patients</li>
                        <li>• Manual laborers</li>
                        <li>• Elderly with mobility issues</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Age Groups:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Young adults (20-40)</li>
                        <li>• Middle-aged professionals</li>
                        <li>• Senior citizens</li>
                        <li>• Active individuals</li>
                        <li>• Recovery patients</li>
                        <li>• Preventive care seekers</li>
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
                      A lot more awaits you! Ready to live a shoulder-pain free life?
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

export default ShoulderPainPage;
