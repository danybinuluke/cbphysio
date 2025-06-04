'use client';

import React, { useState } from 'react';
import { ArrowRight, Calendar, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Reveal from '@/components/ui/reveal';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = () =>
    formData.name && formData.email && formData.phone && formData.message;

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isFormValid()) {
      setErrorVisible(true);
      setTimeout(() => setErrorVisible(false), 3000);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessVisible(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      setTimeout(() => setSuccessVisible(false), 3500);
    }, 2000);
  };

  const handleContactUs = () => {
    window.location.href = '/contact';
  };

  const handleBookAppointment = () => {
    window.location.href = '/book-appointment';
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left side - Image */}
          <Reveal delay={0.1}>
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200">
                <img 
                  src="/doctor-profile.jpg" 
                  alt="Healthcare Professional" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-[280px] px-4 font-sans">
                <Button 
                  onClick={handleBookAppointment}
                  variant="hover-expand"
                  className="w-full shadow-lg hover:shadow-xl"
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  Book Appointment
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Right side - Form */}
          <Reveal delay={0.2}>
            <div className="bg-white rounded-2xl shadow-xl p-10 border-2 border-gray-200">
              <div className="mb-8">
                <Reveal delay={0.3}>
                  <p className="text-blue-600 text-lg font-semibold mb-3 tracking-wide uppercase">Get in touch</p>
                </Reveal>
                <Reveal delay={0.35}>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight font-serif">
                    Start Your Wellness Journey Today!
                  </h2>
                </Reveal>
              </div>
              
              <Reveal delay={0.4}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name*"
                      className="form-input"
                    />
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Email*"
                      className="form-input"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone*"
                      className="form-input"
                    />
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="form-input"
                    />
                  </div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your wellness goals..."
                    className="form-input min-h-[140px] resize-none"
                  />

                  {/* Success Message */}
                  <AnimatePresence>
                    {successVisible && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="flex items-center gap-2 text-green-700 bg-green-100 border border-green-300 rounded-lg px-4 py-3 text-sm"
                      >
                        <CheckCircle className="w-5 h-5" />
                        Your message has been sent successfully!
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Error Message */}
                  <AnimatePresence>
                    {errorVisible && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="flex items-center gap-2 text-red-700 bg-red-100 border border-red-300 rounded-lg px-4 py-3 text-sm"
                      >
                        <AlertCircle className="w-5 h-5" />
                        Please fill in all required fields.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="pt-4">
                    <Button
                      onClick={handleSubmit}
                      disabled={loading}
                      variant="destructive"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-sans text-md shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin mr-3 w-5 h-5" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-3 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="pt-6 space-y-3">
                    <p className="text-gray-600 text-sm-extrabold font-serif text-center">
                      Need more details?
                    </p>
                    <Button 
                      variant="default"
                      className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4 rounded-xl font-sans transition-all duration-300"
                      onClick={handleContactUs}
                    >
                      Contact Us
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
