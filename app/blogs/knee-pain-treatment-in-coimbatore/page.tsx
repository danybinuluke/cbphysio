
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/blogs/knee-pain-treatment-in-coimbatore/Banner';
import KneePainBlog from '@/components/blogs/knee-pain-treatment-in-coimbatore/Blog';




export const metadata = {
  title: 'Knee Pain Treatment in Coimbatore | Mobiphysio - Best Physio Clinic in Coimbatore',
  description:
    "Read the Blogs crafted by our experts at Mobiphysio, Coimbatore's best physiotherapy clinic. Dedicated to holistic and patient-focused care.",
};


export default function blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Banner />
        <KneePainBlog />
      </main>
      <Footer />
    </div>
  );
}
