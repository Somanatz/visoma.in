
import { Cpu, Database, Globe, Layers } from 'lucide-react';

const services = [
  {
    title: 'AI Automation Systems',
    description: 'Custom AI workflows designed to automate complex business operations and reduce manual overhead.',
    icon: Cpu,
  },
  {
    title: 'AI Data Annotation',
    description: 'High-quality labeled datasets for ML training, ensuring your models reach peak performance.',
    icon: Layers,
  },
  {
    title: 'Web Scraping & Pipelines',
    description: 'Large-scale data extraction systems and robust pipelines that transform raw data into intelligence.',
    icon: Globe,
  },
  {
    title: 'GenAI Integrations',
    description: 'Leveraging LLMs and Generative AI to create personalized experiences and intelligent features.',
    icon: Database,
  }
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">Core Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold">Our Specialized Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="glass p-8 rounded-2xl group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
