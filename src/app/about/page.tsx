
"use client";

import { useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const firestore = useFirestore();
  const companyDocRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return doc(firestore, 'companyInfo', 'visoma');
  }, [firestore]);

  const { data: info, isLoading } = useDoc(companyDocRef);

  // Default fallback if Firestore is empty
  const defaultInfo = {
    missionStatement: "To empower organizations by building the most reliable and intelligent AI infrastructure in the world.",
    visionStatement: "A future where human potential is amplified by seamless, high-trust automated systems.",
    whyVisomaDescription: "Visoma combines deep technical expertise with a minimal, performance-first approach to solve the toughest data and automation challenges.",
    expertiseHighlights: ["Generative AI Pipelines", "Web Development", "Data Annotation", "Enterprise Automation", "Finance & Trading", "Legal Tech & Support", "SEO & Content Creation", "Google & Meta Ads"]
  };

  const displayInfo = info || defaultInfo;

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24 items-center mb-16 sm:mb-32">
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-headline font-bold mb-6 sm:mb-8">Architecting <br /> <span className="text-gradient-gold">Intelligence</span></h1>
            <div className="space-y-8">
              <section>
                <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">Our Mission</h3>
                <p className="text-2xl font-headline leading-relaxed">
                  {displayInfo.missionStatement}
                </p>
              </section>
              <section>
                <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">Our Vision</h3>
                <p className="text-sm sm:text-base md:text-xl text-muted-foreground leading-normal sm:leading-relaxed">
                  {displayInfo.visionStatement}
                </p>
              </section>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10" />
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/services/about.png"
                alt="Visoma Office"
                width={800}
                height={800}
                className="object-cover"
                data-ai-hint="futuristic office"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 glass p-6 sm:p-12 rounded-2xl sm:rounded-[3rem]">
            <h3 className="text-3xl font-headline font-bold mb-6">Why Visoma?</h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-normal sm:leading-relaxed mb-8">
              {displayInfo.whyVisomaDescription}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {displayInfo.expertiseHighlights?.map((highlight: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-bold">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass p-6 sm:p-12 rounded-2xl sm:rounded-[3rem] flex flex-col justify-center text-center">
            <div className="text-5xl font-headline font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm uppercase tracking-widest text-muted-foreground">Pipeline Uptime</div>
            <div className="mt-8 text-5xl font-headline font-bold text-primary mb-2">10M+</div>
            <div className="text-sm uppercase tracking-widest text-muted-foreground">Data Points Labeled</div>
          </div>
        </div>
      </div>
    </div>
  );
}
