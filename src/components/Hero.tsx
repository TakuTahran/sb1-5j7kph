import React from 'react';
import { Rocket } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.1),rgba(0,0,0,0))] animate-pulse"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-8">
          <img
            src="/img.jpeg"
            alt="LIVE COIN"
            className="w-64 h-64 mx-auto animate-float"
          />
        </div>
        <h1 className="text-7xl font-bold mb-6 text-gradient animate-gradient">
          LIVE COIN
        </h1>
        <p className="text-2xl mb-8 text-gray-300">
          Experience the Future of Social Trading! 🚀
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://pump.fun/coin/GS6Zag6XdRANcXWJ6hoUxcbaH2ZpFwCfWV1uS7Hwpump"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-glow flex items-center gap-2"
          >
            <Rocket className="w-5 h-5" />
            Buy Now
          </a>
          <button className="px-8 py-4 border-2 border-purple-500 hover:bg-purple-500/20 rounded-full font-bold transition-all">
            Learn More
          </button>
        </div>
      </div>
    </header>
  );
}
