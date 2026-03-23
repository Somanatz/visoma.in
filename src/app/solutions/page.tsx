
"use client";

import { 
  TrendingUp, 
  BarChart3, 
  Gavel, 
  Stethoscope, 
  ShieldCheck, 
  Share2, 
  Search,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const solutions = [
  {
    title: 'Investments',
    description: 'AI-driven market analysis and portfolio optimization for high-growth assets.',
    icon: TrendingUp,
    color: 'text-blue-400'
  },
  {
    title: 'Financial Analyst',
    description: 'Automated auditing, risk assessment, and financial reporting with precision.',
    icon: BarChart3,
    color: 'text-emerald-400'
  },
  {
    title: 'Legal Services',
    description: 'Contract analysis, discovery automation, and legal research powered by LLMs.',
    icon: Gavel,
    color: 'text-amber-400'
  },
  {
    title: 'Medical Services',
    description: 'Diagnostics assistance, patient data management, and research acceleration.',
    icon: Stethoscope,
    color: 'text-rose-400'
  },
  {
    title: 'Content Moderator',
    description: 'Real-time safety filtering and content compliance for digital platforms.',
    icon: ShieldCheck,
    color: 'text-purple-400'
  },
  {
    title: 'Social Media Management',
    description: 'Intelligent scheduling, sentiment analysis, and community growth tools.',
    icon: Share2,
    color: 'text-sky-400'
  },
  {
    title: 'SEO Optimised Ads',
    description: 'Generative copy and performance-led ad targeting for maximum ROI.',
    icon: Search,
    color: 'text-orange-400'
  },
  {
    title: 'Freelance Job Portal',
    description: 'A dedicated platform connecting top-tier gig workers with AI projects.',
    icon: Briefcase,
    color: 'text-primary'
  }
];

export default function SolutionsPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-8">Industry <br /> <span className="text-gradient-gold">Solutions</span></h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized AI architectures designed for high-impact sectors. 
            We bridge the gap between complex technology and practical business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((sol, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl border-white/5 hover:border-primary/30 transition-all group">
              <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${sol.color}`}>
                <sol.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{sol.title}</h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                {sol.description}
              </p>
              <Link href={sol.title === 'Freelance Job Portal' ? '/auth' : '/contact'}>
                <Button variant="link" className="p-0 text-primary group-hover:underline">
                  {sol.title === 'Freelance Job Portal' ? 'Join as Freelancer' : 'Discuss Solution'}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
