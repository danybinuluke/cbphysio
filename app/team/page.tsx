import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DoctorTeam from '@/components/team/DoctorTeam';
import HeroSection from '@/components/team/HeroSection';

export const metadata = {
  title: 'Meet Our Team | Mobiphysio - Best Physio Clinic in Coimbatore',
  description:
    "Meet the expert physiotherapists at Mobiphysio, Coimbatore's best physiotherapy clinic. Dedicated to holistic and patient-focused care.",
};

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <DoctorTeam />
      </main>
      <Footer />
    </div>
  );
}
