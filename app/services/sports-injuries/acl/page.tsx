import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/services/sports-injuries/acl/Banner';
import ACLInjuryPage from '@/components/services/sports-injuries/acl/ACLPainPage';


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
        <ACLInjuryPage />
      </main>
      <Footer />
    </div>
  );
}
