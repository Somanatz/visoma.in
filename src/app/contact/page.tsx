
"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useForm, Controller } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ContactPage() {
  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: {
      inquiryType: 'General Inquiry',
      name: '',
      email: '',
      company: '',
      message: ''
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Message Sent",
      description: `We've received your ${data.inquiryType.toLowerCase()} and will get back to you shortly.`,
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
            Select your inquiry type below to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="glass p-8 md:p-12 rounded-3xl border-primary/10 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="space-y-2">
                <Label htmlFor="inquiryType">Inquiry Type</Label>
                <Controller
                  name="inquiryType"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="bg-white/5 border-white/10 h-12">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                        <SelectItem value="Service Request">Service Request</SelectItem>
                        <SelectItem value="General Support">General Support</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" {...register('name', { required: true })} placeholder="John Doe" className="bg-white/5 border-white/10 h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register('email', { required: true })} placeholder="john@company.com" className="bg-white/5 border-white/10 h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" {...register('company')} placeholder="Tech Solutions Inc." className="bg-white/5 border-white/10 h-12" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" {...register('message', { required: true })} placeholder="How can we help you architect your next solution?" className="bg-white/5 border-white/10 min-h-[180px]" />
              </div>

              <Button type="submit" className="w-full h-14 bg-primary text-primary-foreground text-lg font-bold gold-glow">
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
                  <p className="text-muted-foreground">General Enquiries: <a href="mailto:info@visoma.in" className="text-primary hover:underline transition-all">info@visoma.in</a></p>
                  <p className="text-muted-foreground">Support: <a href="mailto:support@visoma.in" className="text-primary hover:underline transition-all">support@visoma.in</a></p>
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

            <div className="glass p-8 rounded-2xl border-white/5 bg-secondary/10">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Why Visoma?
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <span>Deep expertise in LLMs and RAG systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>Scalable data pipelines built on AWS/GCP</span>
                </li>
                <li className="flex items-center space-x-2">
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
