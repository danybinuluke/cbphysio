'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, MapIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import GooeyNav from '@/components/ui/GooeyNav';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const textColorClass = scrolled ? 'text-black' : 'text-white';
  const iconColorClass = scrolled ? 'text-black' : 'text-white';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/cb2.png"
            alt="CB Physiotherapy Logo"
            width={160}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop GooeyNav - visible from lg and up */}
        <div className="hidden lg:block">
          <GooeyNav 
            items={menuItems} 
            scrolled={scrolled} 
            currentPath={pathname}
          />
        </div>

        {/* Desktop Locate Us Button - visible from lg and up */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href='/locate-us'>
          <Button className={cn('bg-transparent hover:bg-chart-2/90', textColorClass)}>
            <MapIcon className={cn('mr-2 h-4 w-4', iconColorClass)} /> Locate Us
          </Button>
          </a>
        </div>

        {/* Mobile menu toggle - visible below lg */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={cn('h-6 w-6', iconColorClass)} />
          ) : (
            <Menu className={cn('h-6 w-6', iconColorClass)} />
          )}
        </button>
      </div>

      {/* Mobile dropdown menu - visible below lg */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden',
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="flex flex-col py-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  "block px-6 py-3 transition-colors",
                  pathname === item.href 
                    ? "text-chart-2 bg-gray-100 font-medium"
                    : "text-black hover:bg-gray-100"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="px-6 py-4">
            <a href='/locate-us'>
            <Button className="w-full text-black bg-gray-200 hover:bg-chart-2/90">
              <MapIcon className="mr-2" /> Locate Us
            </Button>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
