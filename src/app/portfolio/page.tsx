
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const caseStudies = [
  {
    title: 'AI Support Automation',
    client: 'SaaS Enterprise',
    problem: 'Excessive support ticket volume with average 24-hour response times.',
    solution: 'Implemented a custom RAG-based chatbot with direct knowledge-base integration.',
    tech: 'GPT-4, Pinecone, LangChain, FastAPI',
    results: '65% reduction in response time, 40% of tickets resolved autonomously.',
    image: 'https://picsum.photos/seed/visoma-case-1/800/600'
  },
  {
    title: 'Real-time Lead Intelligence',
    client: 'Marketing Agency',
    problem: 'Inefficient manual lead qualification and slow outreach cycles.',
    solution: 'Built an automated scraping and enrichment pipeline using GenAI for classification.',
    tech: 'Python, OpenAI, PostgreSQL, AWS Lambda',
    results: '300% increase in qualified leads per month, 10x faster lead processing.',
    image: 'https://picsum.photos/seed/visoma-case-2/800/600'
  },
  {
    title: 'Medical Data Annotation',
    client: 'HealthTech Research Lab',
    problem: 'Need for high-accuracy labeled medical imagery for cancer detection models.',
    solution: 'Established a secure annotation pipeline with specialist verification loops.',
    tech: 'Custom Annotation Tool, Python, Docker',
    results: '99.2% labeling accuracy across 100k+ images, accelerating research by 6 months.',
    image: 'https://picsum.photos/seed/visoma-case-3/800/600'
  }
];

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-8">Real Impact With <br /> <span className="text-gradient-gold">AI Solutions</span></h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore how Visoma partners with organizations to solve complex data 
            and automation challenges through innovative AI infrastructure.
          </p>
        </div>

        <div className="space-y-32">
          {caseStudies.map((study, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="flex-1 w-full">
                <div className="relative group overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                  <Image 
                    src={study.image} 
                    alt={study.title}
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <div>
                  <Badge variant="outline" className="text-primary border-primary/30 px-4 py-1 mb-6">
                    {study.client}
                  </Badge>
                  <h2 className="text-4xl font-headline font-bold mb-4">{study.title}</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-primary mb-2 uppercase tracking-widest text-xs">The Problem</h4>
                    <p className="text-muted-foreground">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2 uppercase tracking-widest text-xs">Our Solution</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2 uppercase tracking-widest text-xs">Technology Stack</h4>
                    <p className="font-mono text-sm text-muted-foreground bg-white/5 p-3 rounded-lg border border-white/5">
                      {study.tech}
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl gold-glow">
                  <h4 className="font-bold text-primary mb-2 uppercase tracking-widest text-xs">The Results</h4>
                  <p className="text-xl font-headline font-bold">{study.results}</p>
                </div>

                <Link href="/contact" className="inline-block mt-4">
                  <Button variant="link" className="text-primary p-0 h-auto font-bold text-lg group">
                    Discuss similar project 
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}
