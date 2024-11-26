import React from 'react';
import { TrendingUp, Zap, Sparkles } from 'lucide-react';

const tokenomicsData = [
  {
    icon: TrendingUp,
    title: "1B Total Supply",
    description: "Fixed supply, no inflation"
  },
  {
    icon: Zap,
    title: "Fair Launch",
    description: "95% to community, 5% to development"
  },
  {
    icon: Sparkles,
    title: "3% Rewards",
    description: "Automatic rewards for holders"
  }
];

export function Tokenomics() {
  return (
    <section className="py-20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">Tokenomics</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tokenomicsData.map((item, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500 transition-all"
            >
              <item.icon className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}