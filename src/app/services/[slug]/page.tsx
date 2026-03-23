
"use client";

import { useParams, useRouter } from 'next/navigation';
import { Cpu, Search, BarChart3, Gavel, CheckCircle2, ArrowLeft, Layers, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const servicesData: Record<string, any> = {
  'it-services': {
    title: 'IT Services & AI Infrastructure',
    icon: Cpu,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    description: 'We architect the invisible nervous system of modern enterprises. From custom neural networks to high-throughput data processing, our IT solutions are built for the intelligence era.',
    longDescription: 'Our technical team specializes in building resilient, scalable infrastructure that supports complex AI operations. We don\'t just deploy tools; we design entire ecosystems that allow data to flow seamlessly and intelligence to be applied at scale.',
    features: [
      { title: 'Neural Architectures', desc: 'Custom ML models tailored to your specific business datasets and outcomes.' },
      { title: 'Cloud Scalability', desc: 'Serverless and containerized deployments on AWS, GCP, and Azure.' },
      { title: 'Data Pipelines', desc: 'Real-time processing streams capable of handling millions of events per second.' },
      { title: 'Edge Computing', desc: 'Deploying intelligence closer to the source for ultra-low latency applications.' }
    ],
    internshipInfo: 'Our IT internship program offers hands-on experience in cloud architecture and AI deployment pipelines, mentored by senior technical leads.'
  },
  'seo-services': {
    title: 'SEO & Growth Intelligence',
    icon: Search,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    description: 'Beyond traditional keywords. We use generative AI and semantic analysis to ensure your brand dominates the search landscape in the age of LLMs.',
    longDescription: 'As search engines evolve into answer engines, traditional SEO is no longer enough. We utilize advanced semantic clustering and AI-driven content strategies to ensure your products are the first choice for both humans and AI agents.',
    features: [
      { title: 'Semantic Clustering', desc: 'Mapping the entire topical authority of your niche to dominate search intent.' },
      { title: 'Generative Ad Copy', desc: 'Dynamic, high-conversion creative powered by fine-tuned language models.' },
      { title: 'Technical SEO', desc: 'Optimizing site architecture for maximum crawl efficiency and performance.' },
      { title: 'LLM Optimization', desc: 'Ensuring your brand is correctly referenced by AI search assistants and chatbots.' }
    ],
    internshipInfo: 'Join our marketing growth team to learn technical SEO, data-driven copywriting, and AI-led performance marketing strategies.'
  },
  'financial-services': {
    title: 'Financial Intelligence & Analysis',
    icon: BarChart3,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    description: 'Precision tools for the modern analyst. We build automated risk assessment and portfolio optimization systems that process market data in real-time.',
    longDescription: 'In the high-stakes world of finance, speed and accuracy are paramount. Our financial services provide the technical edge needed to identify opportunities and mitigate risks using advanced predictive modeling and automated auditing.',
    features: [
      { title: 'Risk Modeling', desc: 'Automated auditing and stress-testing for complex financial portfolios.' },
      { title: 'Market Intelligence', desc: 'Real-time sentiment analysis across global news and social data streams.' },
      { title: 'Predictive ROI', desc: 'Machine learning models designed to forecast asset performance with high precision.' },
      { title: 'Compliance Tech', desc: 'Automated monitoring systems to ensure all operations meet regulatory standards.' }
    ],
    internshipInfo: 'Our financial tech interns work alongside analysts to build predictive models and data visualization dashboards for enterprise partners.'
  },
  'legal-services': {
    title: 'Legal Tech & Compliance Automation',
    icon: Gavel,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    description: 'Bridging the gap between high-speed AI and strict regulatory compliance. We provide secure LLM tools for contract analysis and discovery.',
    longDescription: 'We help legal teams navigate the complexities of modern documentation. Our secure, privacy-first AI tools automate the tedious aspects of discovery and contract review, allowing professionals to focus on high-level strategy.',
    features: [
      { title: 'Contract Analysis', desc: 'High-speed parsing of thousands of documents to identify risks and deviations.' },
      { title: 'Discovery Automation', desc: 'Semantic search across millions of records to find relevant evidence in seconds.' },
      { title: 'Compliance Monitoring', desc: 'AI agents that track regulatory changes and flag potential internal conflicts.' },
      { title: 'Privacy Shields', desc: 'Ensuring all AI operations adhere to GDPR, HIPAA, and other strict data mandates.' }
    ],
    internshipInfo: 'Legal tech interns gain exposure to AI ethics, secure data processing, and the development of specialized LLM tools for professional services.'
  }
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData[slug as string];

  if (!service) {
    return (
      <div className="pt-32 pb-24 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link href="/services">
          <Button variant="link">Back to Services</Button>
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb / Back */}
        <Link href="/services" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10", service.color)}>
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-headline font-bold leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground gold-glow px-8 h-14 text-lg font-bold">
                  Request Technical Consultation
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className={cn("absolute inset-0 blur-[120px] opacity-20 rounded-full", service.bg)} />
            <div className="glass p-12 rounded-[3rem] border-white/10 relative overflow-hidden">
               <div className="space-y-8">
                 <div className="flex items-center gap-4">
                   <Layers className="w-6 h-6 text-primary" />
                   <h3 className="text-xl font-bold">Architected Excellence</h3>
                 </div>
                 <p className="text-muted-foreground leading-relaxed italic text-lg">
                   "{service.longDescription}"
                 </p>
                 <div className="grid grid-cols-2 gap-8 pt-4">
                   <div>
                     <div className="text-3xl font-bold text-primary mb-1">99%</div>
                     <div className="text-xs uppercase tracking-widest text-muted-foreground">Accuracy Rate</div>
                   </div>
                   <div>
                     <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                     <div className="text-xs uppercase tracking-widest text-muted-foreground">Monitoring</div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Technical Features "Box inside Box" style */}
        <div className="mb-32">
          <div className="mb-16">
            <h2 className="text-3xl font-headline font-bold mb-4">Technical Capabilities</h2>
            <p className="text-muted-foreground">Detailed breakdown of our core offerings in this sector.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature: any, idx: number) => (
              <div key={idx} className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-primary/20 transition-all group">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internship Block */}
        <div className="glass p-12 rounded-[3rem] border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Talent Pipeline
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6">Internship Opportunities</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.internshipInfo}
              </p>
            </div>
            <Link href="/careers" className="shrink-0">
              <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 h-14 px-10 font-bold">
                View Open Positions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
