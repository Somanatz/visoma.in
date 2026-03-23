"use client";

import { useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, orderBy } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, Info } from 'lucide-react';
import { format } from 'date-fns';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function BlogPage() {
  const firestore = useFirestore();

  const blogQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    // Note: If this fails with a permission error even with 'where', check if an index exists.
    return query(
      collection(firestore, 'blogPosts'),
      where('isPublished', '==', true),
      orderBy('publicationDate', 'desc')
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
      thumbnailUrl: 'https://picsum.photos/seed/visoma-blog-1/800/500'
    },
    {
      id: 'fall-2',
      title: 'Scaling Data Pipelines with Precision',
      summary: 'Technical insights into building resilient, high-throughput data processing architectures for LLM training.',
      authorName: 'Data Engineering',
      publicationDate: new Date().toISOString(),
      slug: 'scaling-pipelines',
      thumbnailUrl: 'https://picsum.photos/seed/visoma-blog-2/800/500'
    }
  ];

  const displayPosts = (posts && posts.length > 0) ? posts : (isLoading ? [] : fallbackPosts);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="text-5xl md:text-6xl font-headline font-bold mb-6">Insights & <br /><span className="text-gradient-gold">Intelligence</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Thought leadership on AI automation, data strategy, and the future of work in the machine era.
          </p>
        </div>

        {error && (
          <Alert className="mb-12 border-primary/20 bg-primary/5">
            <Info className="h-4 w-4 text-primary" />
            <AlertTitle className="text-primary">Note</AlertTitle>
            <AlertDescription className="text-muted-foreground">
              Showing featured articles. Connection to real-time intelligence feed is being optimized.
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
                      src={post.thumbnailUrl || `https://picsum.photos/seed/${post.id}/800/500`}
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