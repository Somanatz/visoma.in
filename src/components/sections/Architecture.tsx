"use client";

import React, { useState, useRef } from 'react';
import { Cpu, Database, Cloud, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const pipelineNodes = [
  {
    id: 'apps',
    title: 'Applications',
    desc: 'Custom user-facing AI interfaces and business logic.',
    icon: Zap,
    color: 'from-blue-500/20 to-cyan-400/20',
    iconColor: 'text-blue-600',
    glow: 'rgba(59, 130, 246, 0.15)',
  },
  {
    id: 'models',
    title: 'AI Models',
    desc: 'Specialized LLMs and fine-tuned predictive models.',
    icon: Cpu,
    color: 'from-purple-500/20 to-blue-400/20',
    iconColor: 'text-purple-600',
    glow: 'rgba(168, 85, 247, 0.15)',
  },
  {
    id: 'data',
    title: 'Data Pipelines',
    desc: 'Scalable data streams and real-time processing.',
    icon: Database,
    color: 'from-cyan-500/20 to-emerald-400/20',
    iconColor: 'text-cyan-600',
    glow: 'rgba(16, 185, 129, 0.15)',
  },
  {
    id: 'infra',
    title: 'Infrastructure',
    desc: 'Secure, high-availability cloud architecture.',
    icon: Cloud,
    color: 'from-primary/20 to-primary/10',
    iconColor: 'text-primary',
    glow: 'rgba(199, 164, 90, 0.15)',
  },
];

const NodeCard = ({ node }: { node: typeof pipelineNodes[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="relative z-10 w-full lg:w-64 shrink-0"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <div
        className={cn(
          "relative p-8 rounded-[2.5rem] bg-white border border-primary/10 transition-all duration-300 ease-out flex flex-col items-center text-center shadow-sm",
          isHovered ? "shadow-2xl scale-105" : ""
        )}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          boxShadow: isHovered ? `0 20px 50px -10px ${node.glow}` : 'none',
          borderColor: isHovered ? 'rgba(199, 164, 90, 0.3)' : 'rgba(199, 164, 90, 0.1)',
        }}
      >
        <div className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform bg-gradient-to-br",
          node.color,
          node.iconColor
        )}>
          <node.icon className="w-8 h-8" />
        </div>
        
        <h4 className="text-xl font-bold uppercase tracking-wider mb-2 text-foreground">{node.title}</h4>
        
        <div className={cn(
          "text-sm text-muted-foreground transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-70"
        )}>
          {node.desc}
        </div>
      </div>
    </div>
  );
};

const FlowConnector = ({ orientation = 'horizontal' }: { orientation?: 'horizontal' | 'vertical' }) => {
  return (
    <div className={cn(
      "flex items-center justify-center shrink-0 overflow-hidden",
      orientation === 'horizontal' ? "w-12 xl:w-24 h-[2px]" : "w-[2px] h-12"
    )}>
      {orientation === 'horizontal' ? (
        <div className="w-full h-full bg-primary/10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent w-full animate-flow-horizontal" />
        </div>
      ) : (
        <div className="w-full h-full bg-primary/10 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-transparent h-full animate-flow-vertical" />
        </div>
      )}
    </div>
  );
};

export default function Architecture() {
  return (
    <section className="pt-20 pb-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-primary mb-4">The AI Blueprint</h2>
          <h3 className="text-4xl md:text-6xl font-headline font-bold text-gradient-gold mb-6 py-2 leading-tight">
            End-to-End System Intelligence
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the flow of high-performance architecture, from the raw power of infrastructure to intelligent user applications.
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          {pipelineNodes.map((node, index) => (
            <React.Fragment key={node.id}>
              <NodeCard node={node} />
              {index < pipelineNodes.length - 1 && <FlowConnector orientation="horizontal" />}
            </React.Fragment>
          ))}
        </div>

        <div className="lg:hidden flex flex-col items-center justify-center">
          {pipelineNodes.map((node, index) => (
            <React.Fragment key={node.id}>
              <NodeCard node={node} />
              {index < pipelineNodes.length - 1 && <FlowConnector orientation="vertical" />}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-8">System Status: Fully Operational</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="px-6 py-2 rounded-full border border-primary/10 bg-white shadow-sm flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground">Real-time Data Flowing</span>
            </div>
            <div className="px-6 py-2 rounded-full border border-primary/10 bg-white shadow-sm flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground">Global Scale Optimized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}