import React from 'react';
import { Music, Send } from 'lucide-react';

const socialLinks = [
  {
    icon: Music,
    label: "TikTok",
    href: "https://www.tiktok.com/@dominantdidit?_t=8rhf8jGJf95&_r=1"
  },
  {
    icon: Send,
    label: "Telegram",
    href: "https://t.me/+ZDTt3UXFAbQyMTYx"
  }
];

export function Community() {
  return (
    <section className="py-20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-16">Join Our Community</h2>
        <div className="flex justify-center gap-12">
          {socialLinks.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="p-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:scale-110 transition-all">
                <item.icon className="w-8 h-8" />
              </div>
              <span className="text-gray-400">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}