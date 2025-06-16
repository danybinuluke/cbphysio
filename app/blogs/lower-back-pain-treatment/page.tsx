
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/blogs/lower-back-pain-treatment/Banner';
import Blog from '@/components/blogs/lower-back-pain-treatment/Blog';



export const metadata = {
  title: 'Lower Back pain Treatment | Mobiphysio - Best Physio Clinic in Coimbatore',
  description:
    "Read the Blogs crafted by our experts at Mobiphysio, Coimbatore's best physiotherapy clinic. Dedicated to holistic and patient-focused care.",
};


export default function blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Banner />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
