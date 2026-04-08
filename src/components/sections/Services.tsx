"use client";

import { Cpu, Search, BarChart3, Gavel, Database, Rocket, Zap, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    slug: 'it-services',
    title: 'IT Services & AI Infrastructure',
    description: 'We orchestrate end-to-end bespoke AI infrastructures designed for enterprise scale. By bridging next-gen language models with backend systems, we ensure secure, low-latency, and highly contextual integrations.',
    highlights: ['Foundational Model Strategy', 'High-Availability Architectures', 'Zero-Trust Protocols', 'Seamless API Connectivity'],
    items: [
      { 
        title: 'GenAI Integration', 
        desc: 'Seamlessly embedding generative AI capabilities into business workflows, products, and platforms to enhance automation, intelligence, and user experience.',
        img: '/services/img-0.jpg',
        video: '/services/img-0.mp4'
      },
      { 
        title: 'Prompt Architecture', 
        desc: 'Designing precise logic flows and instructions to extract maximum performance, reliability, and accuracy from modern LLMs.',
        img: '/services/img-1.jpg',
        video: '/services/img-1.mp4'
      },
      { 
        title: 'Workflow Automation', 
        desc: 'Converting manual business bottlenecks into autonomous, high-throughput workflows using agentic reasoning and custom logic.',
        img: '/services/img-2.jpg',
        video: '/services/img-2.mp4'
      },
      { 
        title: 'Neural Web Design', 
        desc: 'Futuristic, high-performance web presences optimized for both human conversion and indexing by next-gen AI search agents.',
        img: '/services/img-3.jpg',
        video: '/services/img-3.mp4'
      },
      { 
        title: 'Custom RAG Systems', 
        desc: 'Deploying private knowledge bases for precision information retrieval, ensuring contextual accuracy without data leakage.',
        img: '/services/img-4.jpg',
        video: '/services/img-4.mp4'
      }
    ],
    icon: Cpu,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    slug: 'data-services',
    title: 'Data Services & Preparation',
    description: 'High-precision data is the lifeblood of advanced AI computation. Our engineering teams curate, clean, and meticulously annotate vast datasets to train models devoid of intrinsic bias and optimized for specialized domains.',
    highlights: ['Human-in-the-loop (HITL)', 'Enterprise Data Scrubbing', 'Multilingual Harvesting', 'Proprietary Synthesization'],
    items: [
      { 
        title: 'Precision Labeling', 
        desc: 'High-fidelity annotation and semantic segmentation for complex computer vision tasks and nuanced NLP requirements.',
        img: '/services/img-5.jpg',
        video: '/services/img-5.mp4'
      },
      { 
        title: 'Dataset Curation', 
        desc: 'Gathering diverse, high-quality data across specialized domains to ensure model diversity and eliminate inherent biases.',
        img: '/services/img-6.jpg',
        video: '/services/img-6.mp4'
      },
      { 
        title: 'RLHF Pipelines', 
        desc: 'Human-in-the-loop feedback systems designed for advanced model alignment, ensuring safety and human-centric responses.',
        img: '/services/img-7.jpg',
        video: '/services/img-7.mp4'
      },
      { 
        title: 'Bespoke Collections', 
        desc: 'Creating custom visual and textual datasets for unique edge-case training scenarios that standard data pools cannot cover.',
        img: '/services/img-8.jpg',
        video: '/services/img-8.mp4'
      }
    ],
    icon: Database,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    slug: 'scraping',
    title: 'Web Scraping & Intelligence',
    description: 'Deploy robust, enterprise-grade extraction frameworks capable of parsing millions of dynamic web endpoints. Our autonomous agents navigate complex architectures and anti-bot systems to secure real-time structured data.',
    highlights: ['Advanced JavaScript Parsing', 'Proxy Resilience Systems', 'Real-time Anomaly Detection', 'Direct Pipeline Delivery'],
    items: [
      { 
        title: 'Enterprise Scraping', 
        desc: 'Extracting millions of structured data points daily from complex, dynamic web applications with zero downtime.',
        img: '/services/img-9.jpg',
        video: '/services/img-9.mp4'
      },
      { 
        title: 'Anti-Bot Resilience', 
        desc: 'Sophisticated evasion techniques, including browser fingerprinting and proxy rotation, to navigate modern web security.',
        img: '/services/img-10.jpg',
        video: '/services/img-10.mp4'
      },
      { 
        title: 'Real-time Monitoring', 
        desc: 'Automated alerts for critical data shifts, source structure changes, and emerging market trends across the web.',
        img: '/services/img-11.jpg',
        video: '/services/img-11.mp4'
      },
      { 
        title: 'Structured Delivery', 
        desc: 'Transforming raw web data into clean, ready-to-use insights delivered directly into your analytical or AI pipelines.',
        img: '/services/img-12.jpg',
        video: '/services/img-12.mp4'
      }
    ],
    icon: Rocket,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10'
  },
  {
    slug: 'seo-services',
    title: 'SEO & Growth Intelligence',
    description: 'In the era of AI-mediated search (SGE), traditional keyword strategy is obsolete. We architect your digital presence around semantic entities to ensure dominance across both LLM citations and traditional search engines.',
    highlights: ['Entity-Based Optimization', 'LLM Citation Strategies', 'Topical Authority Mapping', 'Dynamic Content Generation'],
    items: [
      { 
        title: 'Semantic Clustering', 
        desc: 'Dominating search intent by mapping topical authority across entire industry niches using advanced NLP analysis.',
        img: '/services/img-13.jpg',
        video: '/services/img-13.mp4'
      },
      { 
        title: 'Generative Growth', 
        desc: 'Dynamic, high-conversion ad creative and content powered by fine-tuned language models for personalized outreach.',
        img: '/services/img-14.jpg',
        video: '/services/img-14.mp4'
      },
      { 
        title: 'LLM Optimization', 
        desc: 'Ensuring your brand is correctly referenced, cited, and recommended by AI search assistants and intelligent agents.',
        img: '/services/img-15.jpg',
        video: '/services/img-15.mp4'
      },
      { 
        title: 'Brand Architecting', 
        desc: 'Crafting futuristic visual identities and messaging designed for the digital-first, machine-integrated business era.',
        img: '/services/img-16.jpg',
        video: '/services/img-16.mp4'
      }
    ],
    icon: Search,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10'
  },
  {
    slug: 'financial-services',
    title: 'Financial Intelligence',
    description: 'Harness quantitative rigor with predictive machine learning models. We engineer complex algorithmic frameworks tailored for market analysis, precision risk assessment, and real-time execution environments.',
    highlights: ['Algorithmic Ecosystems', 'Quantitative Risk Matrices', 'Predictive ML Ensembles', 'Market Sentiment Scanning'],
    items: [
      { 
        title: 'Risk Modeling', 
        desc: 'Automated stress-testing and auditing systems for complex financial asset classes using predictive ML ensembles.',
        img: '/services/img-17.jpg',
        video: '/services/img-17.mp4'
      },
      { 
        title: 'Market Intelligence', 
        desc: 'Real-time sentiment and trend analysis across global financial data streams to identify alpha before the market.',
        img: '/services/img-18.jpg',
        video: '/services/img-18.mp4'
      },
      { 
        title: 'Predictive ROI', 
        desc: 'Forecasting asset performance and investment returns through custom-trained machine learning models.',
        img: '/services/img-19.jpg',
        video: '/services/img-19.mp4'
      },
      { 
        title: 'Algo Trading', 
        desc: 'High-speed execution frameworks and strategy backtesting built on precision data and low-latency architecture.',
        img: '/services/img-20.jpg',
        video: '/services/img-20.mp4'
      }
    ],
    icon: BarChart3,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    slug: 'legal-services',
    title: 'Legal Tech & Compliance',
    description: 'Revolutionize professional services through secure AI deployment. Our frameworks automate heavy contract parsing, execute semantic cross-discovery, and monitor compliance—all housed within strict data protection boundaries.',
    highlights: ['Automated Regulatory Audits', 'Semantic Evidence Discovery', 'Contractual Risk Flagging', 'AI Governance & Ethics'],
    items: [
      { 
        title: 'Contract Analysis', 
        desc: 'High-speed parsing and risk identification across massive document pools, flagging anomalies and deviations.',
        img: '/services/img-21.jpg',
        video: '/services/img-21.mp4'
      },
      { 
        title: 'Discovery Automation', 
        desc: 'Semantic search across millions of records to find critical evidence and relevant precedents in seconds.',
        img: '/services/img-22.jpg',
        video: '/services/img-22.mp4'
      },
      { 
        title: 'Compliance Agents', 
        desc: 'Autonomous monitoring agents that track regulatory shifts globally and flag potential internal conflicts in real-time.',
        img: '/services/img-23.jpg',
        video: '/services/img-23.mp4'
      },
      { 
        title: 'Secure Consulting', 
        desc: 'Strategic guidance on AI ethics, data privacy, and the implementation of robust regulatory frameworks.',
        img: '/services/img-24.jpg',
        video: '/services/img-24.mp4'
      }
    ],
    icon: Gavel,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10'
  }
];

