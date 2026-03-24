
"use client";

import { Button } from '@/components/ui/button';
import { UserPlus, Globe, Banknote } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const opportunities = [
  {
    status: 'Active Now',
    rate: '$95/hr',
    title: 'Senior LLM Engineer',
    desc: 'Architecting RAG pipelines for Enterprise-scale Knowledge Bases.',
    color: 'border-primary/40',
    glow: 'rgba(199, 164, 90, 0.3)',
  },
  {
    status: 'Upcoming',
    rate: '$65/hr',
    title: 'Data Scientist',
    desc: 'Predictive Risk Modeling for Global FinTech platforms.',
    color: 'border-blue-400/40',
    glow: 'rgba(96, 165, 250, 0.3)',
  },
  {
    status: 'High Demand',
    rate: '$80/hr',
    title: 'Legal Tech Expert',
    desc: 'Automating Discovery and Analysis for specialized law firms.',
    color: 'border-purple-400/40',
    glow: 'rgba(192, 132, 252, 0.3)',
  }
];

export default function FreelancerCTA() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % opportunities.length);
    }, 4500);
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
                Register as a freelancer to work on high-impact remote projects and earn competitive rates. 
                Join our elite network of experts and architect the future of intelligence.
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
                  <span className="text-lg font-bold">High-Value Consistent Payouts</span>
                </div>
              </div>

              <Link href="/auth">
                <Button size="lg" className="bg-primary text-primary-foreground gold-glow px-12 h-16 text-xl font-bold rounded-2xl">
                  <UserPlus className="w-6 h-6 mr-3" />
                  Enter Talent Portal
                </Button>
              </Link>
            </div>
            
            <div className="relative h-[450px] flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] h-[260px]">
                <AnimatePresence mode="popLayout">
                  {opportunities.map((opp, i) => {
                    const isActive = i === index;
                    const isNext = i === (index + 1) % opportunities.length;
                    
                    if (!isActive && !isNext) return null;

                    return (
                      <motion.div
                        key={opp.title}
                        initial={{ opacity: 0, scale: 0.8, x: 100, rotateY: 20 }}
                        animate={{ 
                          opacity: isActive ? 1 : 0.4, 
                          scale: isActive ? 1 : 0.9,
                          x: isActive ? 0 : 30,
                          y: isActive ? 0 : 40,
                          rotateY: isActive ? 0 : 15,
                          zIndex: isActive ? 30 : 10,
                        }}
                        exit={{ opacity: 0, scale: 0.8, x: -100, rotateY: -20 }}
                        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                        className={`absolute inset-0 glass p-10 rounded-[2.5rem] border ${opp.color} shadow-2xl flex flex-col justify-between overflow-hidden`}
                        style={{
                          boxShadow: isActive ? `0 20px 50px -10px ${opp.glow}` : 'none'
                        }}
                      >
                        {/* Subtle Card Background Pattern */}
                        <div className="absolute inset-0 bg-white/[0.02] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
                        
                        <div className="flex justify-between items-start relative z-10">
                          <Badge className={`${isActive ? 'bg-primary text-primary-foreground' : 'bg-white/10 text-muted-foreground'} px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-black border-none`}>
                            {opp.status}
                          </Badge>
                          <span className="text-2xl font-bold text-primary font-mono tracking-tight">{opp.rate}</span>
                        </div>
                        
                        <div className="relative z-10">
                          <h4 className="text-3xl font-bold mb-4 tracking-tight">{opp.title}</h4>
                          <p className="text-base text-muted-foreground leading-relaxed font-medium">
                            {opp.desc}
                          </p>
                        </div>
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
