import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'Sports Injury Rehabilitation', href: '/services/sports-injury' },
        { label: 'Manual Therapy', href: '/services/manual-therapy' },
        { label: 'Post-Surgical Rehabilitation', href: '/services/post-surgical' },
        { label: 'Chronic Pain Management', href: '/services/chronic-pain' },
        { label: 'Pediatric Physiotherapy', href: '/services/pediatric' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Testimonials', href: '/testimonials' },
        { label: 'News & Blog', href: '/news' },
        { label: 'Careers', href: '/careers' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Book Appointment', href: '/appointments' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' }
      ]
    }
  ];

  return (
    // Changed background color from bg-primary to bg-[#00A86B]
    <footer className="bg-[#3a4732] text-primary-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Logo and info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
                <div>
                   <Image
                        src="/cb1.png"
                        alt="PhysioCare Logo"
                        width={250}
                        height={250}
                        className="object-cover w-75 h-75"
                    />
                </div>
            </Link>
            
            <p className="text-primary-foreground/80 mb-6">
              Providing expert physiotherapy care and rehabilitation services to help you 
              recover, strengthen, and improve your quality of life.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chart-2 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chart-2 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chart-2 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chart-2 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="md:col-span-1">
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link href={link.href} className="text-primary-foreground/80 hover:text-chart-2 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe to our newsletter for the latest news and expert health tips.
            </p>
            
            <div className="flex gap-2">
              <Input 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="bg-chart-2 hover:bg-chart-2/90 text-white">
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/70 text-sm">
          <p>© {currentYear} Mobiphysio Healthcare Services Pvt. Ltd. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link href="/" className="hover:text-chart-2 transition-colors">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link href="/terms" className="hover:text-chart-2 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
