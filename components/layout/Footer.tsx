import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

// Custom X (Twitter) Icon as SVG
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.185 3H23L15.385 10.79L24 21H16.635L10.98 14.185L4.5 21H1.5L9.645 12.675L1.5 3H9L14.175 9.225L20.185 3ZM18.57 19.5H20.565L7.02 4.35H4.905L18.57 19.5Z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'Lifestyle Management', href: '/services/lifestyle-management' },
        { label: 'Pain Management', href: '/services/pain-management' },
        { label: 'Sports Injuries', href: '/services/sports-injuries' },
        { label: 'Cryotherapy', href: '/services/cryotherapy' },
        { label: 'Women Wellness', href: '/services/women-wellness' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Testimonials', href: '/testimonials' },
        { label: 'Blogs', href: '/blogs' },
        { label: 'Case Studies', href: '/case-studies' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Book Appointment', href: '/book-appointment' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  return (
    <footer className="bg-[#3a4732] text-primary-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Logo and Info */}
          <div className="md:col-span-2"> {/* Removed flex and items-start to keep original layout for words */}
            <Link href="/" className="flex items-center space-x-2 mb-6"> {/* Reverted to original spacing for link */}
              <div>
                <Image
                  src="/cb3.png" // Your Mobiphysio logo path
                  alt="Mobiphysio Logo"
                  width={400} // Increased width significantly to make it bigger
                  height={140} // Increased height to maintain aspect ratio and make it bigger
                  className="object-contain" // Ensures the whole image is visible within the dimensions
                />
              </div>
            </Link>

            <p className="text-primary-foreground/80 mb-6"> {/* Reverted text size and line height */}
              Mobiphysio is a modern Physiotherapy Clinic in Coimbatore, situated near the iconic landmark at RS Puram.
              Dr. T.R. Vandana, PT., Founder and Senior Physiotherapist, provides recovery-driven Physio Treatment with the
              assistance of a team of specialized Physical Therapists.
            </p>

            <div className="flex space-x-4"> {/* Reverted social icon spacing and size */}
              <a
                href="https://www.facebook.com/mobiphysioindia"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chart-2 transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com/PhysioMobi"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chart-2 transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                <XIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/mobiphysio/"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chart-2 transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/mobiphysio-physiotherapy/about/?viewAsMember=true"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chart-2 transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.youtube.com/@mobiphysio"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chart-2 transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                <Youtube size={18} />
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
            <Link href="/" className="hover:text-chart-2 transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms" className="hover:text-chart-2 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;