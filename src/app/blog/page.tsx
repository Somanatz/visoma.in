
"use client";

import { useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Info } from 'lucide-react';
import { format } from 'date-fns';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function BlogPage() {
  const firestore = useFirestore();

  const blogQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    // We explicitly filter by isPublished and add a limit to match common security rules patterns.
    // Client-side sorting is used as a fallback for missing composite indexes.
    return query(
      collection(firestore, 'blogPosts'),
      where('isPublished', '==', true),
      limit(20)
    );
  }, [firestore]);

  const { data: posts, isLoading, error } = useCollection(blogQuery);

  const fallbackPosts = [
    {
      id: 'fall-1',
      title: 'The Future of Agentic Workflows',
      summary: 'Exploring how autonomous AI agents are redefining enterprise productivity and decision-making pipelines.',
      authorName: 'Visoma Team',
      publicationDate: new Date().toISOString(),
      slug: 'agentic-workflows',
      thumbnailUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect width='800' height='500' fill='%231a1f1e'/%3E%3Ctext x='400' y='260' text-anchor='middle' font-size='60' font-family='Arial' font-weight='700' fill='%23c7a45a'%3EAgentic AI%3C/text%3E%3C/svg%3E"
    },
    {
      id: 'fall-2',
      title: 'Scaling Data Pipelines with Precision',
      summary: 'Technical insights into building resilient, high-throughput data processing architectures for LLM training.',
      authorName: 'Data Engineering',
      publicationDate: new Date().toISOString(),
      slug: 'scaling-pipelines',
      thumbnailUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect width='800' height='500' fill='%232a4a47'/%3E%3Ctext x='400' y='260' text-anchor='middle' font-size='60' font-family='Arial' font-weight='700' fill='%23e0c080'%3EData Pipelines%3C/text%3E%3C/svg%3E"
    }
  ];

  // Client-side sorting
  const sortedPosts = posts ? [...posts].sort((a, b) => {
    return new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime();
  }) : null;

  const displayPosts = (sortedPosts && sortedPosts.length > 0) ? sortedPosts : (isLoading ? [] : fallbackPosts);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold mb-4 sm:mb-6">Insights & <br /><span className="text-gradient-gold">Intelligence</span></h1>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl leading-normal sm:leading-relaxed">
            Thought leadership on AI automation, data strategy, and the future of work in the machine era.
          </p>
        </div>

        {error && (
          <Alert className="mb-12 border-primary/20 bg-primary/5">
            <Info className="h-4 w-4 text-primary" />
            <AlertTitle className="text-primary">Live Feed Synchronizing</AlertTitle>
            <AlertDescription className="text-muted-foreground">
              Showing featured articles from our archive while we optimize our real-time intelligence feed.
            </AlertDescription>
          </Alert>
        )}

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="bg-white/5 aspect-video rounded-2xl" />
                <div className="h-4 bg-white/5 rounded w-1/2" />
                <div className="h-8 bg-white/5 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {displayPosts.map((post: any) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                <article className="space-y-6">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={post.thumbnailUrl || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect width='800' height='500' fill='%231a1f1e'/%3E%3Ctext x='400' y='260' text-anchor='middle' font-size='48' font-family='Arial' font-weight='700' fill='%23c7a45a'%3EVisoma%3C/text%3E%3C/svg%3E"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint="ai tech"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {post.publicationDate ? format(new Date(post.publicationDate), 'MMM d, yyyy') : 'Recently'}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User className="w-3 h-3" />
                        {post.authorName}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.summary}
                    </p>
                    <div className="flex items-center text-primary font-bold text-sm">
                      Read Article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
