
import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'IT Services & Internships', href: '/services' },
      { name: 'SEO & Growth', href: '/services' },
      { name: 'Financial Intelligence', href: '/services' },
      { name: 'Legal Tech', href: '/services' },
      { name: 'Data Services', href: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Freelance Portal', href: '/auth' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative h-12 w-12">
                <Image 
                  src="/logo.png" 
                  alt="Visoma Logo" 
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="text-3xl font-headline font-bold tracking-wider text-gradient-gold">
                VISOMA
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6 mt-4">
              Building the future of AI infrastructure. Specializing in data pipelines, 
              automation systems, and scalable machine learning for modern enterprises.
            </p>
            <div className="text-sm font-medium">
              <span className="text-muted-foreground">Email: </span>
              <a href="mailto:info@visoma.in" className="text-primary hover:underline">info@visoma.in</a>
            </div>
          </div>
          
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-headline font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="bg-white/5 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Visoma. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-medium tracking-wide">visoma.in</p>
        </div>
      </div>
    </footer>
  );
}
