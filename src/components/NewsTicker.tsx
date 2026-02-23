import { motion } from 'framer-motion';
import { tickerMessages } from '../data/cryptoOffers';

export function NewsTicker() {
  return (
    <div className="bg-red-600 text-white overflow-hidden py-3 px-4 border-b-4 border-red-700">
      <motion.div
        className="whitespace-nowrap flex gap-8"
        animate={{
          x: [0, -1000]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...tickerMessages, ...tickerMessages, ...tickerMessages].map((msg, index) => (
          <span key={index} className="text-sm font-semibold inline-block">
            {msg}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
