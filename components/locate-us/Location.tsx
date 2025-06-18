'use client';

import React from 'react';
import { Phone, Mail, CalendarDays, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocateUsPage = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 px-4 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 font-serif">
          Locate Us
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Visit any of our branches at your convenience. Our clinics are equipped with advanced physiotherapy setups and experienced professionals to help you recover better and faster.
        </p>
      </div>

      {/* R S Puram Location */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">R S Puram</h2>
          <p className="text-gray-700 mb-2">No.79 1st Floor, West Venkataswamy Road,<br />R S Puram, Coimbatore - 641 002,<br />Tamil Nadu, India</p>
          <p className="text-gray-700 flex items-center gap-2"><Phone className="w-4 h-4" /> +91 99402 14563</p>
          <p className="text-gray-700 flex items-center gap-2"><Mail className="w-4 h-4" /> vandana@mobiphysio.in</p>
          <p className="text-sm text-gray-600 mt-4">Opening Hours: Mon - Sat: 08:00 AM - 08:00 PM<br />Sun: Closed</p>

          <div className="mt-6 flex flex-wrap gap-4">
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
        </div>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=Mobiphysio%20R%20S%20Puram%20Coimbatore&t=&z=17&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Goldwins Location */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Goldwins</h2>
          <p className="text-gray-700 mb-2">11/23, Avinashi Rd, Goldwins, Civil Aerodrome Post,<br />Karuparampalayam Pirvu, Coimbatore - 641 014,<br />Tamil Nadu, India</p>
          <p className="text-gray-700 flex items-center gap-2"><Phone className="w-4 h-4" /> +91 79913 28565</p>
          <p className="text-gray-700 flex items-center gap-2"><Mail className="w-4 h-4" /> mobiphysio@gmail.com</p>
          <p className="text-sm text-gray-600 mt-4">Opening Hours: Mon - Sat: 08:00 AM - 08:00 PM<br />Sun: Closed</p>

          <div className="mt-6 flex flex-wrap gap-4">
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
        </div>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=Mobiphysio%20Goldwins%20Coimbatore&t=&z=17&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mapouter {
          position: relative;
          text-align: right;
          width: 100%;
          height: 400px;
        }
        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          width: 100%;
          height: 400px;
        }
        .gmap_iframe {
          height: 400px !important;
        }
      `}</style>
    </section>
  );
};

export default LocateUsPage;
