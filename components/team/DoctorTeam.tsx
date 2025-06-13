'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Import your existing Button component
import 'swiper/css';
import 'swiper/css/navigation';

const doctors = [
  {
    name: 'Dr. T.R. Vandana, PT',
    img: '/doctor-profile.jpg', // Ensure these are in public/
  },
  {
    name: 'Maitri Daga',
    img: '/physiotherapist-2.png',
  },
  {
    name: 'Kriti.B',
    img: '/physiotherapist-3.png',
  },
];

const DoctorTeam = () => {
  const router = useRouter();

  const handleBookAppointment = () => {
    router.push('/book-appointment');
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Meet the Heart Behind Mobiphysio</h2>
        <p className="text-lg mb-4">
          At Mobiphysio, recognized as the Best Physiotherapy Clinic in Coimbatore, our strength lies in the dedication and compassion of our expert team. We're not just a clinic — we are your personalized road to wellness, committed to understanding your unique needs and supporting you every step of the way.
        </p>
        <p className="text-lg mb-4">
          Our team of experienced physiotherapists believes in holistic care that goes beyond symptom relief. With deep expertise in manual therapy, exercise prescription, electrotherapy, and advanced rehabilitation methods, we strive to treat the root cause of your discomfort — not just the symptoms. Every treatment plan is thoughtfully tailored to empower you toward a healthier, more active lifestyle.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-3">Compassionate Care, Backed by Expertise</h3>
        <p className="text-lg mb-4">
          What truly sets Mobiphysio apart is our patient-centered approach. Our team fosters open communication, listens to your concerns, and ensures you are always an active part of your care journey. Whether you're recovering from an injury, managing chronic pain, or aiming to enhance your performance, our physiotherapists bring both clinical excellence and heartfelt care to every session.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-3">A Healing Space Designed Around You</h3>
        <p className="text-lg mb-4">
          We understand that healing requires more than just treatment — it needs the right environment. Our clinic is thoughtfully designed to be a calming, welcoming space where your physical and emotional well-being are nurtured. From the moment you walk in, you'll feel supported and reassured by a friendly team that truly cares.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-3">Your Partners in Wellness</h3>
        <p className="text-lg">
          As one of the most preferred Physiotherapy Clinics in Coimbatore, our entire team is committed to helping you move better, feel stronger, and live pain-free. We're located conveniently near the RS Puram post office — ready to welcome you on your journey to better health.
        </p>
        <p className="text-lg mt-4 font-medium italic">
          Book an appointment today and experience the Mobiphysio difference — where care is personal, professional, and always focused on you.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!px-8"
        >
          {doctors.map((doc, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-80 h-96 mx-auto group rounded-xl overflow-hidden shadow-xl transition-all duration-300">
                <Image
                  src={doc.img}
                  alt={doc.name}
                  fill
                  className="object-cover group-hover:blur-sm transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/50">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1,
                      transition: { 
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="hover-expand"
                      onClick={handleBookAppointment}
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      <Calendar size={18} className="mr-1" />
                      Book Appointment
                    </Button>
                  </motion.div>
                </div>
                <div className="absolute bottom-0 w-full text-center bg-white/80 py-2 font-medium">
                  {doc.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional: Custom navigation arrow styling */}
        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #1e40af;
            top: 35%;
            transform: scale(1.5);
          }
        `}</style>
      </div>
    </section>
  );
};

export default DoctorTeam;