export default function Services() {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 bg-background relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-gradient-gold py-1">Comprehensive Service Hierarchy</h3>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl leading-normal sm:leading-relaxed">
            Technical foundations for high-impact intelligence across every sector.
          </p>
        </div>

        <div className="flex flex-col gap-10 sm:gap-16">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group glass p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[3.5rem] border-white/5 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className={cn("absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full", service.bg)} />

              <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                  <div className="flex items-start gap-6 max-w-4xl">
                    <div className={cn("w-16 h-16 rounded-2xl items-center justify-center border shrink-0 bg-background shadow-sm border-border hidden sm:flex", service.color)}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div className="space-y-3 sm:space-y-5 lg:pr-12">
                      <h4 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-foreground tracking-tight">{service.title}</h4>
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-normal sm:leading-relaxed max-w-2xl">
                        {service.description}
                      </p>
                      
                      {/* Core Competencies highlights */}
                      <div className="pt-2">
                        <h6 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Core Competencies</h6>
                        <ul className="flex flex-col sm:flex-row flex-wrap sm:items-center gap-x-6 gap-y-2 sm:gap-y-3">
                          {service.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-foreground/80">
                              <span className="flex items-center justify-center w-5 h-5 rounded bg-primary/10 text-primary">
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Link href={`/services/${service.slug === 'scraping' ? 'it-services' : service.slug}`} className="shrink-0 mt-4 md:mt-0 w-full sm:w-auto">
                    <div className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-foreground/20 flex items-center justify-center gap-2 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 gold-glow text-xs font-bold uppercase tracking-[0.2em]">
                      More Details <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>

                <div className="w-full pt-6 sm:pt-10 border-t border-white/10">
                  <ServiceCarousel items={service.items} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCarousel({ items }: { items: { title: string, desc: string, img?: string, video?: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, [items.length, isPaused]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  
  const currentItem = items[currentIndex];

  return (
    <div 
      className="relative w-full rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#fdfbf7] via-[#f8f5f0] to-[#f4f2f9] border border-[#e8dff4] shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm group/slider pb-8 sm:pb-12 pt-5 sm:pt-8 mt-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex flex-col md:flex-row h-auto md:h-[450px] gap-5 sm:gap-8 xl:gap-12 p-4 sm:p-6 md:px-12 items-center">
        
        {/* Left Box: Image */}
        <div className="w-full md:w-[45%] relative h-[200px] sm:h-[260px] md:h-full flex-shrink-0 bg-background rounded-xl sm:rounded-[2rem] overflow-hidden shadow-sm border border-border/50">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              {currentItem.video ? (
                <video 
                  src={currentItem.video} 
                  className="w-full h-full object-cover pointer-events-none"
                  autoPlay
                  muted
                  playsInline
                  disablePictureInPicture
                  preload="metadata"
                  controlsList="nodownload noplaybackrate"
                />
              ) : currentItem.img ? (
                <Image 
                  src={currentItem.img} 
                  alt={currentItem.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Box: Text content */}
        <div className="w-full md:w-[55%] relative flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col gap-5 relative z-10"
            >
              <h5 className="font-headline font-bold text-xl sm:text-3xl md:text-5xl text-foreground leading-tight">
                {currentItem.title}
              </h5>
              
              <p className="text-sm sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                {currentItem.desc}
              </p>

              {/* Decorative dashes mimicking the technical aesthetic */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-6 max-w-[80%]">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="h-1 w-full bg-border rounded-full overflow-hidden">
                    <motion.div 
                      key={`dash-${currentIndex}-${i}`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.6, delay: 0.1 + (i*0.1), ease: "easeOut" }}
                      className="h-full bg-primary"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows — below media on mobile, centered on desktop */}
      <div className="flex items-center justify-center gap-4 mt-2 sm:mt-0 sm:block">
        <button 
          onClick={prevSlide}
          className="relative sm:absolute left-auto sm:left-2 md:-left-5 top-auto sm:top-1/2 sm:-translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-background hover:bg-primary hover:text-white border border-border flex items-center justify-center text-foreground transition-all duration-300 z-30 shadow-lg"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </button>
        <button 
          onClick={nextSlide}
          className="relative sm:absolute right-auto sm:right-2 md:-right-5 top-auto sm:top-1/2 sm:-translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-background hover:bg-primary hover:text-white border border-border flex items-center justify-center text-foreground transition-all duration-300 z-30 shadow-lg"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={cn(
              "transition-all duration-300 rounded-full",
              i === currentIndex ? "w-8 h-2 bg-primary shadow-[0_0_10px_rgba(211,164,77,0.5)]" : "w-2.5 h-2.5 bg-foreground/20 hover:bg-foreground/40"
            )}
           aria-label="dot"
          />
        ))}
      </div>
    </div>
  );
}