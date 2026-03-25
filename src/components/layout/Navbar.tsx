"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-primary/10 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10">
            <Image 
              src="/logo.png" 
              alt="Visoma Logo" 
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-110"
              priority
              unoptimized
            />
          </div>
          <span className="text-2xl font-headline font-bold tracking-wider text-foreground">
            VISOMA
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {mounted && navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link href="/contact">
          <Button 
            className="relative overflow-hidden bg-primary text-primary-foreground border-none gold-glow hidden sm:inline-flex px-8 h-11 font-bold group transition-all duration-300 rounded-full"
          >
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#e0c080] to-primary bg-[length:200%_auto] animate-gradient-shift opacity-100 group-hover:scale-110 transition-transform duration-500" />
            <span className="relative z-10">Book Consultation</span>
          </Button>
        </Link>
      </div>
    </nav>
  );
}
