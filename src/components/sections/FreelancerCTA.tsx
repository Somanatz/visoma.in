
"use client";

import { Button } from '@/components/ui/button';
import { UserPlus, Globe, DollarSign } from 'lucide-react';
import Link from 'next/link';

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
                Register as a freelancer to work on high-impact remote projects. 
                Join our elite network of experts and start earning by contributing to cutting-edge AI and data initiatives.
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
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Competitive industry rates</span>
                </div>
              </div>

              <Link href="/auth">
                <Button size="lg" className="bg-primary text-primary-foreground gold-glow px-10 h-14 text-lg font-bold">
                  <UserPlus className="w-5 h-5 mr-2" />
                  Register as Freelancer
                </Button>
              </Link>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full" />
                <div className="glass p-8 rounded-3xl border-primary/30 relative animate-float">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/10" />
                    <div>
                      <div className="h-4 w-32 bg-white/10 rounded mb-2" />
                      <div className="h-3 w-20 bg-white/5 rounded" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 w-full bg-white/5 rounded" />
                    <div className="h-4 w-[90%] bg-white/5 rounded" />
                    <div className="h-4 w-[75%] bg-white/5 rounded" />
                  </div>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="h-8 w-24 bg-primary/20 rounded-full" />
                    <div className="text-primary font-bold">$120/hr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
