
"use client";

import { Cpu, Search, BarChart3, Gavel, Rocket, Database, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const detailedServices = [
  {
    id: 'it-services',
    title: 'IT Services',
    description: 'Transform manual workflows into intelligent, automated systems that learn and adapt.',
    features: ['AI Infrastructure', 'Custom Workflow Mapping', 'Data Pipeline Scaling'],
    icon: Cpu
  },
  {
    id: 'data-services',
    title: 'Data Services',
    description: 'High-quality datasets for training and fine-tuning state-of-the-art AI models.',
    features: ['Data Contributions', 'Precision Labeling', 'Image Collections', 'Manual Annotation'],
    icon: Database
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    description: 'High-conversion, modern landing pages for AI products that communicate value clearly.',
    features: ['Generative Ad Copy', 'SEO Optimization', 'Performance Monitoring'],
    icon: Search
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    description: 'Advanced technical solutions for asset analysis and automated risk auditing.',
    features: ['Market Intelligence', 'Portfolio Optimization', 'Risk Assessment'],
    icon: BarChart3
  },
  {
    id: 'legal-services',
    title: 'Legal Services',
    description: 'Precision AI tools for legal research and document discovery automation.',
    features: ['Contract Analysis', 'Discovery Automation', 'Security Compliance'],
    icon: Gavel
  },
  {
    id: 'scraping',
    title: 'Web Scraping',
    description: 'Robust, enterprise-grade data extraction from any web source at massive scale.',
    features: ['Anti-Bot Evasion', 'Dynamic Content Parsing', 'Monitoring Alerts'],
    icon: Rocket
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-8">Our Specialized <br /> <span className="text-gradient-gold">Services</span></h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From data acquisition to high-level automation, we provide the technical foundation 
            your strategy needs to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {detailedServices.map((service) => (
            <div key={service.id} id={service.id} className="glass p-10 rounded-3xl border-white/5 hover:border-primary/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-4 mb-10">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-3" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link href={`/services/${service.id === 'scraping' ? 'it-services' : service.id}`}>
                <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10 hover:text-primary">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center p-16 rounded-[3rem] bg-secondary/20 border border-white/5">
          <h3 className="text-3xl font-headline font-bold mb-6">Need a custom solution?</h3>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Our technical team specializes in bespoke architecture tailored to 
            unique business challenges. Let's discuss your requirements.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground gold-glow px-12 h-14 text-lg">
              Talk to an Expert
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
