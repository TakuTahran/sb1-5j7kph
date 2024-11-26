import React from 'react';

export function Footer() {
  return (
    <footer className="py-12 bg-black/60">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About LIVE COIN</h3>
            <p className="text-gray-400">Experience the Future of Social Trading! 🚀</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400">Whitepaper</a></li>
              <li><a href="#" className="hover:text-purple-400">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="https://www.tiktok.com/@dominantdidit?_t=8rhf8jGJf95&_r=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-400"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/+ZDTt3UXFAbQyMTYx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-400"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 LIVE COIN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}