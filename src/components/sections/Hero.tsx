"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Google Lens Style Dynamic Background */}
      <div className="lens-bg">
        <div className="lens-blob blob-1" />
        <div className="lens-blob blob-2" />
        <div className="lens-blob blob-3" />
      </div>

      {/* Static Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-10" />
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
            Transforming Intelligence into Action
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold mb-8 leading-[1.1] tracking-tight">
          Build Intelligent <br />
          <span className="text-gradient-gold">AI Systems</span> for <br />
          Modern Businesses
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Visoma helps organizations build AI automation, data pipelines, 
          and scalable machine learning systems that drive real business impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent gold-glow px-8 h-14 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 px-8 h-14 text-lg">
              Explore Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}