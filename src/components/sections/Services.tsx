"use client";

import { Cpu, Search, BarChart3, Gavel, Database, Rocket, Zap, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    slug: 'it-services',
    title: 'IT Services & AI Infrastructure',
    description: 'Bespoke AI infrastructure, robust data pipelines, and intelligent automation systems architected for the machine era.',
    items: [
      { 
        title: 'GenAI Integrations', 
        desc: 'Scaling foundation models into production environments with seamless enterprise connectivity and high-availability architecture.',
        img: 'https://picsum.photos/seed/it-genai/600/400'
      },
      { 
        title: 'Prompt Architecture', 
        desc: 'Designing precise logic flows and instructions to extract maximum performance, reliability, and accuracy from modern LLMs.',
        img: 'https://picsum.photos/seed/it-prompt/600/400'
      },
      { 
        title: 'Workflow Automation', 
        desc: 'Converting manual business bottlenecks into autonomous, high-throughput workflows using agentic reasoning and custom logic.',
        img: 'https://picsum.photos/seed/it-auto/600/400'
      },
      { 
        title: 'Neural Web Design', 
        desc: 'Futuristic, high-performance web presences optimized for both human conversion and indexing by next-gen AI search agents.',
        img: 'https://picsum.photos/seed/it-web/600/400'
      },
      { 
        title: 'Custom RAG Systems', 
        desc: 'Deploying private knowledge bases for precision information retrieval, ensuring contextual accuracy without data leakage.',
        img: 'https://picsum.photos/seed/it-chat/600/400'
      }
    ],
    icon: Cpu,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    slug: 'data-services',
    title: 'Data Services & Preparation',
    description: 'High-precision data acquisition and expert preparation to fuel state-of-the-art models with diverse, high-quality information.',
    items: [
      { 
        title: 'Precision Labeling', 
        desc: 'High-fidelity annotation and semantic segmentation for complex computer vision tasks and nuanced NLP requirements.',
        img: 'https://picsum.photos/seed/data-label/600/400'
      },
      { 
        title: 'Dataset Curation', 
        desc: 'Gathering diverse, high-quality data across specialized domains to ensure model diversity and eliminate inherent biases.',
        img: 'https://picsum.photos/seed/data-glob/600/400'
      },
      { 
        title: 'RLHF Pipelines', 
        desc: 'Human-in-the-loop feedback systems designed for advanced model alignment, ensuring safety and human-centric responses.',
        img: 'https://picsum.photos/seed/data-annot/600/400'
      },
      { 
        title: 'Bespoke Collections', 
        desc: 'Creating custom visual and textual datasets for unique edge-case training scenarios that standard data pools cannot cover.',
        img: 'https://picsum.photos/seed/data-photo/600/400'
      }
    ],
    icon: Database,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    slug: 'scraping',
    title: 'Web Scraping & Intelligence',
    description: 'Robust, enterprise-grade data extraction from any web source at massive scale with anti-bot resilience and precision parsing.',
    items: [
      { 
        title: 'Enterprise Scraping', 
        desc: 'Extracting millions of structured data points daily from complex, dynamic web applications with zero downtime.',
        img: 'https://picsum.photos/seed/scrap-ent/600/400'
      },
      { 
        title: 'Anti-Bot Resilience', 
        desc: 'Sophisticated evasion techniques, including browser fingerprinting and proxy rotation, to navigate modern web security.',
        img: 'https://picsum.photos/seed/scrap-bot/600/400'
      },
      { 
        title: 'Real-time Monitoring', 
        desc: 'Automated alerts for critical data shifts, source structure changes, and emerging market trends across the web.',
        img: 'https://picsum.photos/seed/scrap-monitor/600/400'
      },
      { 
        title: 'Structured Delivery', 
        desc: 'Transforming raw web data into clean, ready-to-use insights delivered directly into your analytical or AI pipelines.',
        img: 'https://picsum.photos/seed/scrap-data/600/400'
      }
    ],
    icon: Rocket,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10'
  },
  {
    slug: 'seo-services',
    title: 'SEO & Growth Intelligence',
    description: 'Data-driven search optimization and brand elevation strategies for the next generation of AI-mediated search.',
    items: [
      { 
        title: 'Semantic Clustering', 
        desc: 'Dominating search intent by mapping topical authority across entire industry niches using advanced NLP analysis.',
        img: 'https://picsum.photos/seed/seo-sem/600/400'
      },
      { 
        title: 'Generative Growth', 
        desc: 'Dynamic, high-conversion ad creative and content powered by fine-tuned language models for personalized outreach.',
        img: 'https://picsum.photos/seed/seo-copy/600/400'
      },
      { 
        title: 'LLM Optimization', 
        desc: 'Ensuring your brand is correctly referenced, cited, and recommended by AI search assistants and intelligent agents.',
        img: 'https://picsum.photos/seed/seo-tech/600/400'
      },
      { 
        title: 'Brand Architecting', 
        desc: 'Crafting futuristic visual identities and messaging designed for the digital-first, machine-integrated business era.',
        img: 'https://picsum.photos/seed/seo-brand/600/400'
      }
    ],
    icon: Search,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10'
  },
  {
    slug: 'financial-services',
    title: 'Financial Intelligence',
    description: 'Precision risk modeling and predictive analytics tools for enterprise financial portfolios and market assessment.',
    items: [
      { 
        title: 'Risk Modeling', 
        desc: 'Automated stress-testing and auditing systems for complex financial asset classes using predictive ML ensembles.',
        img: 'https://picsum.photos/seed/fin-risk/600/400'
      },
      { 
        title: 'Market Intelligence', 
        desc: 'Real-time sentiment and trend analysis across global financial data streams to identify alpha before the market.',
        img: 'https://picsum.photos/seed/fin-market/600/400'
      },
      { 
        title: 'Predictive ROI', 
        desc: 'Forecasting asset performance and investment returns through custom-trained machine learning models.',
        img: 'https://picsum.photos/seed/fin-invest/600/400'
      },
      { 
        title: 'Algo Trading', 
        desc: 'High-speed execution frameworks and strategy backtesting built on precision data and low-latency architecture.',
        img: 'https://picsum.photos/seed/fin-algo/600/400'
      }
    ],
    icon: BarChart3,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    slug: 'legal-services',
    title: 'Legal Tech & Compliance',
    description: 'Secure AI-driven contract analysis and automated regulatory compliance systems for high-stakes professional services.',
    items: [
      { 
        title: 'Contract Analysis', 
        desc: 'High-speed parsing and risk identification across massive document pools, flagging anomalies and deviations.',
        img: 'https://picsum.photos/seed/legal-cont/600/400'
      },
      { 
        title: 'Discovery Automation', 
        desc: 'Semantic search across millions of records to find critical evidence and relevant precedents in seconds.',
        img: 'https://picsum.photos/seed/legal-disc/600/400'
      },
      { 
        title: 'Compliance Agents', 
        desc: 'Autonomous monitoring agents that track regulatory shifts globally and flag potential internal conflicts in real-time.',
        img: 'https://picsum.photos/seed/legal-comp/600/400'
      },
      { 
        title: 'Secure Consulting', 
        desc: 'Strategic guidance on AI ethics, data privacy, and the implementation of robust regulatory frameworks.',
        img: 'https://picsum.photos/seed/legal-consult/600/400'
      }
    ],
    icon: Gavel,
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
          <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-gradient-gold py-1">Comprehensive Service Hierarchy</h3>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Technical foundations for high-impact intelligence across every sector.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group glass p-8 md:p-12 rounded-[3.5rem] border-white/5 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className={cn("absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full", service.bg)} />

              <div className="flex flex-col gap-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                  <div className="flex items-start gap-6 max-w-3xl">
                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-primary/30 shrink-0", service.color)}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-3xl md:text-4xl font-headline font-bold group-hover:text-primary transition-colors">{service.title}</h4>
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <Link href={`/services/${service.slug === 'scraping' ? 'it-services' : service.slug}`} className="shrink-0">
                    <div className="px-8 py-4 rounded-2xl border border-foreground/20 flex items-center justify-center gap-2 bg-background/50 backdrop-blur-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 gold-glow text-xs font-bold uppercase tracking-[0.2em]">
                      More Details <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 border-t border-white/10 pt-10">
                  {service.items.map((item, i) => (
                    <div key={i} className="space-y-3 group/item p-4 rounded-2xl hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors" />
                        <h5 className="text-sm font-bold uppercase tracking-[0.1em] text-foreground group-hover/item:text-primary transition-colors">
                          {item.title}
                        </h5>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative overflow-hidden w-full pt-4">
                  <div className={cn(
                    "flex w-fit gap-6",
                    idx % 2 === 0 ? "animate-infinite-scroll" : "animate-infinite-scroll-reverse"
                  )}>
                    {[...service.items, ...service.items].map((item, dIdx) => (
                      <div 
                        key={dIdx} 
                        className="flex-shrink-0 w-[320px] h-[400px] relative rounded-[2.5rem] overflow-hidden border border-white/10 group/card shadow-xl"
                      >
                        <Image 
                          src={item.img} 
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                          data-ai-hint="technical capability"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />
                        
                        <div className="absolute inset-0 p-10 flex flex-col justify-end">
                          <h5 className="font-bold text-2xl mb-4 text-white leading-tight">{item.title}</h5>
                          <p className="text-sm text-gray-200 leading-relaxed font-medium">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
                  <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
