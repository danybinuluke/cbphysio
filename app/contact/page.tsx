
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/contact/Banner';
import ContactPage from '@/components/contact/ContactSection';




export const metadata = {
  title: 'Contact Us | Mobiphysio - Best Physio Clinic in Coimbatore',
  description:
    "Contact our experts at Mobiphysio, Coimbatore's best physiotherapy clinic. Dedicated to holistic and patient-focused care.",
};


export default function contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Banner />
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
