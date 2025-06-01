import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Twitter, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Lead Physiotherapist',
    bio: 'With over 15 years of experience, Dr. Johnson specializes in sports injury rehabilitation and post-surgical recovery.',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg',
    specialties: ['Sports Rehabilitation', 'Manual Therapy']
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    role: 'Senior Physiotherapist',
    bio: 'Dr. Chen has extensive expertise in treating chronic pain conditions and implementing effective pain management strategies.',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
    specialties: ['Chronic Pain', 'Neurological Rehabilitation']
  },
  {
    id: 3,
    name: 'Dr. Emma Williams',
    role: 'Physiotherapist',
    bio: 'Specializing in pediatric physiotherapy, Dr. Williams works with children of all ages to improve mobility and function.',
    image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg',
    specialties: ['Pediatric Care', 'Vestibular Rehabilitation']
  },
  {
    id: 4,
    name: 'Dr. James Taylor',
    role: 'Physiotherapist',
    bio: 'Dr. Taylor focuses on geriatric care and helping older adults maintain mobility, balance, and quality of life.',
    image: 'https://images.pexels.com/photos/5207266/pexels-photo-5207266.jpeg',
    specialties: ['Geriatric Care', 'Balance Training']
  }
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Specialist Team</h2>
            <p className="text-muted-foreground">
              Our team of highly qualified physiotherapists brings years of specialized 
              experience and a commitment to delivering exceptional care to every patient.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-6 md:mt-0 border-chart-2 text-chart-2 hover:bg-chart-2 hover:text-white"
          >
            View All Team Members <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="group bg-card rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-center space-x-3">
                    <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Twitter size={16} className="text-white" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Linkedin size={16} className="text-white" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Mail size={16} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-chart-2 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs py-1 px-2 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;