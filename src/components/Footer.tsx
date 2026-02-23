import { Twitter, MessageCircle, Users } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Bitcoingarden.site</h3>
            <p className="text-sm leading-relaxed">
              Your trusted source for cryptocurrency news and free earning opportunities. 
              We curate the best airdrops, faucets, and staking rewards.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Latest Airdrops</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Active Faucets</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Staking Rewards</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Learn & Earn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Community</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 hover:bg-amber-500 hover:text-slate-900 transition-all p-3 rounded-lg">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-amber-500 hover:text-slate-900 transition-all p-3 rounded-lg">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-amber-500 hover:text-slate-900 transition-all p-3 rounded-lg">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p className="mb-2 text-amber-400">
            ⚠️ Not financial advice. Always do your own research before participating.
          </p>
          <p>&copy; 2025 Bitcoingarden.site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
