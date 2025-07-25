import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/case-studies/Banner';
import CaseStudySingleCard from '@/components/case-studies/CaseStudyStack';



export const metadata = {
  title: 'Read our Case Study | Mobiphysio - Best Physio Clinic in Coimbatore',
  description:
    "Read the Case studies observed by our experts at Mobiphysio, Coimbatore's best physiotherapy clinic. Dedicated to holistic and patient-focused care.",
};


export default function blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Banner />
        <CaseStudySingleCard />
      </main>
      <Footer />
    </div>
  );
}
