import Hero from '@/components/sections/Hero';
import Trust from '@/components/sections/Trust';
import Services from '@/components/sections/Services';
import Architecture from '@/components/sections/Architecture';
import CTA from '@/components/sections/CTA';
import FreelancerCTA from '@/components/sections/FreelancerCTA';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Trust />
      <Architecture />
      <Services />
      
      <Testimonials />

      <FreelancerCTA />
      <CTA />
    </div>
  );
}
