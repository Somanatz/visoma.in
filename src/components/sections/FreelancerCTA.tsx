
"use client";

import { Button } from '@/components/ui/button';
import { UserPlus, Globe, Award, Banknote } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function FreelancerCTA() {
  return (
    <section className="py-24 px-6 bg-secondary/10 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="glass p-12 md:p-16 rounded-[3rem] border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
                Work Remotely. <br />
                <span className="text-gradient-gold">Earn Globally.</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Register as a freelancer to work on high-impact remote projects and earn competitive rates. 
                Join our elite network of experts and contribute to cutting-edge AI and data initiatives from anywhere.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Global remote opportunities</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Banknote className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Work on projects and earn consistently</span>
                </div>
              </div>

              <Link href="/auth">
                <Button size="lg" className="bg-primary text-primary-foreground gold-glow px-10 h-14 text-lg font-bold">
                  <UserPlus className="w-5 h-5 mr-2" />
                  Register as Freelancer
                </Button>
              </Link>
            </div>
            
            <div className="hidden lg:block relative min-h-[450px]">
              <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full -z-10" />
              
              {/* Opportunities Stack */}
              <div className="relative h-full flex items-center justify-center">
                {/* Card 1 - Main Active Opportunity */}
                <div className="absolute top-0 right-0 w-80 glass p-8 rounded-[2.5rem] border-primary/30 animate-float z-30 shadow-2xl gold-glow">
                  <div className="flex justify-between items-start mb-6">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold">
                      Active Now
                    </Badge>
                    <span className="text-sm font-bold text-primary font-mono">$95/hr</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3">Senior LLM Engineer</h4>
                  <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                    Architecting RAG pipelines for Enterprise-scale Knowledge Bases.
                  </p>
                </div>

                {/* Card 2 - Upcoming Opportunity */}
                <div className="absolute top-16 right-16 w-80 glass p-8 rounded-[2.5rem] border-white/10 opacity-60 scale-95 -z-10 animate-float [animation-delay:1.5s]">
                  <div className="flex justify-between items-start mb-6">
                    <Badge variant="outline" className="bg-white/5 text-muted-foreground border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold">
                      Upcoming
                    </Badge>
                    <span className="text-sm font-bold text-muted-foreground font-mono">$65/hr</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3">Data Scientist</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Predictive Risk Modeling for Global FinTech platforms.
                  </p>
                </div>

                {/* Card 3 - Background Opportunity */}
                <div className="absolute top-32 right-32 w-80 glass p-8 rounded-[2.5rem] border-white/5 opacity-30 scale-90 -z-20 animate-float [animation-delay:3s]">
                  <h4 className="text-xl font-bold mb-3">Legal Tech Specialist</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    AI Contract Discovery and Analysis systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
