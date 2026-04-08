
"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useForm, Controller } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Loader2, CheckCircle2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ────────────────────────────────────────────────
// You MUST set these values after creating your EmailJS account.
// 1. Sign up at https://www.emailjs.com (free: 200 emails/month)
// 2. Add Gmail service (info.visoma@gmail.com) under "Email Services"
// 3. Create TWO email templates (see emailjs_templates.md for HTML)
// 4. Replace the IDs below with your actual IDs
const EMAILJS_SERVICE_ID = 'service_visoma';     // Your EmailJS Service ID
const EMAILJS_USER_TPL = 'template_user';      // User confirmation template ID
const EMAILJS_VISOMA_TPL = 'template_visoma';    // Visoma notification template ID
const EMAILJS_PUBLIC_KEY = 'l0C8q6JrXBTjb6pDC';     // Your EmailJS Public Key

// Category-specific email subjects
const emailSubjects: Record<string, { user: string; visoma: string }> = {
  'General Inquiry': {
    user: "We've Received Your Inquiry — Visoma",
    visoma: '📨 New General Inquiry from',
  },
  'Service Request': {
    user: 'Your Service Request is Confirmed — Visoma',
    visoma: '🔧 New Service Request from',
  },
  'General Support': {
    user: 'Support Request Received — Visoma',
    visoma: '🛟 New Support Request from',
  },
};

interface FormData {
  inquiryType: string;
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, reset, control } = useForm<FormData>({
    defaultValues: {
      inquiryType: 'General Inquiry',
      name: '',
      email: '',
      company: '',
      message: ''
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    const subjects = emailSubjects[data.inquiryType] || emailSubjects['General Inquiry'];
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    // Common template parameters
    const baseParams = {
      from_name: data.name,
      from_email: data.email,
      company: data.company || 'Not specified',
      inquiry_type: data.inquiryType,
      message: data.message,
      timestamp: timestamp,
    };

    try {
      // 1. Send confirmation email TO THE USER
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_USER_TPL,
        {
          ...baseParams,
          to_email: data.email,
          subject: subjects.user,
        },
        EMAILJS_PUBLIC_KEY
      );

      // 2. Send notification email TO VISOMA
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_VISOMA_TPL,
        {
          ...baseParams,
          to_email: 'info.visoma@gmail.com',
          subject: `${subjects.visoma} ${data.name}`,
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      toast({
        title: "Message Sent Successfully! ✉️",
        description: `We've sent a confirmation to ${data.email}. Our team will respond within 24 hours.`,
      });
      reset();
      setTimeout(() => setIsSuccess(false), 4000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at info.visoma@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold mb-4 sm:mb-6">Let's Build the Future</h1>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl leading-normal sm:leading-relaxed">
            Get in touch to discuss your AI, Data, or Automation needs.
            Select your inquiry type below to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
          <div className="glass p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border-primary/10 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">

              <div className="space-y-2">
                <Label htmlFor="inquiryType">Inquiry Type</Label>
                <Controller
                  name="inquiryType"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="bg-white/5 border-white/10 h-11 sm:h-12">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" {...register('name', { required: true })} placeholder="John Doe" className="bg-white/5 border-white/10 h-11 sm:h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register('email', { required: true })} placeholder="john@company.com" className="bg-white/5 border-white/10 h-11 sm:h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" {...register('company')} placeholder="Tech Solutions Inc." className="bg-white/5 border-white/10 h-11 sm:h-12" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" {...register('message', { required: true })} placeholder="How can we help you architect your next solution?" className="bg-white/5 border-white/10 min-h-[140px] sm:min-h-[180px]" />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full h-12 sm:h-14 bg-primary text-primary-foreground text-base sm:text-lg font-bold gold-glow disabled:opacity-70 transition-all"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Sent Successfully!
                  </span>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>

          <div className="space-y-8 sm:space-y-12 flex flex-col justify-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1">Email Us</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Active 24/7: <a href="mailto:info.visoma@gmail.com" className="text-primary hover:underline transition-all">info.visoma@gmail.com</a></p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1">Location</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Visoma HQ</p>
                  <p className="text-sm sm:text-base text-muted-foreground">Office Opening Soon</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1">Call Us</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Technical Strategy: +91 709 339 3738</p>
                  <p className="text-sm sm:text-base text-muted-foreground">Mon-Fri, 9am - 6pm IST</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 sm:p-8 rounded-xl sm:rounded-2xl border-white/5 bg-secondary/10">
              <h4 className="font-bold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Why Visoma?
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
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
