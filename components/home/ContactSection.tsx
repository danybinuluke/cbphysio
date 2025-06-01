import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-chart-2/5 -skew-x-12 transform origin-top-right" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              We're here to answer your questions and help you schedule an appointment.
              Reach out to us through any of the methods below or fill out the form.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-chart-2/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">123 Healing Street, London, UK</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-chart-2/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+44 123 456 7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-chart-2/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">info@physiocare.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-chart-2/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Opening Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 7:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="Enter message subject" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                <Textarea id="message" placeholder="Type your message here" className="min-h-[120px]" />
              </div>
              
              <Button className="w-full bg-chart-2 hover:bg-chart-2/90 text-white">
                Send Message <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;