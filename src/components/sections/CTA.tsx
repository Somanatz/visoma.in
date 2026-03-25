
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[2rem] text-center relative overflow-hidden gold-glow border-primary/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8 relative z-10">
          Build Your AI Infrastructure <br /> With Visoma
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto relative z-10">
          Ready to scale your business with custom AI solutions? 
          Book a free strategy session with our technical experts today.
        </p>
        <div className="relative z-10">
          <Link href="/contact">
            <Button 
              className="relative overflow-hidden bg-primary text-[#0B0F0E] border-none gold-glow px-12 h-16 text-xl font-bold group transition-all duration-300 rounded-full"
            >
              {/* Animated Gradient Overlay to match Navbar */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#e0c080] to-primary bg-[length:200%_auto] animate-gradient-shift opacity-100 group-hover:scale-110 transition-transform duration-500" />
              <span className="relative z-10">Book Consultation</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
