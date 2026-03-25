"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CTO",
    company: "AI Startup",
    quote: "Visoma helped us scale our AI data pipeline and build reliable datasets that reduced our training cycles by 40%. Their technical expertise is unmatched.",
    image: "https://picsum.photos/seed/alex/400/400"
  },
  {
    name: "Sarah Chen",
    role: "Head of Product",
    company: "GrowthEngine",
    quote: "The semantic clustering and SEO strategy delivered results within weeks. Our organic reach has never been higher, and the quality of leads is exceptional.",
    image: "https://picsum.photos/seed/sarah/400/400"
  },
  {
    name: "Marcus Thorne",
    role: "Director of Innovation",
    company: "FinTech Global",
    quote: "A reliable partner for high-trust automation. They built a custom risk assessment engine that integrates perfectly with our legacy financial systems.",
    image: "https://picsum.photos/seed/marcus/400/400"
  },
  {
    name: "Elena Rodriguez",
    role: "Lead Data Scientist",
    company: "HealthTech Solutions",
    quote: "Precision labeling at scale. Visoma understands the nuances of medical data annotation, which has been critical for our diagnostic model accuracy.",
    image: "https://picsum.photos/seed/elena/400/400"
  },
  {
    name: "David Park",
    role: "Founder",
    company: "Nexus Labs",
    quote: "Their RAG-based chatbot implementation transformed our customer support. We've seen a 60% reduction in manual ticket resolution time.",
    image: "https://picsum.photos/seed/david/400/400"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[currentIndex];

  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-primary mb-4">Success Stories</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-gradient-gold py-2 leading-tight">
            Global Intelligence Impact
          </h3>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex flex-col md:flex-row items-start gap-12 md:gap-20"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-[2.5rem] overflow-hidden border-2 border-primary/20 p-1.5 bg-white shadow-xl gold-glow shrink-0">
                <Image 
                  src={t.image} 
                  alt={t.name}
                  fill
                  className="object-cover rounded-[2rem]"
                  data-ai-hint="professional portrait"
                />
              </div>

              <div className="flex-1 pt-4 space-y-8 relative">
                <Quote className="w-16 h-16 text-primary/10 absolute -top-12 -left-8 -z-10" />
                
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-headline font-medium leading-[1.4] italic text-foreground/90">
                  "{t.quote}"
                </blockquote>

                <div className="space-y-3">
                  <h4 className="text-3xl font-bold tracking-tight text-foreground">{t.name}</h4>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-primary/50" />
                    <p className="text-sm uppercase tracking-[0.3em] text-primary font-bold">
                      {t.role} <span className="text-muted-foreground/40 mx-2">|</span> {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-start md:justify-end gap-3 mt-16">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-700 rounded-full ${
                currentIndex === idx ? "w-12 bg-primary shadow-[0_0_10px_rgba(199,164,90,0.3)]" : "w-3 bg-primary/20"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
