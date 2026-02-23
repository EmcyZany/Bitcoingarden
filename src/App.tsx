import { cryptoOffers } from './data/cryptoOffers';
import { Hero } from './components/Hero';
import { NewsTicker } from './components/NewsTicker';
import { CryptoCard } from './components/CryptoCard';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <NewsTicker />
      <Hero />
      <main className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Latest Free Crypto Opportunities
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover verified ways to earn cryptocurrency without investment. 
              Updated daily with new opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptoOffers.map((offer, index) => (
              <CryptoCard key={offer.id} offer={offer} index={index} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Don't Miss New Opportunities
              </h3>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Get notified when new airdrops and earning opportunities are added. 
                Join thousands of crypto enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                />
                <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
