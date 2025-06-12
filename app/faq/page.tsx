'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/faq/Banner';
import Faq from '@/components/faq/faq';


export default function faq() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Banner />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
