import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Toaster } from '@/components/ui/toaster';
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister';

export const metadata: Metadata = {
  metadataBase: new URL('https://visoma.in'),
  icons: {
    icon: '/favicon.ico',
  },
  title: {
    default: 'Visoma | Build Intelligent AI Systems and Solutions',
    template: '%s | Visoma',
  },
  description:
    'Visoma helps organizations build AI Automation, Data Pipelines, SEO Services, Digital Marketing, Crowdsourcing, and Legal Support.',
  keywords: [
    'AI Services',
    'Chatbot Development',
    'OpenAI API Integration',
    'Machine Learning',
    'Data Engineering',
    'GenAI',
    'Web Scraping',
    'Web Development',
    'Website Create',
    'SEO Intelligence',
    'Legal Support',
    'Social Media Support',
    'Content Creations',
    'Meta Ads',
    'Google Ads',
    'LinkedIn Ads',
    'Visoma in',
    'Visoma',
  ],
  authors: [{ name: 'Visoma', url: 'https://visoma.in' }],

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://visoma.in',
    siteName: 'Visoma',
    title: 'Visoma | Build Intelligent AI Systems and Solutions',
    description:
      'Visoma helps organizations build AI Automation, Data Pipelines, SEO Services, Digital Marketing, Crowdsourcing, and Legal Support.',
    images: [
      {
        url: 'https://visoma.in/logo.png', // 🔥 IMPORTANT
        width: 512,
        height: 512,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Visoma | Build Intelligent AI Systems and Solutions',
    description:
      'Visoma helps organizations build AI Automation, Data Pipelines, SEO Services, Digital Marketing, Crowdsourcing, and Legal Support.',
    images: ['https://visoma.in/logo.png'], // 🔥 IMPORTANT
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* 🔥 ORGANIZATION STRUCTURED DATA (CRITICAL FOR LOGO IN GOOGLE) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Visoma',
              url: 'https://visoma.in',
              logo: 'https://visoma.in/logo.png',
            }),
          }}
        />
      </head>

      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <FirebaseClientProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
          <ServiceWorkerRegister />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}