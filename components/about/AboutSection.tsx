"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { CalendarDays } from "lucide-react";

const cards = [
  {
    title: "Our Vision",
    content:
      "To be your preferred physiotherapy service provider, recognized for excellence and professionalism, continually adapting to meet your evolving needs.",
    animation: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } },
  },
  {
    title: "Our Mission",
    content:
      `To enhance lives through physiotherapy by:\n\n- Applying the latest knowledge for exceptional treatment.\n- Treating each person uniquely, focusing on individual needs.\n- Providing one-on-one care for personalized attention.\n- Always prioritizing the interests and well-being of our patients.`,
    animation: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } },
  },
  {
    title: "Value Statement",
    content:
      `At MobiPhysio, we're dedicated to promoting physiotherapy through:\n\n- Ethical Standards: Always maintaining the highest ethical practices\n- Respectful Care: Prioritizing patients' time, comfort, and confidentiality.\n- Collaborative Approach: Fostering teamwork with professionals in healthcare.`,
    animation: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } },
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Side */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          <Image
            src="/about-img-01.webp"
            alt="MobiPhysio Clinic"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div
          className="w-full md:w-1/2 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Welcome to MobiPhysio
          </h2>
          <p className="text-lg font-bold text-blue-900 leading-relaxed">
            The Best Physiotherapy Clinic In Coimbatore
          </p>
          <p className="text-base md:text-lg">
            Mobi Physio isn't just a clinic; we are a team of dedicated
            professionals committed to empowering you on your health journey.
            Dr. Vandana, our Founder and Senior Physiotherapist, envisioned a
            space that goes beyond traditional healing, and at Mobi Physio,
            we've transformed that vision into a reality.
          </p>
          <p className="text-lg font-bold text-blue-900 leading-relaxed">
            Evidence Based Innovation
          </p>
          <p className="text-base md:text-lg">
            MobiPhysio takes pride in offering
            evidence-based manual therapy techniques, including evaluation of
            posture, range of movements, strength, flexibility, stability,
            sensory and psychological aspects, and individual goal-setting.
          </p>
          <p className="text-lg font-bold text-blue-900 leading-relaxed">
            Advanced Facilities, Friendly Atmosphere
          </p>
          <p className="text-base md:text-lg">
            MobiPhysio's advanced
            facilities and friendly atmosphere redefine your therapy experience.
            It's not just treatment; it's a comforting journey toward a
            healthier you, surrounded by a pleasing ambiance that soothes your
            well-being.
          </p>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="p-6 rounded-2xl shadow-xl bg-blue-50 hover:shadow-2xl cursor-pointer whitespace-pre-wrap"
            initial={card.animation.hidden}
            whileInView={card.animation.visible}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl text-blue-900 font-semibold mb-2">{card.title}</h3>
            <hr></hr>
            <br></br>
            <p className="text-base leading-snug">{card.content}</p>
          </motion.div>
        ))}
      </div>
      {/* Call to Action */}
      <div className="mt-16 text-center space-y-4">
        <p className="text-xl font-semibold text-blue-900">
          Eager to begin your journey to better health?
        </p>
        <a href='/book-appointment' className="inline-block">
          <Button variant={"interactive-hover"}>
            <CalendarDays className="mr-2 h-6 w-6" />
            Book Appointment
          </Button>
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
