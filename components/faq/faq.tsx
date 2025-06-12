'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button'; // update path if needed
import Link from 'next/link';

const faqs = [
  {
    question: 'I have been diagnosed with Frozen Shoulder. Can physiotherapy help?',
    answer:
      'Yes, definitely! Physiotherapy is the main treatment for Frozen Shoulder. Injections or surgery are considered later. In the freezing stage, we focus on reducing pain and gentle exercises. As your shoulder unfreezes, we use personalized exercises to help you recover well at MobiPhysio. No need for injections or surgery right away!',
  },
  {
    question: 'Who is more likely to get Frozen Shoulder?',
    answer:
      'Generally, women aged 35–60 are more prone to Frozen Shoulder, but it can affect men too. It might develop without a clear cause or be linked to conditions like diabetes, thyroid issues, heart disease, or Parkinson’s. Smoking and a history of stroke can also increase the risk.',
  },
  {
    question: 'How can I tell if I have a Frozen Shoulder?',
    answer:
      'If you’re experiencing shoulder pain or stiffness, it’s best to consult a healthcare professional like a physiotherapist. At MobiPhysio, we carefully assess patients before diagnosing a stiff shoulder and recommending exercises. People often come to us with complaints of shoulder pain, difficulty raising the arm, sleep disruption, and challenges with everyday tasks like dressing or combing hair.',
  },
  {
    question: 'What is Pelvic Floor Muscle weakness? Does it affect only women?',
    answer:
      'Pelvic floor muscles support the bladder, bowel, and uterus. Like any muscles, they can become weak in both men and women. Signs include leaking urine, reduced sensation, infections, and pain. Pelvic health physiotherapists can help treat it.',
  },
  {
    question: 'Why is pelvic floor dysfunction more common in women? How can physiotherapy help?',
    answer:
      'Pelvic floor issues, often more common in women, can result from factors like pregnancy, tears during childbirth causing myofascial pain, vulvovaginal tissue thinning due to menopause, obesity, stress incontinence, or chronic constipation. Physiotherapy can help through manual therapy and DNS exercises tailored to strengthen or relax pelvic floor muscles. The number of sessions varies, each one customized to address your specific needs and symptoms.',
  },
  {
    question: 'What about Kegel exercises? Are they for the pelvic floor? Why see a therapist if I can do Kegels?',
    answer:
      'Kegel exercises are just one type of pelvic floor exercise and may not be the most suitable for your specific condition. Some individuals might think they are doing Kegels correctly but might be performing them incorrectly, potentially worsening their pelvic floor issues. At MobiPhysio, we assess your overall pelvic health and identify the most effective pelvic floor exercises tailored to meet your specific needs.',
  },
  {
    question: 'How does a lack of physical activity impact balance and body awareness, and how can physiotherapy assist?',
    answer:
      'A sedentary lifestyle can lead to health problems, balance issues, and a higher risk of falls from childhood to adulthood. Less control over the core can cause instability, coordination problems, and a decrease in core muscle strength, affecting overall balance and body awareness. Physiotherapy can help address these issues.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base">
            Here are some common questions about our treatments and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentRef = useRef<HTMLDivElement>(null);

            return (
              <motion.div
                key={index}
                layout
                className="border border-gray-200 rounded-lg bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left text-lg font-medium text-gray-800 hover:bg-blue-50 transition"
                >
                  {faq.question}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-blue-600" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: contentRef.current?.scrollHeight || 'auto',
                        opacity: 1,
                      }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        ref={contentRef}
                        className="px-6 pb-4 text-gray-600 text-sm"
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Have any concerns or symptoms?
          </h3>
          <Link href="/book-appointment">
            <Button variant="hover-expand" className="bg-blue-600 hover:bg-blue-700 text-white">
              Book Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faq;
