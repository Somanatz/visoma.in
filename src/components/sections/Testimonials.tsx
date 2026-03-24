"use client";

import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CTO",
    company: "AI Startup",
    quote: "Visoma helped us scale our AI data pipeline and build reliable datasets that reduced our training cycles by 40%. Their technical expertise is unmatched.",
    image: "https://picsum.photos/seed/alex/100/100"
  },
  {
    name: "Sarah Chen",
    role: "Head of Product",
    company: "GrowthEngine",
    quote: "The semantic clustering and SEO strategy delivered results within weeks. Our organic reach has never been higher, and the quality of leads is exceptional.",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Marcus Thorne",
    role: "Director of Innovation",
    company: "FinTech Global",
    quote: "A reliable partner for high-trust automation. They built a custom risk assessment engine that integrates perfectly with our legacy financial systems.",
    image: "https://picsum.photos/seed/marcus/100/100"
  },
  {
    name: "Elena Rodriguez",
    role: "Lead Data Scientist",
    company: "HealthTech Solutions",
    quote: "Precision labeling at scale. Visoma understands the nuances of medical data annotation, which has been critical for our diagnostic model accuracy.",
    image: "https://picsum.photos/seed/elena/100/100"
  },
  {
    name: "David Park",
    role: "Founder",
    company: "Nexus Labs",
    quote: "Their RAG-based chatbot implementation transformed our customer support. We've seen a 60% reduction in manual ticket resolution time.",
    image: "https://picsum.photos/seed/david/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">Success Stories</h2>
          <h3 className="text-4xl font-headline font-bold text-gradient-gold">Global Intelligence Impact</h3>
        </div>

        <div className="relative overflow-hidden w-full">
          <div className="flex w-fit gap-8 animate-infinite-scroll hover:[animation-play-state:paused] transition-all duration-300">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div 
                key={idx}
                className="flex-shrink-0 w-[400px] glass p-10 rounded-[2.5rem] border-white/5 relative group hover:border-primary/30 transition-all duration-500"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-8 right-8 group-hover:text-primary/40 transition-colors" />
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 p-1">
                    <Image 
                      src={t.image} 
                      alt={t.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">{t.name}</h4>
                    <p className="text-xs uppercase tracking-widest text-primary font-bold mt-1">{t.role}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.company}</p>
                  </div>
                </div>

                <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                  "{t.quote}"
                </blockquote>
              </div>
            ))}
          </div>
          
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
