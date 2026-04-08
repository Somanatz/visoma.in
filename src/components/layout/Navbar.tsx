
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-4 sm:py-6",
          isScrolled ? "bg-background/90 backdrop-blur-md border-b border-primary/10 py-3 sm:py-4" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="relative h-8 w-8 sm:h-10 sm:w-10">
              <Image
                src="/logo.png"
                alt="Visoma Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                priority
                unoptimized
              />
            </div>
            <span className="text-xl sm:text-2xl font-headline font-bold tracking-wider text-foreground">
              VISOMA
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-x-2">
            {mounted && navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-full transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link href="/contact" className="shrink-0">
              <Button
                className="relative overflow-hidden bg-primary text-[#0B0F0E] border-none gold-glow hidden sm:inline-flex px-6 sm:px-8 h-10 sm:h-11 font-bold group transition-all duration-300 rounded-full text-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#e0c080] to-primary bg-[length:200%_auto] animate-gradient-shift opacity-100 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-0 -left-[100%] w-full h-full z-20 block transform -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shine" />
                <span className="relative z-10">Contact Us</span>
              </Button>
            </Link>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8 transition-all duration-300 md:hidden",
          mobileOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-bold text-foreground hover:text-primary px-4 py-3 rounded-xl hover:bg-primary/5 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/contact" onClick={() => setMobileOpen(false)}>
            <Button
              className="relative overflow-hidden w-full bg-primary text-[#0B0F0E] border-none gold-glow h-12 font-bold group transition-all duration-300 rounded-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#e0c080] to-primary bg-[length:200%_auto] animate-gradient-shift opacity-100 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-0 -left-[100%] w-full h-full z-20 block transform -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shine" />
              <span className="relative z-10">Book Consultation</span>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
