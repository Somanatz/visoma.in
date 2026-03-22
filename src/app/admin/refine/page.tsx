
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { contentSummarizer, ContentSummarizerOutput } from '@/ai/flows/content-summarizer-flow';
import { Loader2, Sparkles, Copy, CheckCircle2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function AdminRefinePage() {
  const [content, setContent] = useState('');
  const [result, setResult] = useState<ContentSummarizerOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState<'summary' | 'tagline' | null>(null);

  const handleRefine = async () => {
    if (!content.trim()) return;
    setIsLoading(true);
    try {
      const output = await contentSummarizer({ rawContent: content });
      setResult(output);
      toast({
        title: "Content Refined",
        description: "Your summary and tagline have been generated successfully.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to refine content. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, type: 'summary' | 'tagline') => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-[#0B0F0E]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-headline font-bold mb-4 flex items-center gap-3">
            <Sparkles className="text-primary w-8 h-8" />
            Visoma Refiner
          </h1>
          <p className="text-muted-foreground">
            Internal AI tool to generate premium summaries and taglines for services and case studies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="text-xl">Raw Content</CardTitle>
              <CardDescription>Paste your draft or notes here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Textarea 
                  placeholder="E.g., We build automated chatbots for banks. It uses GPT and helps them reduce human call time by 50%. It's secure and fast."
                  className="min-h-[200px] bg-white/5 border-white/10"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <Button 
                onClick={handleRefine} 
                className="w-full bg-primary text-primary-foreground gold-glow h-12"
                disabled={isLoading || !content.trim()}
              >
                {isLoading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 w-4 h-4" />}
                Refine for Visoma Brand
              </Button>
            </CardContent>
          </Card>

          {result && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Card className="glass border-primary/30 gold-glow">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl text-primary">Generated Summary</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => copyToClipboard(result.summary, 'summary')}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {copied === 'summary' ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed italic text-foreground/90">
                    "{result.summary}"
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-accent/30">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl text-accent">Compelling Tagline</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => copyToClipboard(result.tagline, 'tagline')}
                    className="text-muted-foreground hover:text-accent"
                  >
                    {copied === 'tagline' ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-headline font-bold text-gradient-gold">
                    {result.tagline}
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
