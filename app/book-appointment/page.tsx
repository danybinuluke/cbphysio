import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AppointmentBooking from '@/components/book-appointment/date-time';
import Banner from '@/components/book-appointment/Banner';





export const metadata = {
  title: 'Book your Appointment | Mobiphysio - Best Physio Clinic in Coimbatore',
  description:
    "Book your Appointment with our experts at Mobiphysio, Coimbatore's best physiotherapy clinic. Dedicated to holistic and patient-focused care.",
};


export default function blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Banner />
        <br></br>
       <AppointmentBooking/>
      </main>
      <Footer />
    </div>
  );
}
