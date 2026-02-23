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
      <main className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Latest Free Crypto Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cryptoOffers.map((offer) => (
              <CryptoCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}