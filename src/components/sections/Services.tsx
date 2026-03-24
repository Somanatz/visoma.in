
"use client";

import { Cpu, Search, BarChart3, Gavel, Database, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const services = [
  {
    slug: 'it-services',
    title: 'IT Services',
    description: 'Bespoke AI infrastructure, robust data pipelines, and intelligent automation systems. We architect the core of your digital transformation.',
    items: [
      { title: 'GenAI Integrations', desc: 'Seamlessly embedding generative models into your existing enterprise workflows.' },
      { title: 'Prompt Design', desc: 'Engineering precise instructions to extract maximum performance from LLMs.' },
      { title: 'Automation', desc: 'End-to-end process automation reducing manual overhead by up to 80%.' },
      { title: 'Static Business Page', desc: 'Blazing fast, high-performance web presences optimized for conversion.' },
      { title: 'Web Design', desc: 'Futuristic, minimal UI/UX tailored for high-trust technology brands.' },
      { title: 'Chatbot', desc: 'Custom RAG-powered assistants with deep knowledge-base integration.' },
      { title: 'AI services', desc: 'Bespoke machine learning solutions from computer vision to predictive analytics.' }
    ],
    icon: Cpu,
    animationClass: 'group-hover:rotate-180 transition-transform duration-700',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    slug: 'data-services',
    title: 'Data Services',
    description: 'High-precision data acquisition and preparation. From large-scale collections to specialized annotation, we fuel your models with quality.',
    items: [
      { title: 'Data Labeling & Annotation', desc: 'High-accuracy classification and semantic segmentation for vision and NLP models.' },
      { title: 'Image & Video Collections', desc: 'Bespoke datasets tailored to specific edge-case scenarios and environments.' },
      { title: 'Precision Data Contributions', desc: 'Expert-verified data gathering across diverse domains and languages.' }
    ],
    icon: Database,
    animationClass: 'group-hover:translate-y-[-4px] group-hover:scale-110 transition-all duration-500',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    slug: 'seo-services',
    title: 'SEO Services',
    description: 'Data-driven search optimization and high-conversion ad strategies. We ensure your AI products reach the right audience.',
    items: [
      { title: 'Semantic Keyword Clusters', desc: 'Mapping the entire topical authority of your niche to dominate search intent.' },
      { title: 'Generative Ad Copywriting', desc: 'Dynamic, high-conversion creative powered by fine-tuned language models.' },
      { title: 'Technical SEO Audits', desc: 'Optimizing site architecture for maximum crawl efficiency and performance.' }
    ],
    icon: Search,
    animationClass: 'group-hover:scale-125 transition-transform duration-500',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10'
  },
  {
    slug: 'financial-services',
    title: 'Financial Services',
    description: 'Advanced market analysis and predictive risk assessment. Precision tools for auditing and asset optimization.',
    items: [
      { title: 'Portfolio Intelligence', desc: 'Automated auditing and stress-testing for complex financial portfolios.' },
      { title: 'Automated Risk Auditing', desc: 'Real-time monitoring systems to ensure all operations meet regulatory standards.' },
      { title: 'Predictive Market Modeling', desc: 'Machine learning models designed to forecast asset performance with high precision.' }
    ],
    icon: BarChart3,
    animationClass: 'group-hover:translate-y-[-4px] transition-transform duration-300',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    slug: 'legal-services',
    title: 'Legal Services',
    description: 'Secure LLM-based contract analysis and precision legal research. We bridge the gap between AI and regulatory compliance.',
    items: [
      { title: 'Contract Intelligence', desc: 'High-speed parsing of thousands of documents to identify risks and deviations.' },
      { title: 'Discovery Automation', desc: 'Semantic search across millions of records to find relevant evidence in seconds.' },
      { title: 'Compliance Monitoring', desc: 'AI agents that track regulatory changes and flag potential internal conflicts.' }
    ],
    icon: Gavel,
    animationClass: 'group-hover:rotate-[-20deg] transition-transform duration-300',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10'
  }
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6">Comprehensive Service Hierarchy</h3>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Each layer of our service stack is designed to deliver enterprise-grade solutions to our partners.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group glass p-8 md:p-12 rounded-[2.5rem] border-white/5 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className={cn("absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full", service.bg)} />

              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 relative z-10">
                <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center shrink-0 bg-white/5 border border-white/10 group-hover:border-primary/30", service.color)}>
                  <service.icon className={cn("w-10 h-10", service.animationClass)} />
                </div>

                <div className="flex-1 space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h4 className="text-3xl font-bold group-hover:text-primary transition-colors">{service.title}</h4>
                  </div>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
                    {service.description}
                  </p>

                  {/* Details grid with left-to-right flow */}
                  <div className="flex flex-wrap gap-6 pt-4">
                    {service.items.map((item, dIdx) => (
                      <div 
                        key={dIdx} 
                        className="flex-1 min-w-[280px] p-6 bg-white/5 rounded-2xl border border-white/5 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 mb-3">
                          <div className="relative flex h-2 w-2">
                            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></div>
                            <div className="relative inline-flex rounded-full h-2 w-2 bg-primary"></div>
                          </div>
                          LIVE SYSTEM
                        </div>
                        <h5 className="font-bold text-lg mb-2 text-foreground">{item.title}</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href={`/services/${service.slug}`} className="hidden lg:block shrink-0 self-center">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 gold-glow">
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
                
                <Link href={`/services/${service.slug}`} className="lg:hidden w-full">
                  <div className="mt-8 p-4 rounded-xl border border-primary/20 text-primary font-bold text-center hover:bg-primary hover:text-primary-foreground transition-all">
                    View Technical Details
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
