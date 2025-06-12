'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const GoogleReviews = () => {
  useEffect(() => {
    if (document.getElementById('shapo-embed-js')) return;

    const script = document.createElement('script');
    script.src = 'https://cdn.shapo.io/js/embed.js';
    script.defer = true;
    script.id = 'shapo-embed-js';
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Patient Reviews
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See what our patients say about their experience
          </p>
        </div>

        {/* Shapo Widget */}
        <div id="shapo-widget-25cd6a3d3a3aa6a9434e" />

        {/* Leave a Review Button */}
        <div className="text-center mt-12">
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJnT9rSBlZqDsRp_EBzZ1W6Mo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 inline-flex items-center"
          >
            Leave a Review
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </a>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Want to visit us?
          </h3>
          <Button
            variant="hover-expand"
            onClick={() => window.location.href = '/book-appointment'}
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
