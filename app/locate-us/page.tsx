
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/locate-us/Banner';
import LocateUs from '@/components/locate-us/Location';





export const metadata = {
  title: 'Locate Us | Mobiphysio - Best Physio Clinic in Coimbatore',
  description:
    "Locate us and reach our experts at Mobiphysio, Coimbatore's best physiotherapy clinic. Dedicated to holistic and patient-focused care.",
};


export default function contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Banner />
        <LocateUs />
      </main>
      <Footer />
    </div>
  );
}
