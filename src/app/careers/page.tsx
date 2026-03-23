
"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, MapPin, Clock, Sparkles, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const jobs = [
  {
    title: 'Senior AI Engineer',
    type: 'Full-time',
    location: 'Remote',
    category: 'Engineering',
  },
  {
    title: 'Data Science Intern',
    type: 'Internship',
    location: 'Remote / Bangalore',
    category: 'Internships',
  },
  {
    title: 'SEO & Growth Strategist',
    type: 'Full-time',
    location: 'Remote',
    category: 'Marketing',
  },
  {
    title: 'AI Product Intern',
    type: 'Internship',
    location: 'Remote',
    category: 'Internships',
  },
];

export default function CareersPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-8">Join the <br /> <span className="text-gradient-gold">Visoma Team</span></h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are looking for builders, dreamers, and technical experts to architect the next 
            generation of intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="glass p-8 rounded-3xl text-center">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation First</h3>
            <p className="text-sm text-muted-foreground">Work on cutting-edge AI pipelines and RAG architectures.</p>
          </div>
          <div className="glass p-8 rounded-3xl text-center">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Remote-First Culture</h3>
            <p className="text-sm text-muted-foreground">Join a global team of elite engineers and data scientists.</p>
          </div>
          <div className="glass p-8 rounded-3xl text-center">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Internship Program</h3>
            <p className="text-sm text-muted-foreground">Kickstart your career with hands-on exposure to real AI projects.</p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-headline font-bold mb-8">Open Roles</h2>
          <div className="grid grid-cols-1 gap-4">
            {jobs.map((job, idx) => (
              <Card key={idx} className="glass border-white/5 hover:border-primary/20 transition-all">
                <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-6 w-full">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{job.title}</h4>
                      <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {job.type}</span>
                        <Badge variant="outline" className="border-primary/20 text-primary">{job.category}</Badge>
                      </div>
                    </div>
                  </div>
                  <Link href="/contact" className="w-full md:w-auto">
                    <Button className="w-full md:w-auto bg-primary text-primary-foreground gold-glow">Apply Now</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
