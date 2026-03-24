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
    image: "https://picsum.photos/seed/alex/200/200"
  },
  {
    name: "Sarah Chen",
    role: "Head of Product",
    company: "GrowthEngine",
    quote: "The semantic clustering and SEO strategy delivered results within weeks. Our organic reach has never been higher, and the quality of leads is exceptional.",
    image: "https://picsum.photos/seed/sarah/200/200"
  },
  {
    name: "Marcus Thorne",
    role: "Director of Innovation",
    company: "FinTech Global",
    quote: "A reliable partner for high-trust automation. They built a custom risk assessment engine that integrates perfectly with our legacy financial systems.",
    image: "https://picsum.photos/seed/marcus/200/200"
  },
  {
    name: "Elena Rodriguez",
    role: "Lead Data Scientist",
    company: "HealthTech Solutions",
    quote: "Precision labeling at scale. Visoma understands the nuances of medical data annotation, which has been critical for our diagnostic model accuracy.",
    image: "https://picsum.photos/seed/elena/200/200"
  },
  {
    name: "David Park",
    role: "Founder",
    company: "Nexus Labs",
    quote: "Their RAG-based chatbot implementation transformed our customer support. We've seen a 60% reduction in manual ticket resolution time.",
    image: "https://picsum.photos/seed/david/200/200"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[currentIndex];

  return (
    <section className="py-32 px-6 bg-[#0B0F0E] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-primary mb-4">Success Stories</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-gradient-gold">Global Intelligence Impact</h3>
        </div>

        <div className="relative min-h-[450px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-center space-y-12"
            >
              <div className="flex justify-center">
                <div className="relative">
                  <Quote className="w-16 h-16 text-primary/10 absolute -top-8 -left-8 -z-10" />
                  <blockquote className="text-2xl md:text-4xl lg:text-5xl font-headline font-medium leading-[1.3] max-w-4xl italic text-foreground/90">
                    "{t.quote}"
                  </blockquote>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 p-1 bg-white/5">
                  <Image 
                    src={t.image} 
                    alt={t.name}
                    fill
                    className="object-cover rounded-full"
                    data-ai-hint="professional portrait"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-2xl font-bold tracking-tight">{t.name}</h4>
                  <p className="text-sm uppercase tracking-[0.2em] text-primary font-bold">
                    {t.role} <span className="text-muted-foreground mx-2">|</span> {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentIndex === idx ? "w-8 bg-primary" : "w-2 bg-white/10"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
