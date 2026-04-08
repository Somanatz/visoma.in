"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sparkles, ServerOff } from 'lucide-react';
import Link from 'next/link';

export default function AdminRefinePage() {
  return (
    <div className="pt-32 pb-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-headline font-bold mb-4 flex items-center gap-3 text-foreground">
            <Sparkles className="text-primary w-8 h-8" />
            Visoma Refiner
          </h1>
          <p className="text-muted-foreground">
            Internal AI tool to generate premium summaries and taglines for services and case studies.
          </p>
        </div>

        <Card className="glass border-primary/10">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <ServerOff className="w-16 h-16 text-muted-foreground/50" />
            </div>
            <CardTitle className="text-2xl">Server Runtime Required</CardTitle>
            <CardDescription className="text-base mt-2">
              The AI Content Refiner requires a Node.js server runtime and is not available on the static-hosted version of this site.
              To use this feature, run the project locally with <code className="bg-muted px-2 py-1 rounded text-sm">npm run dev</code>.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Link href="/">
              <Button className="bg-primary text-primary-foreground gold-glow h-12 px-8">
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
