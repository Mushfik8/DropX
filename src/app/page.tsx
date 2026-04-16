"use client";

import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const { walletAddress, connectWallet } = useApp();
  const router = useRouter();

  const handleConnect = async () => {
    if (!walletAddress) {
      await connectWallet();
    }
    router.push('/rewards');
  };

  return (
    <div className="min-h-[calc(100vh-72px)] bg-background flex flex-col items-center justify-center p-6 text-center">
      <main className="flex-1 flex flex-col items-center justify-center max-w-3xl w-full">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
          Earn Rewards in <span className="text-primary">Web3</span>
        </h2>
        <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mb-12">
          Complete tasks, connect your wallet, and earn crypto rewards instantly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full justify-center px-4">
          <Link 
            href="/rewards" 
            className="bg-primary hover:bg-primary-hover text-black px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(250,204,21,0.2)]"
          >
            Start Earning Now
          </Link>
          <Link 
            href="/rewards"
            className="bg-[#1c2025] hover:bg-[#2b2f36] border border-[#2b2f36] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all inline-block"
          >
            Learn More
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="bg-card border border-card-border p-8 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">100K+</h3>
            <p className="text-foreground/60 font-medium">Total Users</p>
          </div>
          <div className="bg-card border border-card-border p-8 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">$500K+</h3>
            <p className="text-foreground/60 font-medium">Rewards Distributed</p>
          </div>
        </div>
      </main>
    </div>
  );
}
