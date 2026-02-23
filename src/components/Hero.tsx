import { motion } from 'framer-motion';
import { ArrowRight, Bitcoin, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';

export function Hero() {
  return (
    <section className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-amber-500/20 p-4 rounded-2xl">
              <Bitcoin className="w-12 h-12 text-amber-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Latest Crypto News &<br />
            <span className="text-amber-400">Free Earning Opportunities</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Stay ahead of the market. Discover airdrops, faucets, and staking rewards. 
            No signup required. Start earning today.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-6 px-10 text-lg rounded-xl shadow-lg shadow-amber-500/25">
              View Latest Airdrops
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white py-6 px-10 text-lg rounded-xl">
              <Zap className="mr-2 w-5 h-5" />
              Quick Start Guide
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { label: 'Active Offers', value: '50+' },
            { label: 'Total Distributed', value: '$2.5M' },
            { label: 'Happy Users', value: '15K+' },
            { label: 'Daily Updates', value: '24/7' }
          ].map((stat, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
