import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/services/sports-injuries/ankle-sprain/Banner';
import AnkleSprainPage from '@/components/services/sports-injuries/ankle-sprain/AnkleSprainPage';


export const metadata = {
  title: 'Explore our different services | Mobiphysio - Best Physio Clinic in Coimbatore',
  description:
    "Explore the services offered by our experts at Mobiphysio, Coimbatore's best physiotherapy clinic. Dedicated to holistic and patient-focused care.",
};

export default function services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Banner />
        <br></br>
        <AnkleSprainPage />
      </main>
      <Footer />
    </div>
  );
}
