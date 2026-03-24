
"use client";

import { Cpu, Search, BarChart3, Gavel, Database, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    slug: 'it-services',
    title: 'IT Services',
    description: 'Bespoke AI infrastructure, robust data pipelines, and intelligent automation systems.',
    items: [
      { 
        title: 'GenAI Integrations', 
        desc: 'Seamlessly embedding generative models into your existing enterprise workflows.',
        img: 'https://picsum.photos/seed/genai/600/400'
      },
      { 
        title: 'Prompt Design', 
        desc: 'Engineering precise instructions to extract maximum performance from LLMs.',
        img: 'https://picsum.photos/seed/prompt/600/400'
      },
      { 
        title: 'Automation', 
        desc: 'End-to-end process automation reducing manual overhead by up to 80%.',
        img: 'https://picsum.photos/seed/automation/600/400'
      },
      { 
        title: 'Static Business Page', 
        desc: 'Blazing fast, high-performance web presences optimized for conversion.',
        img: 'https://picsum.photos/seed/static/600/400'
      },
      { 
        title: 'Web Design', 
        desc: 'Futuristic, minimal UI/UX tailored for high-trust technology brands.',
        img: 'https://picsum.photos/seed/design/600/400'
      },
      { 
        title: 'Chatbot', 
        desc: 'Custom RAG-powered assistants with deep knowledge-base integration.',
        img: 'https://picsum.photos/seed/chatbot/600/400'
      },
      { 
        title: 'AI Services', 
        desc: 'Bespoke machine learning solutions from computer vision to predictive analytics.',
        img: 'https://picsum.photos/seed/aiserv/600/400'
      }
    ],
    icon: Cpu,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    slug: 'data-services',
    title: 'Data Services',
    description: 'High-precision data acquisition and preparation. Fueling your models with quality.',
    items: [
      { 
        title: 'Data Contributions', 
        desc: 'Expert-verified data gathering across diverse domains and languages.',
        img: 'https://picsum.photos/seed/datacontrib/600/400'
      },
      { 
        title: 'Data Labeling', 
        desc: 'High-accuracy classification and semantic segmentation for vision and NLP models.',
        img: 'https://picsum.photos/seed/datalabel/600/400'
      },
      { 
        title: 'Image Collections', 
        desc: 'Bespoke datasets tailored to specific edge-case scenarios and environments.',
        img: 'https://picsum.photos/seed/imgcoll/600/400'
      },
      { 
        title: 'Manual Annotation', 
        desc: 'Precision multi-layered labeling and specialist verification loops.',
        img: 'https://picsum.photos/seed/annotate/600/400'
      }
    ],
    icon: Database,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    slug: 'seo-services',
    title: 'SEO Services',
    description: 'Data-driven search optimization and high-conversion ad strategies.',
    items: [
      { 
        title: 'Semantic Clusters', 
        desc: 'Mapping the entire topical authority of your niche to dominate search intent.',
        img: 'https://picsum.photos/seed/seo1/600/400'
      },
      { 
        title: 'Generative Ad Copy', 
        desc: 'Dynamic, high-conversion creative powered by fine-tuned language models.',
        img: 'https://picsum.photos/seed/seo2/600/400'
      },
      { 
        title: 'Technical SEO', 
        desc: 'Optimizing site architecture for maximum crawl efficiency and performance.',
        img: 'https://picsum.photos/seed/seo3/600/400'
      }
    ],
    icon: Search,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10'
  },
  {
    slug: 'financial-services',
    title: 'Financial Services',
    description: 'Advanced market analysis and predictive risk assessment.',
    items: [
      { 
        title: 'Portfolio Intelligence', 
        desc: 'Automated auditing and stress-testing for complex portfolios.',
        img: 'https://picsum.photos/seed/fin1/600/400'
      },
      { 
        title: 'Risk Auditing', 
        desc: 'Real-time monitoring systems to ensure all operations meet regulatory standards.',
        img: 'https://picsum.photos/seed/fin2/600/400'
      },
      { 
        title: 'Market Modeling', 
        desc: 'Machine learning models designed to forecast asset performance.',
        img: 'https://picsum.photos/seed/fin3/600/400'
      }
    ],
    icon: BarChart3,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    slug: 'legal-services',
    title: 'Legal Tech',
    description: 'Secure LLM-based contract analysis and precision legal research.',
    items: [
      { 
        title: 'Contract Intelligence', 
        desc: 'High-speed parsing of thousands of documents to identify risks.',
        img: 'https://picsum.photos/seed/legal1/600/400'
      },
      { 
        title: 'Discovery Automation', 
        desc: 'Semantic search across millions of records to find evidence in seconds.',
        img: 'https://picsum.photos/seed/legal2/600/400'
      },
      { 
        title: 'Compliance Agents', 
        desc: 'AI agents that track regulatory changes and flag internal conflicts.',
        img: 'https://picsum.photos/seed/legal3/600/400'
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
          <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6">Comprehensive Service Hierarchy</h3>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Technical foundations for high-impact intelligence across every sector.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group glass p-8 md:p-12 rounded-[2.5rem] border-white/5 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className={cn("absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full", service.bg)} />

              <div className="flex flex-col gap-8 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-primary/30", service.color)}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold group-hover:text-primary transition-colors">{service.title}</h4>
                      <p className="text-muted-foreground leading-relaxed mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <Link href={`/services/${service.slug}`} className="shrink-0">
                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 gold-glow">
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>

                {/* Horizontal Live Scroll Section */}
                <div className="relative">
                  <div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar snap-x snap-mandatory">
                    {service.items.map((item, dIdx) => (
                      <div 
                        key={dIdx} 
                        className="flex-shrink-0 w-[300px] h-[380px] relative rounded-3xl overflow-hidden snap-start border border-white/10 group/card"
                      >
                        {/* Background Image */}
                        <Image 
                          src={item.img} 
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                          data-ai-hint="technology background"
                        />
                        {/* Overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />
                        
                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                          <h5 className="font-bold text-2xl mb-3 text-white">{item.title}</h5>
                          <p className="text-sm text-gray-300 leading-relaxed font-medium">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Subtle fade effect on sides for scroll indicating */}
                  <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-background/40 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
