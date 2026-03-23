"use client";

import { 
  TrendingUp, 
  BarChart3, 
  Gavel, 
  Stethoscope, 
  ShieldCheck, 
  Share2, 
  Search,
  Briefcase,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useCollection, useMemoFirebase, useFirestore } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';

const defaultSolutions = [
  {
    name: 'Investments',
    description: 'AI-driven market analysis and portfolio optimization for high-growth assets.',
    icon: TrendingUp,
    color: 'text-blue-400',
    slug: 'investments'
  },
  {
    name: 'Financial Analyst',
    description: 'Automated auditing, risk assessment, and financial reporting with precision.',
    icon: BarChart3,
    color: 'text-emerald-400',
    slug: 'financial'
  },
  {
    name: 'Legal Services',
    description: 'Contract analysis, discovery automation, and legal research powered by LLMs.',
    icon: Gavel,
    color: 'text-amber-400',
    slug: 'legal'
  },
  {
    name: 'Medical Services',
    description: 'Diagnostics assistance, patient data management, and research acceleration.',
    icon: Stethoscope,
    color: 'text-rose-400',
    slug: 'medical'
  },
  {
    name: 'Content Moderator',
    description: 'Real-time safety filtering and content compliance for digital platforms.',
    icon: ShieldCheck,
    color: 'text-purple-400',
    slug: 'moderator'
  },
  {
    name: 'Social Media Management',
    description: 'Intelligent scheduling, sentiment analysis, and community growth tools.',
    icon: Share2,
    color: 'text-sky-400',
    slug: 'social'
  },
  {
    name: 'SEO Optimised Ads',
    description: 'Generative copy and performance-led ad targeting for maximum ROI.',
    icon: Search,
    color: 'text-orange-400',
    slug: 'seo-ads'
  },
  {
    name: 'Freelance Job Portal',
    description: 'A dedicated platform connecting top-tier gig workers with AI projects.',
    icon: Briefcase,
    color: 'text-primary',
    slug: 'jobs'
  }
];

export default function SolutionsPage() {
  const firestore = useFirestore();
  const solutionsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'solutions'));
  }, [firestore]);

  const { data: dbSolutions, isLoading } = useCollection(solutionsQuery);

  const displaySolutions = dbSolutions && dbSolutions.length > 0 
    ? dbSolutions.map(s => ({
        ...s,
        icon: defaultSolutions.find(d => d.slug === s.slug)?.icon || Briefcase,
        color: defaultSolutions.find(d => d.slug === s.slug)?.color || 'text-primary'
      }))
    : defaultSolutions;

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

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displaySolutions.map((sol: any, idx: number) => (
              <div key={idx} className="glass p-8 rounded-3xl border-white/5 hover:border-primary/30 transition-all group">
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${sol.color}`}>
                  <sol.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{sol.name || sol.title}</h3>
                <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                  {sol.description}
                </p>
                <Link href={sol.name === 'Freelance Job Portal' || sol.slug === 'jobs' ? '/auth' : '/contact'}>
                  <Button variant="link" className="p-0 text-primary group-hover:underline">
                    {sol.name === 'Freelance Job Portal' || sol.slug === 'jobs' ? 'Join as Freelancer' : 'Discuss Solution'}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}