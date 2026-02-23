import { CryptoOffer } from '../types/crypto';

export const cryptoOffers: CryptoOffer[] = [
  {
    id: 1,
    title: "Bitcoin Faucet Daily Claim",
    description: "Claim up to 0.001 BTC every 24 hours. No KYC required. Instant payout to your wallet.",
    type: 'faucet',
    status: 'active',
    link: "#",
    reward: "0.001 BTC",
    deadline: "Daily"
  },
  {
    id: 2,
    title: "Solana NFT Airdrop",
    description: "Mint a free Solana NFT from the upcoming DeFi protocol. 50,000 claimed so far. Limited supply.",
    type: 'airdrop',
    status: 'expiring',
    link: "#",
    reward: "1 NFT",
    deadline: "3 days"
  },
  {
    id: 3,
    title: "Stake ETH 2.0 – 5% APY",
    description: "Earn passive income by staking ETH. Minimum 0.1 ETH. No lockup period required.",
    type: 'staking',
    status: 'active',
    link: "#",
    reward: "5% APY",
    deadline: "Ongoing"
  },
  {
    id: 4,
    title: "Complete Learn-to-Earn Tasks",
    description: "Watch short crypto tutorials and earn tokens. New tasks added weekly. Withdraw anytime.",
    type: 'task',
    status: 'active',
    link: "#",
    reward: "Varies",
    deadline: "Weekly"
  },
  {
    id: 5,
    title: "Polygon Airdrop Quest",
    description: "Complete simple on-chain tasks to qualify for the upcoming airdrop. Gas fees reimbursed.",
    type: 'airdrop',
    status: 'upcoming',
    link: "#",
    reward: "TBD",
    deadline: "2 weeks"
  },
  {
    id: 6,
    title: "USDT Faucet Instant",
    description: "Claim 5 USDT every 6 hours. Complete a quick captcha verification. No withdrawal limits.",
    type: 'faucet',
    status: 'active',
    link: "#",
    reward: "5 USDT",
    deadline: "Every 6h"
  }
];

export const tickerMessages = [
  "🚨 Bitcoin Faucet Live – 0.001 BTC/hour",
  "🚨 Solana Airdrop Ends in 3 Days",
  "🚨 New Ethereum Task Platform Open",
  "🚨 Polygon Quest Launching Soon",
  "🚨 USDT Faucet Instant Payouts"
];
