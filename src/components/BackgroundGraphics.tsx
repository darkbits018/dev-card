import React from 'react';
import { 
  Code2, 
  Database, 
  Beaker, 
  GitBranch, 
  Server, 
  Cloud, 
  Brain, 
  Cpu, 
  Terminal, 
  Layers,
  Shield,
  Wifi,
  Binary
} from 'lucide-react';

export function BackgroundGraphics() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 dark:opacity-5">
      {/* Original icons with adjusted positions */}
      <Code2 className="absolute top-10 left-10 w-16 h-16 text-blue-500 animate-float" />
      <Database className="absolute top-20 right-20 w-12 h-12 text-green-500 animate-float-delayed" />
      <Beaker className="absolute bottom-20 left-1/4 w-14 h-14 text-purple-500 animate-float" />
      <GitBranch className="absolute top-1/3 right-1/4 w-10 h-10 text-orange-500 animate-float-delayed" />
      <Server className="absolute bottom-10 right-10 w-16 h-16 text-red-500 animate-float" />
      
      {/* New icons */}
      <Cloud className="absolute top-1/2 left-16 w-12 h-12 text-cyan-500 animate-float" />
      <Brain className="absolute top-1/4 right-1/3 w-14 h-14 text-pink-500 animate-float-delayed" />
      <Cpu className="absolute bottom-1/3 right-20 w-10 h-10 text-indigo-500 animate-float" />
      <Terminal className="absolute top-2/3 left-1/3 w-12 h-12 text-emerald-500 animate-float-delayed" />
      <Layers className="absolute bottom-1/4 right-1/2 w-16 h-16 text-amber-500 animate-float" />
      <Shield className="absolute top-40 left-1/2 w-10 h-10 text-teal-500 animate-float-delayed" />
      <Wifi className="absolute bottom-40 left-20 w-12 h-12 text-rose-500 animate-float" />
      <Binary className="absolute top-2/3 right-32 w-14 h-14 text-violet-500 animate-float-delayed" />
    </div>
  );
}