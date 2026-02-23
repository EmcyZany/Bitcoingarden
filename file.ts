export interface CryptoOffer {
  id: number;
  title: string;
  description: string;
  type: 'airdrop' | 'faucet' | 'staking' | 'task';
  status: 'active' | 'expiring' | 'upcoming';
  link: string;
}

export const cryptoOffers: CryptoOffer[] = [
  {
    id: 1,
    title: "Bitcoin Faucet Daily Claim",
    description: "Claim up to 0.001 BTC every 24 hours. No KYC. Instant payout.",
    type: 'faucet',
    status: 'active',
    link: "#"
  },
  {
    id: 2,
    title: "Solana NFT Airdrop",
    description: "Mint a free Solana NFT. 50,000 claimed so far. Ends in 3 days.",
    type: 'airdrop',
    status: 'expiring',
    link: "#"
  },
  {
    id: 3,
    title: "Stake ETH 2.0 – 5% APY",
    description: "Earn passive income by staking ETH. Minimum 0.1 ETH. No lockup.",
    type: 'staking',
    status: 'active',
    link: "#"
  }
];