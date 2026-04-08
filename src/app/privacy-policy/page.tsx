"use client";

import Link from 'next/link';
import { Shield, Lock, Eye, Database, UserCheck, Globe, Baby, RefreshCw, Mail } from 'lucide-react';

const sections = [
  {
    id: '1',
    title: 'Information We Collect',
    icon: Database,
    content: [
      {
        subtitle: 'Personal Information',
        items: ['Name', 'Email address', 'Company name', 'Phone number', 'Project details']
      },
      {
        subtitle: 'Technical Data',
        items: ['IP address', 'Browser type', 'Device information', 'Pages visited', 'Time spent on site']
      },
      {
        subtitle: 'Cookies & Tracking',
        text: 'We use cookies to improve user experience and analyze website traffic.'
      }
    ]
  },
  {
    id: '2',
    title: 'How We Use Your Information',
    icon: Eye,
    items: [
      'Provide and manage our services',
      'Respond to inquiries and support requests',
      'Improve website functionality and user experience',
      'Send updates, marketing, or service-related communication',
      'Analyze usage patterns'
    ]
  },
  {
    id: '3',
    title: 'Data Sharing and Disclosure',
    icon: Globe,
    highlight: 'We do NOT sell your personal data.',
    items: [
      'Service providers (hosting, analytics, email tools)',
      'Legal authorities when required by law',
      'Internal teams for project execution'
    ]
  },
  {
    id: '4',
    title: 'Data Security',
    icon: Lock,
    items: [
      'Secure servers',
      'Encryption protocols',
      'Access control systems'
    ],
    note: 'However, no system is 100% secure.'
  },
  {
    id: '5',
    title: 'Data Retention',
    icon: Database,
    items: [
      'Service delivery',
      'Legal obligations',
      'Business purposes'
    ],
    prefix: 'We retain your data only as long as necessary for:'
  },
  {
    id: '6',
    title: 'Your Rights',
    icon: UserCheck,
    items: [
      'Access your data',
      'Request correction',
      'Request deletion',
      'Withdraw consent'
    ]
  },
  {
    id: '7',
    title: 'Third-Party Services',
    icon: Globe,
    text: 'Our website may contain links to third-party platforms. We are not responsible for their privacy practices.'
  },
  {
    id: '8',
    title: "Children's Privacy",
    icon: Baby,
    text: 'Our services are not intended for individuals under 18 years of age.'
  },
  {
    id: '9',
    title: 'Changes to This Policy',
    icon: RefreshCw,
    text: 'We may update this Privacy Policy periodically. Changes will be posted on this page.'
  },
  {
    id: '10',
    title: 'Contact',
    icon: Mail,
    email: 'info.visoma@gmail.com'
  }
];

export default function PrivacyPolicyPage() {
  const today = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">
            <Shield className="w-4 h-4" /> Legal
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold mb-4 sm:mb-6">
            Privacy <span className="text-gradient-gold">Policy</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-normal sm:leading-relaxed max-w-2xl">
            Last Updated: {today}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-normal sm:leading-relaxed max-w-2xl mt-4">
            Visoma (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the website visoma.in. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
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

              {'highlight' in section && section.highlight && (
                <p className="text-primary font-bold text-sm sm:text-base mb-4 bg-primary/5 px-4 py-2 rounded-lg inline-block">
                  {section.highlight}
                </p>
              )}

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

              {'content' in section && section.content && (
                <div className="space-y-6">
                  {(section.content as any[]).map((block, i) => (
                    <div key={i}>
                      <h3 className="text-sm sm:text-base font-bold mb-2 text-foreground">
                        {String.fromCharCode(97 + i)}) {block.subtitle}
                      </h3>
                      {block.items && (
                        <ul className="space-y-1.5">
                          {block.items.map((item: string, j: number) => (
                            <li key={j} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {block.text && (
                        <p className="text-sm sm:text-base text-muted-foreground">{block.text}</p>
                      )}
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
            For questions about this policy, contact us at{' '}
            <a href="mailto:info.visoma@gmail.com" className="text-primary hover:underline font-medium">info.visoma@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
