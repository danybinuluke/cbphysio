import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/case-studies/diastasis-recti-abdomen/Banner';

import DiastasisRectiCaseStudy from '@/components/case-studies/diastasis-recti-abdomen/DiastasisRectiPage';




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
        <br />
        <DiastasisRectiCaseStudy/>
      </main>
      <Footer />
    </div>
  );
}
