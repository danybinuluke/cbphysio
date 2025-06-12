'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import YoutubeSection from '@/components/testimonials/YoutubeSection';
import GoogleReviews from '@/components/testimonials/GoogleReviews';
import Intro from '@/components/testimonials/Intro';

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Intro />
        <YoutubeSection />
        <GoogleReviews />
      </main>
      <Footer />
    </div>
  );
}
