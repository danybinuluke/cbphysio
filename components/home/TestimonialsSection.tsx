import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "After months of back pain, the team at PhysioCare completely transformed my quality of life. Their personalized approach and expertise made all the difference.",
    author: "Sarah Thompson",
    title: "Marathon Runner"
  },
  {
    id: 2,
    quote: "Following my knee surgery, I was concerned about recovery. The rehabilitation program they designed for me was exceptional, and I'm now back to playing tennis pain-free.",
    author: "David Chen",
    title: "Tennis Player"
  },
  {
    id: 3,
    quote: "As someone who suffers from chronic shoulder pain, finding the right treatment has been life-changing. The team's knowledge and care are truly outstanding.",
    author: "Emma Roberts",
    title: "Office Professional"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-chart-3 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Patients Say</h2>
          <p className="text-white/80">
            Don't just take our word for it. Hear from our patients about their experiences
            and the difference our physiotherapy care has made in their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 relative hover:bg-white/15 transition-colors duration-300"
            >
              <Quote className="text-chart-2 mb-4 h-8 w-8" />
              
              <p className="mb-6 text-white/90 italic relative z-10">
                "{testimonial.quote}"
              </p>
              
              <Separator className="bg-white/20 mb-6" />
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-chart-2 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.split(' ').map(name => name[0]).join('')}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-white/70 text-sm">{testimonial.title}</p>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-xl bg-white/5" />
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Qualified Specialists", value: "15+" },
            { label: "Years of Experience", value: "20+" },
            { label: "Satisfied Patients", value: "10,000+" },
            { label: "Success Rate", value: "95%" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-chart-2 mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;