"use client";

import Link from 'next/link';
import { Scale, CheckCircle2, Users, Brain, CreditCard, AlertTriangle, Wifi, XCircle, Wrench, Lock, BookOpen, RefreshCw, Mail } from 'lucide-react';

const sections = [
  {
    id: '1',
    title: 'Acceptance of Terms',
    icon: CheckCircle2,
    text: 'By accessing or using our website, you agree to these Terms.'
  },
  {
    id: '2',
    title: 'Services',
    icon: Brain,
    prefix: 'Visoma provides:',
    items: [
      'AI automation solutions',
      'Data annotation services',
      'Web scraping and data pipelines',
      'AI chatbot development',
      'GenAI integrations',
      'SEO Optimization',
      'Generative AD Copy',
      'Performance Monitoring',
      'Social Media Management',
      'Content Creation',
      'Market Intelligence',
      'Portfolio Optimization',
      'Risk Assessment',
      'Legal Services',
      'Data Collection',
      'Crowd Sourcing'
    ],
    note: 'All services are subject to agreement and project scope.'
  },
  {
    id: '3',
    title: 'User Responsibilities',
    icon: Users,
    prefix: 'You agree to:',
    items: [
      'Provide accurate information',
      'Use services legally',
      'Not misuse or exploit the platform',
      'Not attempt unauthorized access'
    ]
  },
  {
    id: '4',
    title: 'Intellectual Property',
    icon: BookOpen,
    text: 'All content on this website (design, text, graphics) is owned by Visoma.',
    subsections: [
      { label: 'Client deliverables:', items: ['Ownership depends on project agreement', 'Custom solutions may be licensed or transferred'] }
    ]
  },
  {
    id: '5',
    title: 'Payment Terms',
    icon: CreditCard,
    items: [
      'Payments must be made as per agreed milestones',
      'Delays may impact delivery timelines',
      'No refunds unless specified in agreement'
    ]
  },
  {
    id: '6',
    title: 'Limitation of Liability',
    icon: AlertTriangle,
    prefix: 'Visoma is not liable for:',
    items: [
      'Indirect or consequential damages',
      'Business losses',
      'Data loss due to external factors'
    ]
  },
  {
    id: '7',
    title: 'Service Availability',
    icon: Wifi,
    text: 'We strive for uptime but do not guarantee uninterrupted service.'
  },
  {
    id: '8',
    title: 'Termination',
    icon: XCircle,
    prefix: 'We may suspend or terminate services if:',
    items: [
      'Terms are violated',
      'Payments are not completed',
      'Misuse is detected'
    ]
  },
  {
    id: '9',
    title: 'Third-Party Tools',
    icon: Wrench,
    text: 'We may use third-party tools (AI APIs, cloud platforms). We are not responsible for their failures.'
  },
  {
    id: '10',
    title: 'Confidentiality',
    icon: Lock,
    text: 'All client data and project details are treated as confidential.'
  },
  {
    id: '11',
    title: 'Governing Law',
    icon: Scale,
    text: 'These Terms are governed by the laws of India.'
  },
  {
    id: '12',
    title: 'Changes to Terms',
    icon: RefreshCw,
    text: 'We may update these Terms. Continued use means acceptance.'
  },
  {
    id: '13',
    title: 'Contact',
    icon: Mail,
    email: 'info.visoma@gmail.com'
  }
];

export default function TermsOfServicePage() {
  const today = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">
            <Scale className="w-4 h-4" /> Legal
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold mb-4 sm:mb-6">
            Terms of <span className="text-gradient-gold">Service</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-normal sm:leading-relaxed max-w-2xl">
            Last Updated: {today}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-normal sm:leading-relaxed max-w-2xl mt-4">
            These Terms govern your use of visoma.in and services provided by Visoma.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8 sm:space-y-12">
          {sections.map((section) => (
            <div key={section.id} className="glass p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-primary/5">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <section.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold">
                  {section.id}. {section.title}
                </h2>
              </div>

              {'prefix' in section && section.prefix && (
                <p className="text-sm sm:text-base text-muted-foreground mb-3">{section.prefix}</p>
              )}

              {'text' in section && section.text && (
                <p className="text-sm sm:text-base text-muted-foreground leading-normal sm:leading-relaxed">
                  {section.text}
                </p>
              )}

              {'email' in section && section.email && (
                <p className="mt-2">
                  <a href={`mailto:${section.email}`} className="text-primary hover:underline text-sm sm:text-base font-medium">
                    {section.email}
                  </a>
                </p>
              )}

              {'items' in section && section.items && (
                <ul className="space-y-2 mt-2">
                  {(section.items as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {'subsections' in section && section.subsections && (
                <div className="mt-4 space-y-3">
                  {(section.subsections as any[]).map((sub, i) => (
                    <div key={i}>
                      <p className="text-sm sm:text-base font-bold text-foreground mb-2">{sub.label}</p>
                      <ul className="space-y-1.5">
                        {sub.items.map((item: string, j: number) => (
                          <li key={j} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {'note' in section && section.note && (
                <p className="text-xs sm:text-sm text-muted-foreground/70 mt-4 italic">{section.note}</p>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 text-center glass p-6 sm:p-8 rounded-2xl border-primary/10">
          <p className="text-xs sm:text-sm text-muted-foreground">
            For questions about these terms, contact us at{' '}
            <a href="mailto:info.visoma@gmail.com" className="text-primary hover:underline font-medium">info.visoma@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
