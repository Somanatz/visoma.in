import Hero from '@/components/sections/Hero';
import Trust from '@/components/sections/Trust';
import Services from '@/components/sections/Services';
import Architecture from '@/components/sections/Architecture';
import CTA from '@/components/sections/CTA';
import FreelancerCTA from '@/components/sections/FreelancerCTA';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Trust />
      <Architecture />
      <Services />
      
      {/* Testimonials Sample */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-12">Success Stories</h2>
          <blockquote className="text-2xl md:text-3xl font-headline italic leading-relaxed text-foreground">
            "Visoma helped us scale our AI data pipeline and build reliable datasets 
            that reduced our training cycles by 40%. Their technical expertise is unmatched."
          </blockquote>
          <div className="mt-8">
            <p className="font-bold text-lg">CTO, AI Startup</p>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">Enterprise SaaS Partner</p>
          </div>
        </div>
      </section>

      <FreelancerCTA />
      <CTA />
    </div>
  );
}
