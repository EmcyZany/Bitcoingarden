import { motion } from 'framer-motion';
import { ArrowRight, Clock, Gift } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CryptoOffer } from '../types/crypto';
import { getStatusColor, getTypeLabel } from '../utils/formatDate';

interface CryptoCardProps {
  offer: CryptoOffer;
  index: number;
}

export function CryptoCard({ offer, index }: CryptoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Card className="bg-white hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-amber-300 h-full flex flex-col">
        <CardHeader>
          <div className="flex justify-between items-start mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(offer.status)}`}>
              {offer.status === 'expiring' ? '⏳ Expiring' : getTypeLabel(offer.type)}
            </span>
            {offer.reward && (
              <span className="flex items-center text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">
                <Gift className="w-3 h-3 mr-1" />
                {offer.reward}
              </span>
            )}
          </div>
          <CardTitle className="text-xl text-slate-800">{offer.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-slate-600 text-base leading-relaxed">
            {offer.description}
          </CardDescription>
          {offer.deadline && (
            <div className="flex items-center mt-4 text-sm text-slate-500">
              <Clock className="w-4 h-4 mr-2" />
              <span>{offer.deadline}</span>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
            {offer.type === 'faucet' ? 'Claim Now' : offer.type === 'staking' ? 'Start Staking' : 'Learn More'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
