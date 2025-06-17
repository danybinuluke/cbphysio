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

const BackPainPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('back-pain');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'back-pain': true,
    'how-it-works': true,
    'conditions': true,
    'benefits': true,
    'causes': true,
    'risk-factors': true,
    'prevention': true,
    'treatment': true
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
    { id: 'back-pain', title: 'What Is Musculoskeletal Physiotherapy?' },
    { id: 'how-it-works', title: 'How Does It Work?' },
    { id: 'conditions', title: 'Conditions Treated' },
    { id: 'benefits', title: 'Who Will Benefit?' },
    { id: 'causes', title: 'Causes Of Back Pain' },
    { id: 'risk-factors', title: 'Risk Factors' },
    { id: 'prevention', title: 'Prevention Methods' },
    { id: 'treatment', title: 'Treatment Options' }
  ];

  const causes: CauseItem[] = [
    { 
      title: "Poor Posture", 
      description: "Prolonged sitting and improper ergonomics at work",
      icon: "👤"
    },
    { 
      title: "Muscle Strain", 
      description: "Lifting heavy objects incorrectly or sudden movements",
      icon: "💪"
    },
    { 
      title: "Herniated Discs", 
      description: "Disc material pressing on nearby nerves",
      icon: "⚠️"
    },
    { 
      title: "Arthritis", 
      description: "Joint inflammation affecting spinal mobility",
      icon: "🦴"
    },
    { 
      title: "Osteoporosis", 
      description: "Weakened bones leading to compression fractures",
      icon: "🔬"
    },
    { 
      title: "Sciatica", 
      description: "Nerve compression causing radiating leg pain",
      icon: "⚡"
    }
  ];

  const riskFactors: RiskFactor[] = [
    {
      title: "Age",
      description: "Back pain becomes more common as you age, particularly after 30-40 years."
    },
    {
      title: "Physical fitness", 
      description: "Weak, unused muscles in the back and abdomen might lead to back pain."
    },
    {
      title: "Weight gain",
      description: "Excess body weight puts extra stress on your back muscles and spine."
    },
    {
      title: "Occupational hazards",
      description: "Jobs that require heavy lifting, pushing, pulling, or twisting of the spine."
    },
    {
      title: "Psychological factors",
      description: "Depression and anxiety appear to increase the risk of back pain."
    },
    {
      title: "Smoking",
      description: "Smokers have increased rates of back pain due to reduced blood flow to the spine."
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
                src="/back-pain.webp"
                alt="Person experiencing back pain"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 text-center text-white">
              <h1 className="text-4xl text-blue-600 md:text-5xl font-bold mb-2">Back Pain</h1>
              <p className="text-blue-600 text-lg">Comprehensive Care & Treatment</p>
            </div>
          </section>

          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* What Is Musculoskeletal Physiotherapy Section */}
            <section id="back-pain" className="mb-16">
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">What Is Musculoskeletal Physiotherapy?</h2>
                <button 
                  onClick={() => toggleSection('back-pain')}
                  className="ml-auto w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform duration-200"
                  style={{ transform: expandedSections['back-pain'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              {expandedSections['back-pain'] && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    When it comes to the treatment of upper left back pain or lower back pain, physiotherapy stands out as the most effective and common approach, particularly for lower limb and back pain. Physiotherapists employ a set of therapies, including manual therapy and rehabilitation, to assist patients. This comprehensive approach aims to enhance movement, increase strength and range of motion, prevent further injuries, and facilitate an early return to sporting activities.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Physiotherapists are professionals specialized in administering physical treatments that utilize controlled movements, techniques, and exercises. Their expertise is dedicated to healing, preventing, or managing disorders and injuries associated with the musculoskeletal system.
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
                    The physiotherapist starts by checking where the pain is coming from. They use a simple test called targeted muscle testing, gently applying pressure to certain muscles to understand what might be causing the pain.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Stretches and exercises enhance mobility, muscle strength, flexibility, and coordination. It helps you in increasing the strength and flexibility of the muscles, eliminating the swelling and pain and gives you relief.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We make you feel comfortable and convenient – our team is here to meet your needs, ensuring you feel your best.
                  </p>
                </div>
              )}
            </section>

            {/* Conditions Treated Section */}
            <section id="conditions" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Conditions Treated</h2>
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
                    It is great for treating muscle and joint pain in the upper left back. It works well for conditions like arthritis and fibromyalgia too. People use this therapy to recover faster from surgeries and sports injuries. It's also helpful for easing pain from trigger points and myofascial pain syndrome.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Lower back pain</li>
                      <li>• Upper back pain</li>
                      <li>• Sciatica</li>
                      <li>• Herniated discs</li>
                      <li>• Muscle strains</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Arthritis</li>
                      <li>• Fibromyalgia</li>
                      <li>• Sports injuries</li>
                      <li>• Post-surgical recovery</li>
                      <li>• Myofascial pain syndrome</li>
                    </ul>
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
                    Musculoskeletal physiotherapy benefits a wide range of individuals experiencing back pain and related conditions:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Ideal Candidates:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Office workers with postural issues</li>
                        <li>• Athletes with sports injuries</li>
                        <li>• Individuals with chronic back pain</li>
                        <li>• Post-surgical patients</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Age Groups:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Young adults (20-40)</li>
                        <li>• Middle-aged professionals</li>
                        <li>• Senior citizens</li>
                        <li>• Active individuals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Causes Section */}
            <section id="causes" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Causes Of Back Pain</h2>
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

            {/* Risk Factors Section */}
            <section id="risk-factors" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Risk Factors Associated With Back Pain</h2>
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
                <h2 className="text-3xl font-bold text-gray-900">Prevention Methods For Back Pain</h2>
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
                    Prevention is key to maintaining a healthy back. Here are essential measures you can take:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Maintain proper posture while sitting, standing, and walking</li>
                    <li>• Exercise regularly to strengthen back and abdominal muscles</li>
                    <li>• Use proper lifting techniques - bend your knees, not your back</li>
                    <li>• Maintain a healthy weight to reduce stress on your spine</li>
                    <li>• Sleep on a supportive mattress with proper pillow support</li>
                    <li>• Take regular breaks from prolonged sitting or standing</li>
                    <li>• Avoid smoking as it reduces blood flow to the spine</li>
                    <li>• Manage stress through relaxation techniques</li>
                  </ul>
                </div>
              )}
            </section>

            {/* Treatment Section */}
            <section id="treatment" className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Treatment Options</h2>
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
                    Our comprehensive treatment approach includes various physiotherapy techniques tailored to your specific needs:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Active Treatments:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Therapeutic exercises</li>
                        <li>• Strengthening programs</li>
                        <li>• Flexibility training</li>
                        <li>• Postural correction</li>
                        <li>• Core stabilization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Passive Treatments:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Manual therapy</li>
                        <li>• Ultrasound therapy</li>
                        <li>• TENS therapy</li>
                        <li>• Heat and cold therapy</li>
                        <li>• Massage therapy</li>
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
                      A lot more awaits you! Ready to live a back-pain free life?
                    </p>
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

export default BackPainPage;
