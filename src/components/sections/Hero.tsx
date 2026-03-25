
"use client";

import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showEmoji, setShowEmoji] = useState(false);
  const [showServicesEmoji, setShowServicesEmoji] = useState(false);

  const words = useMemo(() => ['Modern Businesses', 'Startups', 'Individuals'], []);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentWord) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, typingSpeed, words]);

  const handleButtonClick = () => {
    setShowEmoji(true);
    setTimeout(() => setShowEmoji(false), 1500);
  };

  const handleServicesButtonClick = () => {
    setShowServicesEmoji(true);
    setTimeout(() => setShowServicesEmoji(false), 1500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      <div className="lens-bg">
        <div className="lens-blob blob-1" />
        <div className="lens-blob blob-2" />
        <div className="lens-blob blob-3" />
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-10" />
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 glossy-badge px-5 py-2.5 rounded-full mb-10 animate-float">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
            Transforming Intelligence into Action
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold mb-8 leading-[1.1] tracking-tight min-h-[3.3em] md:min-h-[auto]">
          Build Intelligent <br />
          <span className="text-gradient-gold">AI Systems</span> for <br />
          <span className="text-gradient-gold relative">
            {displayText}
            <span className="inline-block w-[4px] h-[0.8em] bg-foreground ml-2 animate-pulse align-middle" />
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Visoma helps organizations build AI automation, data pipelines, 
          and scalable machine learning systems that drive real business impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 relative">
          <Link href="/contact" onClick={handleButtonClick}>
            <div className="relative p-[2px] rounded-xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-[#e0c080]/40 to-primary/40 bg-[length:200%_auto] animate-gradient-shift group-hover:from-primary group-hover:via-[#e0c080] group-hover:to-primary" />
              
              <div className="relative px-10 h-14 bg-background rounded-[calc(var(--radius)-2px)] flex items-center justify-center z-10 transition-colors group-hover:bg-background/95 overflow-hidden">
                <span className="relative z-30 flex items-center font-bold text-foreground text-lg">
                  Start Your Project
                  <div className="relative flex items-center justify-center ml-2 w-6 h-6">
                    <AnimatePresence mode="wait">
                      {showEmoji ? (
                        <motion.span
                          key="emoji"
                          initial={{ y: 20, opacity: 0, scale: 0.5 }}
                          animate={{ y: 0, opacity: 1, scale: 1.2 }}
                          exit={{ y: -20, opacity: 0, scale: 0.5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="absolute"
                        >
                          🚀
                        </motion.span>
                      ) : (
                        <motion.span
                          key="arrow"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="absolute"
                        >
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </span>
                <div className="absolute top-0 -left-[100%] w-full h-full z-20 block transform -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shine" />
              </div>
            </div>
          </Link>

          <Link href="/services" onClick={handleServicesButtonClick}>
            <div className="relative p-[2px] rounded-xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-[#e0c080]/40 to-primary/40 bg-[length:200%_auto] animate-gradient-shift group-hover:from-primary group-hover:via-[#e0c080] group-hover:to-primary" />
              
              <div className="relative px-10 h-14 bg-background rounded-[calc(var(--radius)-2px)] flex items-center justify-center z-10 transition-colors group-hover:bg-background/95 overflow-hidden">
                <span className="relative z-30 flex items-center font-bold text-foreground text-lg">
                  Explore Services
                  <div className="relative flex items-center justify-center ml-2 w-6 h-6">
                    <AnimatePresence mode="wait">
                      {showServicesEmoji ? (
                        <motion.span
                          key="emoji"
                          initial={{ y: 20, opacity: 0, scale: 0.5 }}
                          animate={{ y: 0, opacity: 1, scale: 1.2 }}
                          exit={{ y: -20, opacity: 0, scale: 0.5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="absolute"
                        >
                          🛠️
                        </motion.span>
                      ) : (
                        <motion.span
                          key="arrow"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="absolute"
                        >
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </span>
                <div className="absolute top-0 -left-[100%] w-full h-full z-20 block transform -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shine" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
