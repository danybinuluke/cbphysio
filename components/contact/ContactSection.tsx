'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CalendarDays, PhoneCall, Facebook, Instagram, Linkedin, CheckCircle, AlertCircle, Loader2, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const ContactPage = () => {
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

  const handleSubmit = () => {
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

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 px-4 md:px-16">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200">
          <Image 
            src="/doctor-profile.jpg" 
            alt="Doctor Profile" 
            width={600}
            height={500}
            className="object-cover w-full h-auto"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10 border-2 border-gray-200">
          <p className="text-blue-600 text-lg font-semibold mb-3 tracking-wide uppercase">Get in touch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight font-serif">
            Start Your Wellness Journey Today!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Input name="name" value={formData.name} onChange={handleChange} placeholder="Name*" />
            <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email*" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone*" />
            <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
          </div>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            className="min-h-[140px] resize-none mb-6"
          />

          <AnimatePresence>
            {successVisible && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-center gap-2 text-green-700 bg-green-100 border border-green-300 rounded-lg px-4 py-3 text-sm mb-4"
              >
                <CheckCircle className="w-5 h-5" />
                Your message has been sent successfully!
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {errorVisible && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-center gap-2 text-red-700 bg-red-100 border border-red-300 rounded-lg px-4 py-3 text-sm mb-4"
              >
                <AlertCircle className="w-5 h-5" />
                Please fill in all required fields.
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-semibold text-md shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-3 w-5 h-5" /> Sending...
              </>
            ) : (
              <>
                Send Message <ArrowRight className="ml-3 h-5 w-5" />
              </>
            )}
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={2}
      >
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">R S Puram</h3>
          <p className="text-gray-700 flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" /> +91 99402 14563
          </p>
          <p className="text-gray-700 flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" /> vandana@mobiphysio.in
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Goldwins</h3>
          <p className="text-gray-700 flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" /> +91 79913 28565
          </p>
          <p className="text-gray-700 flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" /> mobiphysio@gmail.com
          </p>
        </div>
      </motion.div>

      <motion.div
        className="text-center mt-12 space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={3}
      >
        <p className="text-xl font-semibold text-blue-900">Ready to book your session or request a callback?</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/book-appointment">
            <Button variant={'interactive-hover'}>
              <CalendarDays className="mr-2 h-5 w-5" /> Book Appointment
            </Button>
          </a>
          <a href="/contact">
            <Button variant={'interactive-hover'}>
              <PhoneCall className="mr-2 h-5 w-5" /> Request Callback
            </Button>
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-blue-700">
          <a href="https://www.facebook.com/mobiphysioindia" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://www.instagram.com/mobiphysio" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://www.linkedin.com/company/mobiphysio-physiotherapy/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
