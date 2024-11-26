import React from 'react';

const roadmapData = [
  {
    phase: "Phase 1",
    title: "Launch & Community",
    description: "Token launch, community building, and initial marketing"
  },
  {
    phase: "Phase 2",
    title: "Expansion",
    description: "Exchange listings, partnerships, and ecosystem development"
  },
  {
    phase: "Phase 3",
    title: "Innovation",
    description: "NFT marketplace, governance token, and DAO implementation"
  }
];

export function Roadmap() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">Roadmap</h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-purple-500/20"></div>
          {roadmapData.map((item, index) => (
            <div 
              key={index}
              className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-12`}
            >
              <div className="flex-1">
                <div className="p-6 rounded-2xl bg-purple-900/30 border border-purple-500/20 hover:border-purple-500 transition-all">
                  <h3 className="text-xl text-purple-400 mb-2">{item.phase}</h3>
                  <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}