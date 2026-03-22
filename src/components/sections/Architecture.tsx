
import { Layers } from 'lucide-react';

const layers = [
  { name: 'Applications', desc: 'Custom AI interfaces and business logic.' },
  { name: 'AI Models', desc: 'Specialized LLMs and fine-tuned predictive models.' },
  { name: 'Data Pipelines', desc: 'Scalable data streams and real-time processing.' },
  { name: 'Infrastructure', desc: 'Secure, high-availability cloud architecture.' },
];

export default function Architecture() {
  return (
    <section className="py-24 px-6 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">The Blueprint</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold mb-8">How Visoma Builds <br /> AI Infrastructure</h3>
          <p className="text-lg text-muted-foreground mb-12">
            We don't just build apps; we architect intelligence. Our layered approach ensures 
            scalability, reliability, and security at every level of the AI stack.
          </p>
          
          <div className="space-y-6">
            {layers.map((layer, idx) => (
              <div key={idx} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="mt-1 w-6 h-6 text-primary">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">{layer.name}</h5>
                  <p className="text-muted-foreground text-sm">{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg aspect-square relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-[60px]" />
          <div className="relative h-full w-full flex flex-col justify-center space-y-4">
             {layers.map((layer, idx) => (
               <div 
                 key={idx} 
                 className="glass py-6 px-10 rounded-xl text-center font-bold tracking-widest text-primary border-primary/20 animate-float"
                 style={{ animationDelay: `${idx * 1.5}s` }}
               >
                 {layer.name.toUpperCase()}
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
