
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/blogs/Banner';
import BlogTitle from '@/components/blogs/BlogTitle';


export const metadata = {
  title: 'Read our Blogs | Mobiphysio - Best Physio Clinic in Coimbatore',
  description:
    "Read the Blogs crafted by our experts at Mobiphysio, Coimbatore's best physiotherapy clinic. Dedicated to holistic and patient-focused care.",
};


export default function blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Banner />
        <BlogTitle />
      </main>
      <Footer />
    </div>
  );
}
