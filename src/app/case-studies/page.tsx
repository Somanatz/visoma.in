"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Image as ImageIcon, Globe, Target, Workflow, ChevronRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'AI Customer Support Automation',
    client: 'SaaS Startup',
    problem: 'The client faced high response times and increasing customer support costs.',
    solution: 'Visoma developed an AI-powered chatbot using GPT-based architecture integrated with their support system.',
    tech: ['OpenAI GPT', 'FastAPI', 'Retrieval-based system'],
    results: [
      'Reduced response time by 65%',
      'Automated 70% of queries',
      'Improved customer satisfaction'
    ],
    icon: Bot,
    gradient: 'from-blue-500/20 to-cyan-400/20',
    accentColor: 'text-blue-500'
  },
  {
    id: 2,
    title: 'Large-Scale Data Annotation Pipeline',
    client: 'AI Research Company',
    problem: 'The client needed high-quality labeled datasets for computer vision models.',
    solution: 'Visoma built a scalable annotation workflow with quality validation and automated checks.',
    tech: ['Python', 'Annotation tools', 'Data validation pipelines'],
    results: [
      '1M+ images annotated',
      '99% accuracy',
      'Reduced dataset preparation time by 50%'
    ],
    icon: ImageIcon,
    gradient: 'from-purple-500/20 to-pink-400/20',
    accentColor: 'text-purple-500'
  },
  {
    id: 3,
    title: 'Web Data Extraction & Intelligence System',
    client: 'E-commerce Analytics Firm',
    problem: 'Manual data collection was slow and inconsistent.',
    solution: 'Visoma developed automated scraping pipelines and structured data systems.',
    tech: ['Python scraping tools', 'APIs', 'Data pipelines'],
    results: [
      '10x faster data collection',
      'Real-time insights',
      'Scalable system'
    ],
    icon: Globe,
    gradient: 'from-cyan-500/20 to-emerald-400/20',
    accentColor: 'text-cyan-500'
  },
  {
    id: 4,
    title: 'AI Lead Generation System',
    client: 'Marketing Agency',
    problem: 'Low-quality leads and inefficient outreach.',
    solution: 'Built an automated lead scraping + filtering + outreach system.',
    tech: ['Web scraping', 'Automation workflows', 'Email integration'],
    results: [
      '3x increase in qualified leads',
      'Automated outreach pipeline'
    ],
    icon: Target,
    gradient: 'from-orange-500/20 to-amber-400/20',
    accentColor: 'text-orange-500'
  },
  {
    id: 5,
    title: 'Custom AI Workflow Automation',
    client: 'Enterprise Business',
    problem: 'Manual repetitive processes causing delays.',
    solution: 'Developed AI-driven automation workflows.',
    tech: ['AI models', 'APIs', 'Workflow automation tools'],
    results: [
      '40% productivity increase',
      'Reduced operational cost'
    ],
    icon: Workflow,
    gradient: 'from-emerald-500/20 to-green-400/20',
    accentColor: 'text-emerald-500'
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-20 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold mb-4 sm:mb-6">
            Real Impact With <br />
            <span className="text-gradient-gold">AI & Data Solutions</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-normal sm:leading-relaxed max-w-2xl">
            Explore how Visoma helps businesses build intelligent systems, automate processes, and scale using AI-driven solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-8 sm:space-y-12">
          {caseStudies.map((study, idx) => (
            <div
              key={study.id}
              className="glass p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2.5rem] border-primary/5 relative overflow-hidden group"
            >
              {/* Background glow */}
              <div className={`absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full bg-gradient-to-br ${study.gradient}`} />

              <div className="relative z-10">
                {/* Top: Icon + Number + Title */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 sm:mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${study.gradient} flex items-center justify-center shrink-0`}>
                    <study.icon className={`w-7 h-7 ${study.accentColor}`} />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
                      Case Study {String(study.id).padStart(2, '0')}
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-headline font-bold text-foreground leading-tight">
                      {study.title}
                    </h2>
                  </div>
                </div>

                {/* Client Tag */}
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
                    Client: {study.client}
                  </span>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  {/* Problem */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-primary">Problem</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-primary">Solution</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-primary">Results</h3>
                    <ul className="space-y-1.5">
                      {study.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technology Tags */}
                <div className="mt-6 sm:mt-8 pt-6 border-t border-border/30">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground/60 mb-3">Technology Used</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-background border border-border text-xs font-medium text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-24 text-center glass p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-[2.5rem] border-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-headline font-bold mb-4 sm:mb-6">
              Ready to Build Your <br /><span className="text-gradient-gold">AI Solution?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              Partner with Visoma to develop intelligent systems tailored to your business.
            </p>
            <Link href="/contact">
              <Button
                className="relative overflow-hidden bg-primary text-[#0B0F0E] border-none gold-glow px-8 sm:px-12 h-12 sm:h-16 text-base sm:text-xl font-bold group transition-all duration-300 rounded-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#e0c080] to-primary bg-[length:200%_auto] animate-gradient-shift opacity-100 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-0 -left-[100%] w-full h-full z-20 block transform -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shine" />
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
