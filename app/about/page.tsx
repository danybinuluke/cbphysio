
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/about/Banner';
import AboutSection from '@/components/about/AboutSection';



export const metadata = {
  title: 'About Us | Mobiphysio - Best Physio Clinic in Coimbatore',
  description:
    "Know about us and our experts at Mobiphysio, Coimbatore's best physiotherapy clinic. Dedicated to holistic and patient-focused care.",
};


export default function about() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Banner />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
