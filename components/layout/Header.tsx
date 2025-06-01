'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Calendar, MapIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' 
        : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
        <div className="relative">
          {/* Replace with your actual logo using next/image */}
          <Image
            src="/cb.png" // Path to your logo in the public folder
            alt="CB Physiotherapy Logo"    // Essential for accessibility and SEO
            width={200}               // Specify the intrinsic width of the image
            height={60}              // Specify the intrinsic height of the image
            priority                 // Optional: loads the image eagerly (good for LCP logos)
          />
        </div>
      </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className={cn(
                  "text-sm font-medium hover:text-chart-2 transition-colors",
                  scrolled ? "text-primary" : "text-white"
                )}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="tel:+441234567890" className={cn(
            "flex items-center space-x-2 text-sm font-medium",
            scrolled ? "text-primary" : "text-white"
          )}>
            <Phone size={16} />
            <span>+44 123 456 7890</span>
          </Link>
          <Button className="bg-chart-2 hover:bg-chart-2/90 text-white">
            <MapIcon className="mr-2 h-4 w-4" /> Locate Us
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 rounded-md"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={cn("h-6 w-6", scrolled ? "text-primary" : "text-white")} />
          ) : (
            <Menu className={cn("h-6 w-6", scrolled ? "text-primary" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden",
        isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
      )}>
        <ul className="flex flex-col py-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href} 
                className="block px-6 py-3 text-primary hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="px-6 py-4">
            <Button className="h-75 w-75 text-black">
                {/* Add mr-2 to MapIcon to create space between the icon and the text */}
              <MapIcon className='mr-2'/> Locate Us
            </Button>
          </li>
          <li className="px-6 py-3">
            <Link href="tel:+441234567890" className="flex items-center space-x-2 text-primary">
              <Phone size={16} />
              <span>+44 123 456 7890</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;