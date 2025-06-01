import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const serviceItems = [
  {
    id: 1,
    title: 'Sports Injury Rehabilitation',
    description: 'Specialized care for athletes and active individuals, helping you recover from injuries and return to your sport safely.',
    image: 'https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg',
    icon: '🏃‍♂️'
  },
  {
    id: 2,
    title: 'Manual Therapy',
    description: 'Hands-on techniques to manipulate joints and soft tissue to decrease pain, increase range of motion, and reduce inflammation.',
    image: 'https://images.pexels.com/photos/8436570/pexels-photo-8436570.jpeg',
    icon: '👐'
  },
  {
    id: 3,
    title: 'Post-Surgical Rehabilitation',
    description: 'Structured rehabilitation programs to help you recover effectively after surgical procedures.',
    image: 'https://images.pexels.com/photos/7088467/pexels-photo-7088467.jpeg',
    icon: '🩹'
  },
  {
    id: 4,
    title: 'Chronic Pain Management',
    description: 'Comprehensive approaches to help manage and reduce chronic pain, improving your quality of life.',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg',
    icon: '🌿'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Specialized Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of physiotherapy treatments tailored to your specific needs,
            helping you achieve optimal physical health and wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service) => (
            <div 
              key={service.id} 
              className="group bg-card rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-chart-2 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="text-chart-2 hover:text-chart-2/90 hover:bg-chart-2/10 p-0 h-auto font-medium"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-chart-2 text-chart-2 hover:bg-chart-2 hover:text-white transition-colors"
          >
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;