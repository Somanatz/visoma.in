
"use client";

import { Button } from '@/components/ui/button';
import { UserPlus, Globe, Banknote } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const opportunities = [
  {
    status: 'Active Now',
    rate: '$20/hr',
    title: 'Senior LLM Engineer',
    desc: 'Architecting RAG pipelines for Enterprise-scale Knowledge Bases.',
    color: 'border-primary/40',
    glow: 'rgba(199, 164, 90, 0.2)',
  },
  {
    status: 'Upcoming',
    rate: '$18/hr',
    title: 'Data Science Specialist',
    desc: 'Predictive Risk Modeling for Global FinTech platforms.',
    color: 'border-blue-400/40',
    glow: 'rgba(96, 165, 250, 0.2)',
  },
  {
    status: 'High Demand',
    rate: '$19/hr',
    title: 'Legal Tech Consultant',
    desc: 'Automating Discovery and Analysis for specialized law firms.',
    color: 'border-purple-400/40',
    glow: 'rgba(192, 132, 252, 0.2)',
  },
  {
    status: 'New Role',
    rate: '$17/hr',
    title: 'SEO Growth Strategist',
    desc: 'Optimizing semantic content clusters for AI-driven search.',
    color: 'border-orange-400/40',
    glow: 'rgba(251, 146, 60, 0.2)',
  },
  {
    status: 'Active Now',
    rate: '$15/hr',
    title: 'Data Annotation Expert',
    desc: 'Precision labeling for medical imagery and NLP training sets.',
    color: 'border-emerald-400/40',
    glow: 'rgba(52, 211, 153, 0.2)',
  },
  {
    status: 'Upcoming',
    rate: '$20/hr',
    title: 'Financial Intelligence Analyst',
    desc: 'Building automated portfolio auditing systems for modern assets.',
    color: 'border-cyan-400/40',
    glow: 'rgba(34, 211, 238, 0.2)',
  }
];

export default function FreelancerCTA() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % opportunities.length);
    }, 3000); // Increased transition interval to 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 bg-secondary/10 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="glass p-12 md:p-20 rounded-[3rem] border-primary/20 relative overflow-hidden">
          {/* Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8">
                Work Remotely. <br />
                <span className="text-gradient-gold">Earn Globally.</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                Join our network of experts to work on high-impact remote projects and earn competitive rates. 
                Partner with us to architect the future of intelligence.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg font-bold">Global Remote Opportunities</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Banknote className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg font-bold">Consistent High-Value Payouts</span>
                </div>
              </div>

              <Link href="https://forms.gle/m4WZn8wdb1X3XuMZ8" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary text-primary-foreground gold-glow px-12 h-16 text-xl font-bold rounded-2xl">
                  <UserPlus className="w-6 h-6 mr-3" />
                  Join Our Talent Network
                </Button>
              </Link>
            </div>
            
            <div className="relative h-[220px] md:h-[260px] flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] h-full">
                <AnimatePresence mode="wait">
                  {opportunities.map((opp, i) => {
                    const isActive = i === index;
                    
                    if (!isActive) return null;

                    return (
                      <motion.div
                        key={opp.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className={cn(
                          "absolute inset-0 p-6 rounded-[2rem] border shadow-xl flex flex-col justify-between overflow-hidden",
                          "bg-white/95 bg-gradient-to-br from-white via-primary/5 to-white/95 animate-gradient-shift",
                          opp.color
                        )}
                        style={{
                          boxShadow: `0 15px 30px -10px ${opp.glow}`
                        }}
                      >
                        {/* Subtle Card Background Pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,164,90,0.05),transparent)] pointer-events-none" />
                        
                        <div className="flex justify-between items-start relative z-10">
                          <Badge className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-black border-primary/20">
                            {opp.status}
                          </Badge>
                          <span className="text-xl font-bold font-mono text-primary">
                            {opp.rate}
                          </span>
                        </div>
                        
                        <div className="relative z-10">
                          <h4 className="text-xl font-bold mb-2 tracking-tight text-foreground">
                            {opp.title}
                          </h4>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {opp.desc}
                          </p>
                        </div>

                        {/* Visual flourish: animated accent line */}
                        <div className="absolute bottom-0 left-0 h-1 bg-primary/20 w-full origin-left" />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
