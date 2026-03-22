
"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Inquiry Sent",
      description: "We've received your message and will get back to you within 24 hours.",
    });
    reset();
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-headline font-bold mb-6">Let's Build the Future</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Get in touch to discuss your AI, Data, or Automation needs. 
            We typically respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="glass p-8 md:p-12 rounded-3xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" {...register('name', { required: true })} placeholder="John Doe" className="bg-white/5 border-white/10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register('email', { required: true })} placeholder="john@company.com" className="bg-white/5 border-white/10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" {...register('company')} placeholder="Tech Solutions Inc." className="bg-white/5 border-white/10" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea id="message" {...register('message', { required: true })} placeholder="Tell us about your project..." className="bg-white/5 border-white/10 min-h-[150px]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget</Label>
                  <Input id="budget" {...register('budget')} placeholder="$50k - $100k" className="bg-white/5 border-white/10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <Input id="timeline" {...register('timeline')} placeholder="3-6 months" className="bg-white/5 border-white/10" />
                </div>
              </div>

              <Button type="submit" className="w-full h-14 bg-primary text-primary-foreground text-lg gold-glow">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-12 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">General Enquiries: <a href="mailto:info@visoma.in" className="text-primary">info@visoma.in</a></p>
                  <p className="text-muted-foreground">Support: <a href="mailto:support@visoma.in" className="text-primary">support@visoma.in</a></p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Location</h3>
                  <p className="text-muted-foreground">Visoma HQ</p>
                  <p className="text-muted-foreground">Bangalore, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Call Us</h3>
                  <p className="text-muted-foreground">Technical Strategy: +91 800 123 4567</p>
                  <p className="text-muted-foreground">Mon-Fri, 9am - 6pm IST</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h4 className="font-bold mb-4">Why Visoma?</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span>Deep expertise in LLMs and RAG systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span>Scalable data pipelines built on AWS/GCP</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span>Proven track record with high-growth AI startups</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
