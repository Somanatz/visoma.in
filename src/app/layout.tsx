import type {Metadata} from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Toaster } from '@/components/ui/toaster';
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister';

export const metadata: Metadata = {
  metadataBase: new URL('https://visoma.in'),
  title: {
    default: 'Visoma | Build Intelligent AI Systems',
    template: '%s | Visoma',
  },
  description: 'Visoma helps organizations build AI automation, data pipelines, and scalable machine learning systems.',
  keywords: ['AI Services', 'Machine Learning', 'Data Engineering', 'GenAI', 'Web Scraping', 'SEO Intelligence', 'Visoma'],
  authors: [{ name: 'Visoma', url: 'https://visoma.in' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://visoma.in',
    siteName: 'Visoma',
    title: 'Visoma | Build Intelligent AI Systems',
    description: 'Visoma helps organizations build AI automation, data pipelines, and scalable machine learning systems.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visoma | Build Intelligent AI Systems',
    description: 'Visoma helps organizations build AI automation, data pipelines, and scalable machine learning systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <FirebaseClientProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
          <ServiceWorkerRegister />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
